import React, { Component } from 'react';
import { Button, Row, Col} from 'antd';
import { Link, Redirect } from 'react-router-dom';

class AccountBar extends Component {
    state={
        fromPath:this.props.path,
        redirect: false
    }

    handleRoute = () =>{
        this.setState({
            redirect:true
        })
    }

    render(){
        const fromPath = this.state.fromPath;
        return (
            <div>
                <Row style={{height:50}}>
                    <Col span={3}/>
                    <Col span={5}>
                    <Link to={fromPath}>
                        <Button icon="home" type="link" onClick={()=>this.handleRoute()}></Button>
                    </Link>
                    </Col>
                </Row>
            </div> 
        );
    }
}

export default AccountBar;