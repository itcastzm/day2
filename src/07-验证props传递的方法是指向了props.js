/*  1. 新建两个组件
2. 父组件中使用子组件
3. 父组件传值（方法）给子组件
4. 子组件拿到方法  调用方法
*/
 import React, { Component } from 'react';
 //父组件
 export default class App extends Component {

  username="咸蛋";

//  3.2 定义一个类方法
  say() {
    // console.log(this);
    console.log(this.username);
    return this;
  }

   render() {
     return (
       <div className="container"> 
         父组件
         {/* 2. 父组件使用子组件
            3. 父组件传值（方法）给子组件 */}
         <Son  onSay={ this.say }  username={this.username} >  </Son>

       </div>
     )
   }
 }

//子组件 类组件
class  Son  extends Component  { 
   
    render() {
      // 4. 子组件拿到方法  调用方法
      console.log(this.props);

      this.props.onSay();

      // 5. 验证方法调用的this 是否等于  this.props
      // console.log(this.props ===  this.props.onSay() );

      return (
        <div> 
          { this.props.msg }
          { this.props.children }
        </div>
      )
    }
 }