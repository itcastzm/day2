 
 import React, { Component } from 'react'
 //父组件
 export default class App extends Component {

  handleClick() {}

   render() {
     return (
       <div className="container"> 
         父组件
         <Son   />
       </div>
     )
   }
 }

//子组件 为函数式组件
function Son(props) { 
    console.log(props);

     return (
       <div> 
         { props.msg }
       </div>
     )
   
 }

/* 组件名.defaultProps = {
  属性名： 默认属性值
}
*/

Son.defaultProps = {
  msg: '狗蛋'
}
 
 