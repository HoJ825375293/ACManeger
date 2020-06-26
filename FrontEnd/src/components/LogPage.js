import React from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Icon,
  Checkbox,
  Divider
} from "antd";

import { Redirect, Link } from "react-router-dom";
import background from '../PIC/u1.png'

const FormItem = Form.Item;
class LogPage extends React.Component {
  state={
    redirect:false,
    username: '',
    password: '',
    remind:'',
    rememberPassword: false,
    fromPath:'/',
    redirect:false,
    pathTo:'/AdminPage'
  }

  componentDidMount() {
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err,values)=>{
      if(!err){
        console.log('Received values of form: ', values);
        }
     })
    this.setState({
      redirect:true,

    })
  }

  render(){
    const {getFieldDecorator} = this.props.form;
    const {redirect, pathTo} = this.state
    
    if(redirect == true){
      return(<Redirect to={pathTo}/>)
    }else
    return (
      <div style={{height:1000, width: '100%',
      backgroundImage: `url(${background})`,backgroundSize: 'cover'}}>
          <Row style={{height:100}}></Row>
          <Row style={{height:130}}>
            <h1 style={{textAlign:"center", fontSize:'50px', color:"white"}}>分布式温控系统</h1>
          </Row>
          <Row style={{height:550}}>
            <Col span={9} />
            <Col span={6}>
              <Card title="账户登录" extra={
                  <Link to={{ pathname:this.state.fromPath }}>
                    <Button type="link">返回</Button>
                  </Link>
                } color='black' >
              
               <Form onSubmit={this.handleSubmit} className="login-form">
               <FormItem>
                    {
                      getFieldDecorator('username',{
                        initialValue: this.state.username,
                        rules:[
                          {
                            required:true,
                            message:'用户名不能为空'
                          },
                          {
                            min:4,max:20,
                            message:'长度最小为4,最长为20'
                          },
                          {
                            pattern:new RegExp('^\\w+$','g'),
                            message:'用户名必须为有效数字与字符或下划线'
                          }
                        ]
                      })(
                        <Input 
                          prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)'}}/>} 
                          placeholder='username:2017211'
                        ></Input>
                      )
                    }
                  </FormItem>
                  <FormItem>
                    {
                      getFieldDecorator('password',{
                        initialValue:this.state.password,
                        rules:[
                          {
                            required:true,
                            message:'密码不能为空'
                          },
                        ]
                      })(
                        <Input 
                          prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)'}}/>} 
                          placeholder='password:123456' type='password'
                        ></Input>
                      )
                    }
                  </FormItem>
                  <FormItem>
                    {
                      getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: true,
                    })(
                      <Checkbox>记住我</Checkbox>
                    )}
                    <Row>
                      <Button type='primary' htmlType="submit" style={{ width: '100%' }}>登录</Button>
                    </Row>
                    <a  href='/'>忘记密码</a>         
                  </FormItem>
               </Form>

              </Card>
            </Col>
        </Row>
        <Row>
          <div style={{textAlign:"center", fontSize:'25px'}}>
            关于我们
            <Divider style={{color:"black"}}type="vertical"/>
            联系运营
            <Divider style={{color:"black"}}type="vertical"/>
            帮助文档
            <Divider style={{color:"black"}}type="vertical"/>
            代码地址
            <Divider style={{color:"black"}}type="vertical"/>
            意见反馈
          </div>
        </Row>
      </div>
    );
  }
}

export default Form.create()(LogPage);
