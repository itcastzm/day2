/**
 * 1. 新建两个组件
  2. 父组件使用子组件
  3. 父组件通过props传值给子组件
  4. 子组件拿到父组件传来值
 */


 
// * 1. 新建两个组件
 import React, { Component } from 'react'
 //父组件
 export default class App extends Component {

  state={
    name: 'helloworld'
  }

  handleClick() {

  }

   render() {
     return (
       <div className="container">
         {/* 2. 父组件使用子组件 */}
         {/* 3. 父组件通过props传值给子组件 */}
         父组件
         <Son msg={'回家相亲！'}
              num={ 123456 }
              obj={{
                name: '富婆',
                no2: '萝莉',
                no3: '御姐'
              }}
              list={['屌丝', '咸蛋', '咸鱼']}

              func={function() {
                console.log('我是最帅的函数！');
              }}

              f={this.handleClick}
         
         
         />
       </div>
     )
   }
 }

//子组件 为函数式组件
function Son(props) {

    // console.log(this.props);
    console.log(props);
    
     return (
       <div>
         {/* 4. 子组件拿到父组件传来值 */}
         { props.msg }
       </div>
     )
   
 }
 
 