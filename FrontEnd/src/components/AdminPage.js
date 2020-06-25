import React from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Icon,
  Avatar,
  Divider,
  Menu,
  Table,
  Popconfirm
} from "antd";
import { Redirect, Link } from "react-router-dom";
import AdminAvartar from '../PIC/u177.svg'

const data = [
  {
    key:"1",
    room:301,
    state:"正在运行"
  },{
    key:"2",
    room:302,
    state:"等待中"
  },{
    key:"3",
    room:303,
    state:"关闭"
  }
]

const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
      <tr {...props} />
    </EditableContext.Provider>
  );
const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    state = {
      editing: false,
    };
  
    toggleEdit = () => {
      const editing = !this.state.editing;
      this.setState({ editing }, () => {
        if (editing) {
          this.input.focus();
        }
      });
    };
  
    save = e => {
      const { record, handleSave } = this.props;
      this.form.validateFields((error, values) => {
        if (error && error[e.currentTarget.id]) {
          return;
        }
        this.toggleEdit();
        handleSave({ ...record, ...values });
      });
    };
  
    renderCell = form => {
      this.form = form;
      const { children, dataIndex, record, title } = this.props;
      const { editing } = this.state;
      return editing ? (
        <Form.Item style={{ margin: 0 }}>
          {form.getFieldDecorator(dataIndex, {
            rules: [
              {
                required: true,
                message: `${title} 不能为空.`,
              },
            ],
            initialValue: record[dataIndex],
          })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{ paddingRight: 24 }}
          onClick={this.toggleEdit}
        >
          {children}
        </div>
      );
    };
  
    render() {
      const {
        editable,
        dataIndex,
        title,
        record,
        index,
        handleSave,
        children,
        ...restProps
      } = this.props;
      return (
        <td {...restProps}>
          {editable ? (
            <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
          ) : (
            children
          )}
        </td>
      );
    }
}

class AdminPage extends React.Component {
    constructor(props){
        super(props)

        this.columns1 = [
          {
            title: '房间',
            dataIndex: 'room',
            width: '30%',
          },
          {
            title: '状态',
            dataIndex: 'state',
          },
        ]

        this.columns = [
            {
              title: '房间',
              dataIndex: 'room',
              width: '30%',
              editable: true,
            },
            {
              title: '温度',
              dataIndex: 'temperature',
              editable: true,
            },
            {
              title: '风速',
              dataIndex: 'wind',
              editable: true,
            },
            {
              title: '操作',
              dataIndex: 'operation',
              render: (text, record) =>
                this.state.dataSource.length >= 1 ? (
                  <Popconfirm title="确定删除?" cancelText="不" okText="是" onConfirm={() => this.handleDelete(record.key)}>
                    <a>删除</a>
                  </Popconfirm>
                ) : null,
            },
        ];

        this.state={
            startTime:new Date(),
            time:new Date(),
            name:"张三",
            page:1,
            dataSource: [
                {
                  key: '0',
                  room: '301',
                  temperature: 26,
                  wind: '中风',
                },
                {
                  key: '1',
                  room: '302',
                  temperature: 26,
                  wind: '关机',
                },
              ],
            count: 2
        }
        setInterval(function(){
            this.setState({
                time:new Date()
            })
        }.bind(this), 1000)
    }

