 
 import React, { Component } from 'react';
 import  PropTypes from 'prop-types';
 //父组件
 export default class App extends Component {

  handleClick() {}

   render() {
     return (
       <div className="container"> 
         父组件
         <Son  
            // list={[1, 2, 3, 4]}
            list={123}
         
         />
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

//  组件名.propTypes = {
//   属性名:  PropTypes.string
//  }


Son.propTypes = {
  list: PropTypes.array
}



/* 组件名.defaultProps = {
  属性名： 默认属性值
}
*/

Son.defaultProps = {
  msg: '狗蛋'
}
 
 