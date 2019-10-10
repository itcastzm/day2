 /*
1. 新建两个组件
2. 父组件使用子组件
3. 子组件双标签中间的元素  输出
*/


 import React, { Component } from 'react';
 //父组件
 export default class App extends Component {

  handleClick() {}

   render() {
     return (
       <div className="container"> 
         父组件
         {/* 2. 父组件使用子组件
            3. 子组件双标签中间的元素  输出 */}
         <Son  msg="回家相亲！"  >

           

            <img  
                src="http://e.hiphotos.baidu.com/image/pic/item/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg"
                style={{
                width: 200,
                height:100
              }}/>
         </Son>

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
         { props.children }
       </div>
     )
   
 }