    onTableClick = (e) =>{
        this.setState({
            page:e.key
        })
    }

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    };

    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
          key: count,
          room: `30${count+1}`,
          temperature: 26,
          wind: `中风`,
        };
        this.setState({
          dataSource: [...dataSource, newData],
          count: count + 1,
        });
    };

    handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ dataSource: newData });
    };


    render(){
        const {startTime, time, name, page} = this.state
        const columns1 = this.columns1

        const { dataSource } = this.state;
        const components = {
        body: {
            row: EditableFormRow,
            cell: EditableCell,
        },
        };
        const columns = this.columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: record => ({
            record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: this.handleSave,
            }),
        };
        });

        if(page == 1)
            return(
                <div>
            <div style={{width:"100%", backgroundColor:"#000000"}}>
                <Row style={{height:75}}>
                <Icon style={{margin:"15px",fontSize: '35px',color:"white"}} type="menu-fold" />
                <span style={{margin:"15px",fontSize: '35px',color:"white"}}>温控计费系统</span>
                <Icon style={{margin:"15px",fontSize: '35px',color:"#87CEEB"}} type="code-sandbox" />
                <span style={{margin:"15px",fontSize: '35px',color:"white"}}>用户端</span>
                </Row>
            </div>
            <Row style={{height:500}}>
                <Col span={4}>
                <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
                style={{height:1000}}
                onClick={this.onTableClick}
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>系统状态</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>用户列表</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>联系运营</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="inbox" />
                        <span>捐赠支持</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Icon type="inbox" />
                        <span>使用说明</span>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Icon type="desktop" />
                        <span>退出登录</span>
                    </Menu.Item>
                </Menu>
                </Col>

                <Col>
                <Row style={{height:20}}/>
                <Col span={1}/>
                <Col span={8}>
                    <Card
                        style={{ width: 520, height:250 }}
                    >
                    <div>
                    <Row>
                    <Avatar style={{width: 120, height:100 }} src={AdminAvartar} />
                    <span style={{marginLeft:40, fontSize:25, fontWeight:"bold"}}>管理员-{name}</span> 
                    </Row>
                    </div>
                    <Divider/>
                    <div style={{marginLeft:50}}>
                    <Row><span style={{marginLeft:40, fontSize:20}}>登录时间: {startTime.toLocaleTimeString()}</span></Row>
                    <Row style={{marginTop:5}}><span style={{marginLeft:40,fontSize:20}}>现在时间: {time.toLocaleTimeString()}</span></Row>
                    </div>
                    </Card>

                    <Card
                        style={{ width: 520, height:200, marginTop:15 }}
                    >
                    <Icon type="tool" style={{marginLeft:150, fontSize:80}}/>
                    <h3 style={{marginLeft:135, fontSize:35}}>设计中</h3>
                    </Card>
                    
                    <Card
                        style={{ width: 520, height:200, marginTop:15 }}
                    >
                    <Icon type="tool" style={{marginLeft:150, fontSize:80}}/>
                    <h3 style={{marginLeft:135, fontSize:35}}>设计中</h3>
                    </Card>
                </Col>
                <Col span={10}>
                <Card >
                    <Table columns={columns1} dataSource={data} 
                    bordered
                    title={() => '房间状态表'}
                    footer={() => '更多房间待添加'}
                    />
                </Card>
                </Col>
                </Col>
            </Row>
            </div>
            )
        else
        return(
            <div>
            <div style={{width:"100%", backgroundColor:"#000000"}}>
                <Row style={{height:75}}>
                <Icon style={{margin:"15px",fontSize: '35px',color:"white"}} type="menu-fold" />
                <span style={{margin:"15px",fontSize: '35px',color:"white"}}>温控计费系统</span>
                <Icon style={{margin:"15px",fontSize: '35px',color:"#87CEEB"}} type="code-sandbox" />
                <span style={{margin:"15px",fontSize: '35px',color:"white"}}>用户端</span>
                </Row>
            </div>
            <Row style={{height:500}}>
                <Col span={4}>
                <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
                style={{height:1000}}
                onClick={this.onTableClick}
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>系统状态</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>用户列表</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>联系运营</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="inbox" />
                        <span>捐赠支持</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Icon type="inbox" />
                        <span>使用说明</span>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Icon type="desktop" />
                        <span>退出登录</span>
                    </Menu.Item>
                </Menu>
                </Col>
                <Col span={1}/>
                <Col>
                <Row style={{height:25}}/>
                <Col span={1}/>
                <Col span={12}>
                    <div>
                        <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                        添加
                        </Button>
                        <Table
                        components={components}
                        rowClassName={() => 'editable-row'}
                        bordered
                        dataSource={dataSource}
                        columns={columns}
                        />
                    </div>
                </Col>
                </Col>
            </Row>
            </div>
        )
    }

}

export default AdminPage;