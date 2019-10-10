
/**
 *    1.声明state
      2. 使用state
      3. 改变state
 */
import React, { Component } from 'react'

export default class App extends Component {
  // 1.声明state
  state={
    username: '小红'
  }

  handleClick=()=> {

    // 注意setState改变state值是一个异步过程
    // this.setState({
    //   username: this.state.username === '小明' ? '小红' : '小明'
    // })

    // 回调拿到改变之后的值
    this.setState(function(preState, preProps){
      console.log(preState,preProps,  'preState, preProps');
      return {
        username: this.state.username === '小明' ? '小红' : '小明'
      };

    }, function() {
      //callback 回调
      console.log('callback', this.state.username);
    });

    console.log(this.state.username);

  }

  render() {

    console.log('render', this.state.username );


    return (
      <div className="container">
         {/* 3. 改变state */}
         <button className="btn" onClick={this.handleClick}>预报</button>
         {/* 2. 使用state */}
        <h3>{ this.state.username } 说今天会下雨！</h3>
      </div>
    )
  }
}



