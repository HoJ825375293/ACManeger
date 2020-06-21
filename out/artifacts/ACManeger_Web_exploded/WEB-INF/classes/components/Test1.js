import React, {  Component }  from 'react';


class Test1 extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"111"
        }
    }

    handleCN = (e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleSumit = (e)=>{
        e.preventDefault()
        alert(this.state.name)
    }
    

    render(){
        return(
            <div>
                <form onSubmit={this.handleSumit}>
                    Name:<input type="text" value={this.state.name} onChange={this.handleCN}></input>
                    <br/>
                    Yes:<input type="submit" defaultValue="Submit"/>
                </form>
            </div>
        )
    }
}

export default Test1

import React, {  Component }  from 'react';


class HomePage1 extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'Jack',
            userInfo:{
                userName:"Poter"
            },
            lis1 :[<h2 key="1">111</h2>, <h2 key = "2">222</h2>],
            list1 : [111,222,333],
            msg:"test!!!!"
        }

        this.transpor1 = this.transpor1.bind(this);
    }

    run(){
        alert("timing out!")
    }
    transpor(){
        alert(this.state.msg)
    }
    transpor1(){
        alert(this.state.msg)
    }
    transpor2 = ()=>{
        alert(this.state.msg)
    }
    setP = ()=>{
        this.setState({
            msg:"hhhhhhhh"
        })
    }
    transFun = (str)=>{
        this.setState({
            msg:str
        })
    }

    

    render(){
        let list2 = this.state.list1.map(function(value,key){
            return <li key = {key}>{value}</li>
        })
        return(
            <div>
                lallalalal
                {this.state.name}
                <p>{this.state.userInfo.userName}</p>

                <hr/>
                <img src="http://img1.imgtn.bdimg.com/it/u=2032939834,1499775801&fm=15&gp=0.jpg" alt=""/>
                {this.state.lis1}
                {list2}

                <hr/>
                <button onClick = {this.run}>Normal</button>
                <button onClick = {this.transpor.bind(this)}>TransInfo</button>
                <button onClick = {this.transpor1}>TransInfo1</button>
                <button onClick = {this.transpor2}>TransInfo2</button>
                <button onClick = {this.transFun.bind(this, "lalall")}>tranFun</button>

                <hr/>
                

                <hr/>
            </div>
        )
    }
}

export default HomePage1

import React, { Component } from "react";
import "../assets/css/index.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "111",
          checked: true
        },
        {
          title: "111",
          checked: false
        }
      ]
    };
  }

  ADD = e => {
    var temp = this.state.list;
    temp.push(this.refs.title.value);
    this.setState({
      list: temp
    });

    localStorage.setItem('todoList',JSON.stringify(temp))
  };

  DELETE = ind => {
    console.log(ind);
    var temp = this.state.list;

    temp.splice(ind, 1);
    this.setState({
      list: temp
    });
  };

  render() {
    return (
      <div>
        <h1>To-Do-List</h1>
        <input ref="title" />
        <button onClick={this.ADD}>ADD</button>
        <hr />
        <ul className="list1">
          <h2>TODO</h2>
          <hr />
          {this.state.list.map(function(value, key) {
            if (value.checked) {
              return (
                <li>
                  <input type="checkbox" checked={value.checked}></input>
                  {value.title}
                </li>
              );
            }
          })}
          <h2>DOWN</h2>
          <hr />
          {this.state.list.map(function(value, key) {
            if (!value.checked) {
              return (
                <li>
                  <input type="checkbox" checked={value.checked}></input>
                  {value.title}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;

