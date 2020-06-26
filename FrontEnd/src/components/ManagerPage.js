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
  DatePicker,
  Tooltip
} from "antd";
import moment from 'moment'
import 'moment/locale/zh-cn'
import ManagerAvartar from '../PIC/u299.svg'

moment.locale('zh-cn')

const {RangePicker} = DatePicker

class ManagerPage extends React.Component {
  constructor(props){
    super(props)

    this.state={
      name:"老板1号",
      startTime:new Date(),
      time:new Date(),
      page:1,
      elec:0,
      money:0
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

    onDateChange = (dates, dateStrings) =>{
        console.log("from", dates[0], ", to", dates[1])
        console.log("From", dateStrings[0], ", to", dateStrings[1])
    }

  render(){
    const {startTime, time, name, page, elec, money} = this.state
    if(page == 1){
    return(
      <div>
        <div style={{width:"100%", backgroundColor:"#000000"}}>
            <Row style={{height:75}}>
            <Icon style={{margin:"15px",fontSize: '35px',color:"white"}} type="menu-fold" />
            <span style={{margin:"15px",fontSize: '35px',color:"white"}}>温控计费系统</span>
            <Icon style={{margin:"15px",fontSize: '35px',color:"#87CEEB"}} type="code-sandbox" />
            <span style={{margin:"15px",fontSize: '35px',color:"white"}}>经理端</span>
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
            <Col span={7}>
                <Card
                    style={{ width: 480, height:250 }}
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
                    <Col span={12}><span style={{marginLeft:40, fontSize:20}}>今日电量:</span>
                        <h2 style={{marginLeft:50}}>{elec}</h2>
                    </Col>
                    <Col span={12}><span style={{marginLeft:40,fontSize:20}}>总费用:</span>
                        <h2 style={{marginLeft:50}}>{money}</h2>
                    </Col>
                </div>
                </Card>
                
                <Card
                    style={{ width: 480, height:200, marginTop:15 }}
                >
                <div>
                    <Row>
                    <h1 style={{textAlign:"center"}}>今日数据</h1>
                    </Row>
                    </div>
                    <Divider/>
                    <div>
                    <Col span={12}><span style={{marginLeft:40, fontSize:18}}>空调使用次数:</span>
                    <h3 style={{marginLeft:40, marginTop:10}}></h3>
                    </Col>
                    <Col span={12}><span style={{marginLeft:40,fontSize:18}}>详单记录数:</span>
                    <h3 style={{marginLeft:40, marginTop:10}}></h3>
                    </Col>
                </div>
                </Card>
            </Col>
            <Col span={11}>
            <Card >
            <Tooltip title="输入日期以查看报表">
            <RangePicker
            ranges={{
                '今日': [moment(), moment()],
                '本周': [moment().startOf('week'), moment().endOf('week')],
                '本月': [moment().startOf('month'), moment().endOf('month')],
            }}
            placeholder={["开始日期","结束日期"]}
            onChange={this.onDateChange}
            />
            </Tooltip>

            </Card>
            </Col>
            </Col>
        </Row>
        </div>
    )}
    else{
        return(
        <div>
        <div style={{width:"100%", backgroundColor:"#000000"}}>
            <Row style={{height:75}}>
            <Icon style={{margin:"15px",fontSize: '35px',color:"white"}} type="menu-fold" />
            <span style={{margin:"15px",fontSize: '35px',color:"white"}}>温控计费系统</span>
            <Icon style={{margin:"15px",fontSize: '35px',color:"#87CEEB"}} type="code-sandbox" />
            <span style={{margin:"15px",fontSize: '35px',color:"white"}}>经理端</span>
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
        </Row>
        </div>
        )
    }
  }
}

export default ManagerPage;

/*
componentDidMount(){
    myChart = echarts.init(document.getElementById('Stat'));
    myChart.setOption({
        baseOption: {
            timeline: {
                axisType: 'category',
                show: true,
                playInterval: 1000,
                data: ['各时期', '过度时期', '季节影响','天气影响','风景影响']
            },
            grid: { 
                left: '5%',
                right: '7%',
                bottom: '12%',
                containLabel: true 
            },
            title: {
                text: '统计信息',
                subtext: '这里展示了一些相关统计信息'
            },
            tooltip: {
                trigger: 'axis',
            },
            toolbox:{
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
        },
        //渲染的五个图
        options:[
            {
                legend: {
                    data: ['各个时期']
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['初唐', '盛唐', '中唐', '晚唐']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} %'
                    }
                },
                series: [
                {
                    name: '各个时期',
                    type: 'line',
                    data: [56.08,70.75,78.49,75.24],
                },
                //这些undefined用于避免继承其他timeline点内容，继承是这个组件默认的
                //因此才写的这么坑
                {
                    name: 'undefined',
                    type: 'line',
                    data: [],
                },{
                    name: 'undefined',
                    type: 'line',
                    data: [],
                },{
                    name: 'undefined',
                    type: 'line',
                    data: [],
                },{
                    name: 'undefined',
                    type: 'line',
                    data: [],
                }]
            },{
                legend: {
                    data: ['过度时期']
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['初唐->盛唐', '盛唐->中唐', '中唐->晚唐']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} %'
                    }
                },
                series: [{
                    name: '过度时期',
                    type: 'line',
                    data: [61.36,74.49,77.24],
                },{
                    name: 'undefined',
                    type: 'line',
                    data: [],
                },{
                    name: 'undefined',
                    type: 'line',
                    data: [],
                },{
                    name: 'undefined',
                    type: 'line',
                    data: [],
                },{
                    name: 'undefined',
                    type: 'line',
                    data: [],
                }]
            },{
                legend: {
                    data: ['春', '夏', '秋', '冬']
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['哀伤','失意','愁绪','喜悦','孤独','恐惧','愤怒','怨恨','惊讶']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} %'
                    }
                },
                series: [{
                        name: '春',
                        type: 'line',
                        data: [24.42,12.57,8.61,44.98,5.02,1.42,1.02,1.38,0.58],
                    },{
                        name: '夏',
                        type: 'line',
                        data: [33.63,17.7,8.85,17.7,8.85,6.19,1.77,2.65,2.65,],
                    },{
                        name: '秋',
                        type: 'line',
                        data: [39.63,21.99,7.05,10.89,11.93,3.32,3.32,1.56,0.31,],
                    },{
                        name: '冬',
                        type: 'line',
                        data: [37.24,25,4.08,12.24,9.18,3.57,5.1,2.04,1.53],
                    },{
                        name: 'undefined',
                        type: 'line',
                        data: [],
                    }
                ]
            },{
                legend: {
                    data: ['雨', '雪', '露', '风','云']
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['哀伤','失意','愁绪','喜悦','孤独','恐惧','愤怒','怨恨','惊讶']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} %'
                    }
                },
                series: [{
                        name: '雨',
                        type: 'line',
                        data: [55.36,12.8,7.44,11.61,8.33,2.38,0.89,0.6,0.6,],
                    },{
                        name: '雪',
                        type: 'line',
                        data: [34.75,19.15,9.93,17.73,9.22,4.96,2.84,1.42,0,],
                    },{
                        name: '露',
                        type: 'line',
                        data: [37.83,17.6,4.49,21.35,9.36,2.62,4.12,2.25,0.37,],
                    },{
                        name: '风',
                        type: 'line',
                        data: [35.03,15.92,10.19,17.2,8.28,3.18,7.01,2.55,0.64,],
                    },{
                        name: '云',
                        type: 'line',
                        data: [41.63,16.74,5.58,16.74,9.44,6.44,2.15,0.43,0.86,],
                    },
                ]
            },{
                legend: {
                    data: ['山', '水', '边塞', '建筑','名胜']
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['哀伤','失意','愁绪','喜悦','孤独','恐惧','愤怒','怨恨','惊讶']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} %'
                    }
                },
                series: [{
                        name: '山',
                        type: 'line',
                        data: [41.01,19.82,5.07,18.89,9.22,1.38,1.84,0.92,1.84,],
                    },{
                        name: '水',
                        type: 'line',
                        data: [34.18,21.02,8.31,19.63,9.47,3,2.31,1.39,0.69,],
                    },{
                        name: '边塞',
                        type: 'line',
                        data: [43.3,17.26,7.07,15.76,6.97,3.75,3.43,2.36,0.11,],
                    },{
                        name: '建筑',
                        type: 'line',
                        data: [33.72,18.13,7.64,23.97,9.86,2.33,1.8,1.48,1.06,],
                    },{
                        name: '名胜',
                        type: 'line',
                        data: [40,18.81,5.97,19.1,8.06,3.58,3.28,0.6,0.6,],
                    },
                ]
            }
        ]
    })
    }
*/