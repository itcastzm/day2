/*
1. 写一个类组件
2. 构造函数里面 新建一个引用  `ref`
3. 绑定ref和表单
4. 通过ref拿到表单的值
*/

import React, { Component } from 'react'
// 1. 新建一个类组件
export default class App extends Component {
  
  constructor() {
    super();
  // 2. 构造函数里面 新建一个引用  `ref`
    this.inpRef = React.createRef();  //工厂模式
  }

  handleClick=()=>{
    // 4.1 通过ref拿到表单的值
    console.log(this.inpRef.current.value  )
  }

  render() {
    return (
      <div  className="container">
      {/* 4. 通过ref拿到表单的值 */}
      <button onClick={this.handleClick} className="btn">拿值</button>
      {/* 3. 绑定ref和表单 */}
      <div>
        <input  type="text"   ref={this.inpRef} />
      </div>
      </div>
    )
  }
}
