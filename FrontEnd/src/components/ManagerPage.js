import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Table, Menu, Icon,
  Avatar, Divider,
} from "antd";
import ManagerAvartar from '../PIC/u299.svg'
class ManagerPage extends React.Component {
  constructor(){
    super()

    this.state={
      name:"老板1号",
      startTime:new Date(),
      time:new Date(),
    }
    setInterval(function(){
      this.setState({
          time:new Date()
      })
    }.bind(this), 1000)
  }
  
  render(){
    const {startTime, time, name} = this.state
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
                    <span style={{fontSize:17}}>概览信息</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span style={{fontSize:17}}>详细查询</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="inbox" />
                    <span style={{fontSize:17}}>使用说明</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="inbox" />
                    <span style={{fontSize:17}}>捐赠支持</span>
                </Menu.Item>
                <Menu.Item key="5">
                    <Icon type="inbox" />
                    <span style={{fontSize:17}}>联系运营</span>
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
            <Col span={8}>
                <Card
                    style={{ width: 520, height:250 }}
                >
                <div>
                <Row>
                <Avatar style={{width: 120, height:100 }} src={ManagerAvartar} />
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
                <Icon type="tool" style={{marginLeft:170, fontSize:80}}/>
                <h3 style={{marginLeft:155, fontSize:35}}>设计中</h3>
                </Card>
                
                <Card
                    style={{ width: 520, height:200, marginTop:15 }}
                >
                <Icon type="tool" style={{marginLeft:180, fontSize:80}}/>
                <h3 style={{marginLeft:155, fontSize:35}}>设计中</h3>
                </Card>
            </Col>
            <Col span={10}>
            <Card >
                
            </Card>
            </Col>
            </Col>
        </Row>
        </div>
    )
  }
}

export default ManagerPage;