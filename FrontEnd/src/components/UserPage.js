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
  Menu
} from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Redirect, Link } from "react-router-dom";
import AccountBar from './AccountBar'
import UserAvartar from '../PIC/u50.svg'

//const { Meta } = Card;
const marks = {
    0: '0°C',
    26: '26°C',
    36: '36°C',
    36: {  style: { color: '#f50',},label: <strong>36°C</strong>,}
}

class UserPage extends React.Component {
    constructor(){
        super()

        this.state={
            temprature:26,
            windForce:0,
            workingMode:0,
            windText:"关机",
            roomId:301,
            startTime:new Date(),
            time:new Date(),
            elec:0,
            money:0
        }
        setInterval(function(){
            this.setState({
                time:new Date()
            })
        }.bind(this), 1000)
    }

    onFinishCount() {
        console.log('finished')
    }

    onTemUpOne = () => {
        var tem = this.state.temprature + 1
        this.setState({
            temprature: tem
        })
    }

    onTemLowOne = () =>{
        var tem = this.state.temprature - 1
        this.setState({
            temprature: tem
        })
    }

    ChangeWorkingMode = () =>{
        var tem = (this.state.workingMode + 1) % 2
        this.setState({
            workingMode: tem
        })
    }

    ChangeWindForce = () =>{
        var tem = (this.state.windForce + 1) % 4
        this.setState({
            windForce: tem
        })
    }

    onTemChange = value =>{
        this.setState({
            temprature:value
        })
    }

    render(){
        const {temprature} = this.state;
        if(this.state.windForce === 0){
            var windForce = 0;
            var windText = "关机"
        }else if(this.state.windForce === 1){
            var windForce = 33;
            var windText = "低速"
        }else if(this.state.windForce === 2){
            var windForce = 66;
            var windText = "中速"
        }else if(this.state.windForce === 3){
            var windForce = 100;
            var windText = "高速"
        }
        
        if(this.state.workingMode === 0){
            var workingMode = "制冷";
        }else if(this.state.workingMode === 1){
            var workingMode = "制热";
        }
        const {roomId, startTime, time, money, elec} = this.state

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
                        <span style={{fontSize:17}}>空调控制</span>
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
                <Col span={8}>
                    <Card
                        style={{ width: 480, height:250 }}
                    >
                    <div>
                    <Row>
                    <Avatar style={{width: 120, height:100 }} src={UserAvartar} />
                    <span style={{marginLeft:40, fontSize:25, fontWeight:"bold"}}>用户房间-{roomId}</span> 
                    </Row>
                    </div>
                    <Divider/>
                    <div style={{marginLeft:50}}>
                    <Row><span style={{marginLeft:40, fontSize:20}}>入住时间: {startTime.toLocaleTimeString()}</span></Row>
                    <Row style={{marginTop:5}}><span style={{marginLeft:40,fontSize:20}}>现在时间: {time.toLocaleTimeString()}</span></Row>
                    </div>
                    </Card>

                    <Card
                        style={{ width: 480, height:200, marginTop:15 }}
                    >
                    <div>
                    <Row>
                        <Icon type="thunderbolt" style={{color:"#FFA500", marginLeft:50, fontSize:35}}/>
                        <Icon type="transaction" style={{color:"#228B22", marginLeft:180,fontSize:35}}/>
                    </Row>
                    </div>
                    <Divider/>
                    <div>
                    <Col span={12}><span style={{marginLeft:40, fontSize:20}}>使用电量:</span>
                        <h2 style={{marginLeft:50}}>{elec}</h2>
                    </Col>
                    <Col span={12}><span style={{marginLeft:40,fontSize:20}}>需交费用:</span>
                        <h2 style={{marginLeft:50}}>{money}</h2>
                    </Col>
                    </div>
                    </Card>
                    
                    <Card
                        style={{ width: 480, height:280, marginTop:15 }}
                    >
                    <div>
                    <Row>
                    <h1 style={{textAlign:"center"}}>耗电与计费规则</h1>
                    </Row>
                    </div>
                    <Divider/>
                    <div>
                    <Col span={12}><span style={{marginLeft:40, fontSize:18}}>耗电标准:</span>
                    <h3 style={{marginLeft:40, marginTop:10}}>低风:1度/3分钟</h3>
                    <h3 style={{marginLeft:40}}>中风:1度/2分钟</h3>
                    <h3 style={{marginLeft:40}}>高风:1度/1分钟</h3>
                    </Col>
                    <Col span={12}><span style={{marginLeft:40,fontSize:18}}>计费标准:</span>
                    <h3 style={{marginLeft:40, marginTop:10}}>1元/1度</h3>
                    </Col>
                    </div>
                    </Card>
                </Col>
                <Col span={10}>
                <Card
                    style={{ width: 450 }}
                    cover={
                    <img
                        alt="example"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592926582880&di=f94879ca7b5525f6b9973240e0fbeea7&imgtype=0&src=http%3A%2F%2Fimg006.hc360.cn%2Fm3%2FM05%2FFC%2FB0%2FwKhQ5lSs7eSEU9pJAAAAAG3Iu58155.jpg"
                    />
                    }
                    actions={[
                        <Icon type="question" />,
                        <Icon type="line-chart" />,
                        <Icon type="ellipsis" key="ellipsis" />,
                      ]}
                    >
                    <Card>
                    <div style={{textAlign:"center"}}><Progress strokeLinecap="square" type="dashboard" percent={windForce} format={() => `${windText}`} /></div>
                        <div style={{textAlign:"center"}}>
                            {workingMode}
                            <Divider type="vertical" style={{height:30, marginLeft:20, marginRight:10}}/>    
                            {/*{temprature}℃*/}
                            <InputNumber
                                    min={0}
                                    max={36}
                                    formatter={value => `${value}℃`}
                                    value={temprature}
                                    onChange={this.onTemChange}
                                    
                            />
                        </div>
                        <Row>
                            <Slider marks={marks} min={0} max={36} onChange={this.onTemChange} value={typeof temprature === 'number'? temprature:0}/>
                        </Row>
                    </Card>
                    <div style={{marginTop:10,textAlign:"center"}}>
                        <Col span={7}>
                        <Button style={{marginLeft:50, marginTop:60}}onClick={this.ChangeWorkingMode}>模式</Button>
                        </Col>
                        <Col span={8}>
                        <Card style={{ width: 100, marginLeft:35,textAlign:"center" }}>
                            <Button onClick={this.onTemUpOne}>+</Button>
                            <Divider />
                            <Button onClick={this.onTemLowOne}>-</Button>
                        </Card>
                        </Col>
                        <Col span={8}>
                        <Button style={{marginLeft:10, marginTop:60}} onClick={this.ChangeWindForce}>风速</Button>
                        </Col>
                    </div>
                </Card>
                </Col>
                </Col>
            </Row>
            </div>
        )
    }

}

export default UserPage;

/*
<Row style={{height:100}}>
                <Col span={5}/>
                <Col span={12}>
                    <Countdown title="等待中" value={deadline} onFinish={this.onFinishCount} />
                </Col>
            </Row>

<Meta
                    style={{height: 50}}
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="我的空调遥控"
                    //description={temprature}
                    > 
                    </Meta>
*/