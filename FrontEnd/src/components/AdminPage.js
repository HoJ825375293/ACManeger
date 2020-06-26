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
  Popconfirm,
  Progress,
  InputNumber,
  message
} from "antd";

import AdminAvartar from '../PIC/u177.svg'
import store from '../store'

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
            },{
              title: '费用',
              dataIndex: 'money',
              editable: true,
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
                  room: '101',
                  temperature: 25,
                  wind: '关机',
                  windForce:0,
                  money: 0,
                  env:32
                },
                {
                  key: '1',
                  room: '102',
                  temperature: 25,
                  wind: '关机',
                  windForce:0,
                  money: 0,
                  env:28,
                },{
                  key: '2',
                  room: '103',
                  temperature: 25,
                  wind: '关机',
                  windForce:0,
                  money: 0,
                  env:30,
                },{
                  key: '3',
                  room: '104',
                  temperature: 25,
                  wind: '关机',
                  windForce:0,
                  money: 0,
                  env:29
                },{
                  key: '4',
                  room: '105',
                  temperature: 25,
                  wind: '关机',
                  windForce:0,
                  money: 0,
                  env:35
                },
              ],
            count: 5
        }
        setInterval(function(){
            this.setState({
                time:new Date()
            })
        }.bind(this), 1000)

        store.subscribe(() => {
          const data = store.getState().roomList;
          this.setState({
            dataSource:data
          })
          console.log("aaa")
        })
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

    onChange = (value) =>{
      console.log('changed', value)
    }

    onFake = () =>{
      const action={
        type:"Set",
        roomList:this.state.dataSource
      }
      store.dispatch(action)
      message.success("启动空调!")
    }

    render(){
        const {startTime, time, name, page} = this.state

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
                <span style={{margin:"15px",fontSize: '35px',color:"white"}}>管理员端</span>
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
                        <span style={{fontSize:17}}>系统状态</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span style={{fontSize:17}}>用户列表</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span style={{fontSize:17}}>联系运营</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="inbox" />
                        <span style={{fontSize:17}}>捐赠支持</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Icon type="inbox" />
                        <span style={{fontSize:17}}>使用说明</span>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Icon type="desktop" />
                        <span style={{fontSize:17}}>退出登录</span>
                    </Menu.Item>
                </Menu>
                </Col>

                <Col>
                <Row style={{height:20}}/>
                <Col span={1}/>
                <Col span={7}>
                    <Card
                        style={{ width: 480, height:250 }}
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
                        style={{ width: 480, height:300,marginTop:15 }}
                    >
                    <span style={{marginLeft:40, fontSize:18}}>空调状态</span>
                    <Divider/>
                    <span style={{marginLeft:40, fontSize:18}}>运行中</span>
                    <br/>
                    <Progress percent={0} status="active"  showInfo={false} />
                    <span style={{marginLeft:40, fontSize:18}}>等待中</span>
                    <br/>
                    <Progress percent={0} status="success" showInfo={false} />
                    <span style={{marginLeft:40, fontSize:18}}>关机中</span>
                    <br/>
                    <Progress percent={100} status="exception" showInfo={false} />
                    </Card>
                </Col>
                <Col span={12}>
                <Card
                        style={{ width: 480, height:300}}
                    >
                    <span style={{marginLeft:40, fontSize:18}}>设置参数</span>
                    <Divider/>
                    <span style={{marginLeft:40, fontSize:18}}>空调最低温度: </span>
                    <InputNumber
                      defaultValue={18}
                      min={0}
                      max={100}
                      formatter={value => `${value}℃`}
                      parser={value => value.replace('℃', '')}
                      onChange={this.onChange}
                    />
                    <br />
                    <span style={{marginLeft:40, fontSize:18}}>空调最高温度: </span>
                    <InputNumber
                      defaultValue={25}
                      min={0}
                      max={100}
                      formatter={value => `${value}℃`}
                      parser={value => value.replace('℃', '')}
                      onChange={this.onChange}
                    />
                    <br/>
                    <span style={{marginLeft:40, fontSize:18}}>空调模式: </span>
                    <InputNumber
                      defaultValue={"制冷"}
                      min={0}
                      max={100}
                      style={{marginLeft:37}}
                      formatter={value => `${value}`}
                      onChange={this.onChange}
                    />
                    <br/>
                    <span style={{marginLeft:40, fontSize:18}}>费率: </span>
                    <InputNumber
                      defaultValue={1}
                      min={0}
                      max={100}
                      style={{marginLeft:72}}
                      formatter={value => `${value}`}
                      onChange={this.onChange}
                    />
                    <Row>
                      <Button type="primary" style={{marginLeft:140,marginTop:10}} onClick={this.onFake} >启动/设置</Button>
                    </Row>
                </Card>
                <Card
                        style={{ width: 480, height:280, marginTop:15 }}
                    >
                    <div>
                    <Row>
                    <h1 style={{textAlign:"center"}}>管理员事项</h1>
                    </Row>
                    </div>
                    <Divider/>
                    <div>
                    <Col span={24}>
                      <Row style={{height:35}}>
                      <span style={{marginLeft:40, fontSize:18}}>1, 设置空调温度范围</span>
                      </Row>
                      <Row style={{height:35}}>
                      <span style={{marginLeft:40, fontSize:18}}>2, 空调调度队列属性</span>
                      </Row>
                      <Row style={{height:35}}>
                      <span style={{marginLeft:40, fontSize:18}}>3, 温控系统更多功能待开发</span>
                      </Row>
                    </Col>
                    </div>
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
                <span style={{margin:"15px",fontSize: '35px',color:"white"}}>管理员端</span>
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
                        <span style={{fontSize:17}}>系统状态</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span style={{fontSize:17}}>用户列表</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span style={{fontSize:17}}>联系运营</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="inbox" />
                        <span style={{fontSize:17}}>捐赠支持</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Icon type="inbox" />
                        <span style={{fontSize:17}}>使用说明</span>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Icon type="desktop" />
                        <span style={{fontSize:17}}>退出登录</span>
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