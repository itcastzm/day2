/*  1. 新建两个组件
2. 父组件中使用子组件
3. 父组件传值（方法）给子组件
4. 子组件拿到方法  调用方法
*/
 import React, { Component } from 'react';
 //父组件
 export default class App extends Component {
   
   state={
     username: '小红'
   }

  //  方法三  构造函数使用  bind 绑定this
  constructor() {
    // 注意写super
    super();

    // bind绑定this
    this.say = this.say.bind(this);
  }

//  3.2 定义一个类方法
  say() {
    // console.log(this);
    this.setState({
      username: '小明'
    });

  }

   render() {
     return (
       <div className="container"> 
         父组件
         {/* 2. 父组件使用子组件
            3. 父组件传值（方法）给子组件 */}
         <Son  onSay={  this.say }  username={this.username} >  </Son>
         { this.state.username }

       </div>
     )
   }
 }

//子组件 类组件
class  Son  extends Component  { 


    handleClick=()=> {
      // 4.1 调用传递过来的方法
      this.props.onSay();
    }   
    render() {
      // 4. 子组件拿到方法  调用方法
      console.log(this.props);

      // this.props.onSay();

      // 5. 验证方法调用的this 是否等于  this.props
      // console.log(this.props ===  this.props.onSay() );

      return (
        <div> 
          <button onClick={this.handleClick} className="btn">点我</button>
        </div>
      )
    }
 }