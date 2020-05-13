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
  InputNumber
} from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Redirect, Link } from "react-router-dom";
import AccountBar from './AccountBar'

//const { Meta } = Card;
const {Countdown} = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
const marks = {
    0: '0°C',
    26: '26°C',
    36: '36°C',
    36: {  style: { color: '#f50',},label: <strong>36°C</strong>,}
}

class UserPage extends React.Component {
    state={
        temprature:26,
        windForce:0,
        workingMode:0,
        windText:"关机"
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
        return(
            <div>
            <AccountBar path='/'/>
            
            <Row style={{height:100}}>
                <Col span={5}/>
                <Col span={12}>
                    <Countdown title="等待中" value={deadline} onFinish={this.onFinishCount} />
                </Col>
            </Row>
            <Row style={{height:500}}>
                <Col span={5}/>
                <Col span={12}>
                <Card
                    style={{ width: 350 }}
                    cover={
                    <img
                        alt="example"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589200326338&di=89c86475ec0d6705c164e58f3093f68c&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F07%2F14%2Fc53e82b1a512d3ad0e0e2d80e25d884a.jpg"
                    />
                    }
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
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
                        <Button style={{marginLeft:10, marginTop:60}}onClick={this.ChangeWorkingMode}>模式</Button>
                        </Col>
                        <Col span={8}>
                        <Card style={{ width: 100, marginLeft:10,textAlign:"center" }}>
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
            </Row>
            </div>
        )
    }

}

export default UserPage;

/*
<Meta
                    style={{height: 50}}
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="我的空调遥控"
                    //description={temprature}
                    > 
                    </Meta>
*/