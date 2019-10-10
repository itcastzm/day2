/*
1. 新建一个类组件
2. 需要M 就是state 
3. jsx中 展示 state
4. 实现 V => M  
*/


import React, { Component } from 'react'
// 1. 新建一个类组件
export default class App extends Component {
  // 2. 需要M 就是state 
  state={
    inpValue: '醉',
    isChecked: true,
  }

  handleChange=(e)=> {
    // 4.1 V => M
    this.setState({
      inpValue: e.target.value
    });
  }

  handleCheck=(e)=> {
    this.setState({
      isChecked: e.target.checked
    })
  }

  render() {
    return (
      <div  className="container">
        {/* 3. jsx中 展示 state */}
        {/* 4. 实现 V => M  */}
        <input  type="text" onChange={this.handleChange} value={this.state.inpValue}  />

        <input  type="checkbox" onChange={this.handleCheck} checked={this.state.isChecked}  />
        <input  type="radio" onChange={this.handleCheck} checked={this.state.isChecked}  />

        {/* <input  type="select" onChange={this.handleChange} value={this.state.inpValue}  /> */}
      </div>
    )
  }
}
