import React, { Component, Fragment}from "react";
import { Button,Input, Tooltip, Select, Col, Row, Menu, Dropdown, Icon, Table,Divider, Card} from 'antd';

import { Redirect, Link } from "react-router-dom";

const InputGroup = Input.Group;

class RecepPage extends React.Component {
    constructor(props){
        super(props)

        this.columns = [
            {
              title: '房间',
              dataIndex: 'room',
              width: '30%',
            },
            {
              title: '开始时间',
              dataIndex: 'startTime',
            },{
                title: '结束时间',
                dataIndex: 'endTime',
            },{
                title: '持续时间',
                dataIndex: 'during',
            },{
                title: '空调模式',
                dataIndex: 'mode',
            },{
                title: '目标温度',
                dataIndex: 'temp',
            },{
                title: '风速',
                dataIndex: 'wind',
            },{
                title: '用电量',
                dataIndex: 'elec',
            },{
                title: '费用',
                dataIndex: 'money',
            },
        ]

        this.state={
            data:[{
                key:"1",
                room:301,
                startTime:0,
                endTime:10,
                during:10,
                mode:"制冷",
                temp:25,
                wind:"中风",
                elec:20,
                money:20
                }
            ]
        }

    }

    handleSelect(value){
        this.setState({from:value});
    }

    handleIn(){
        console.log(this.state.from)
    }

    handleFrom(event){
        let value = event.target.value;
        this.setState({from:value})
    }

    OnMenu(key){
        this.setState({
            from:key.item.props.children
        })
    }

    render(){
        const menu = (
            <Menu onClick={(key)=>this.OnMenu(key)}>
              <Menu.Item key="0">301</Menu.Item>
              <Menu.Item key="1">302</Menu.Item>
              <Menu.Item key="3">303</Menu.Item>
              <Menu.Item key="4">304</Menu.Item>
              <Menu.Divider />
              <Menu.Item key="5">这里是一些例子</Menu.Item>
            </Menu>
        );
        const columns = this.columns
        const {data} = this.state
        return(
            <div>
            <div style={{width:"100%", backgroundColor:"#000000"}}>
                <Row style={{height:75}}>
                <Icon style={{margin:"15px",fontSize: '35px',color:"white"}} type="menu-fold" />
                <span style={{margin:"15px",fontSize: '35px',color:"white"}}>温控计费系统</span>
                <Icon style={{margin:"15px",fontSize: '35px',color:"#87CEEB"}} type="code-sandbox" />
                <span style={{margin:"15px",fontSize: '35px',color:"white"}}>前台端</span>
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
                        <span style={{fontSize:17}}>账单打印</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span style={{fontSize:17}}>使用说明</span>
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
                        <span style={{fontSize:17}}>退出登录</span>
                    </Menu.Item>
                </Menu>
                </Col>

                <Col>
                <Row style={{height:20}}/>
                <Col span={1}/>
                <Col span={15}>
                <Fragment>
                <InputGroup compact onSearch={value => console.log(value)}>
                    <Tooltip title="输入查询用户的房间">
                    <div >
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Input
                        style={{ width: 180, textAlign: 'center' }}
                        placeholder="请输入查询房间"
                        value = {this.state.from}
                        onChange={event => this.handleFrom(event)}
                        allowClear = {true}
                        />
                    </Dropdown>
                    </div>
                    </Tooltip>
                    <Button type="primary" onClick={()=>{this.handleIn()}}>打印详单</Button>
                </InputGroup>
                </Fragment>
                <Divider/>
                <Card 
                    style={{marginTop:30, width:1050, height:700}}
                >
                <h2>账单结果一览</h2>
                <Divider/>
                <Table columns={columns} dataSource={data} 
                    bordered
                />
                </Card>
                </Col>
                </Col>
            </Row>
            </div>
        )
    }

}

export default RecepPage;