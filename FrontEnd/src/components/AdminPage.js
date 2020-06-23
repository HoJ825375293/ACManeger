import React from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  message,
  Icon,
  Checkbox,
  notification,
  Statistic,
  Avatar,
  Divider,
  Progress,
  Slider,
  InputNumber,
  Menu,
  Table
} from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Redirect, Link } from "react-router-dom";
import AccountBar from './AccountBar'
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

class AdminPage extends React.Component {
    constructor(){
        super()

        this.columns = [
          {
            title: '房间',
            dataIndex: 'room',
            width: '30%',
          },
          {
            title: '状态',
            dataIndex: 'state',
          },]

        this.state={
            startTime:new Date(),
            time:new Date(),
            name:"张三"
        }
        setInterval(function(){
            this.setState({
                time:new Date()
            })
        }.bind(this), 1000)
    }


    render(){
        const {startTime, time, name} = this.state
        const columns = this.columns

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
                        style={{ width: 480, height:200, marginTop:15 }}
                    >
                    <Icon type="tool" style={{marginLeft:150, fontSize:80}}/>
                    <h3 style={{marginLeft:135, fontSize:35}}>设计中</h3>
                    </Card>
                    
                    <Card
                        style={{ width: 480, height:200, marginTop:15 }}
                    >
                    <Icon type="tool" style={{marginLeft:150, fontSize:80}}/>
                    <h3 style={{marginLeft:135, fontSize:35}}>设计中</h3>
                    </Card>
                </Col>
                <Col span={10}>
                <Card>
                    <Table columns={columns} dataSource={data} 
                    bordered
                    title={() => '房间状态表'}
                    footer={() => '更多房间待添加'}/>
                </Card>
                </Col>
                </Col>
            </Row>
            </div>
        )
    }

}

export default AdminPage;