/**
    1. 新建五个组件  前面两个 函数式组件   后面三个类组件
    2. 新建一个数组  存储五个组件
    3. 新建一个根组件（类组件）
    4. 类组件的jsx实现   画界面
    5. 新建一个state存储 当前抽中 组件
    6. 实现按钮点击事件  
 */
// 1. 新建五个组件  前面两个 函数式组件   后面三个类组件
 import  React from 'react';
// 组件名首字母大写
 function Audio (){
    return(
        <span>奥迪</span>
    )
 }
 function Auto (){
    return(
        <span>奥拓</span>
    )
 }
// 类组件的写法
 class Mashladi extends  React.Component {
    render() {
        return(
            <span>玛莎拉蒂</span>
        )
    }
 }
 class Benz extends  React.Component {
    render() {
        return(
            <span>奔驰</span>
        )
    }
 }
 class Baoma extends  React.Component {
    render() {
        return(
            <span>宝马</span>
        )
    }
 }

//  2. 新建一个数组  存储五个组件
const list = [ Audio, Auto, Mashladi, Benz, Baoma];
// 3. 新建一个根组件（类组件）
export default class Cars extends React.Component {

    // 5. 新建一个state存储 当前抽中 组件
    state={
        target: null
    }

    handleClick=()=> {
        // 实现抽中组件逻辑  
        // Math.random() 返回随机的零到1的随机数
        // Math.floor 向下取整  floor是地板的意思
        // % 取余数操作符
        let target = list[Math.floor(Math.random()* 10) % 5];

        // 更新target值到state
        this.setState({
            // target: target
            target
        });
    }

    render() {
        //通过解构的方式拿到state中抽中的组件
        let { target } = this.state;

        let Comp = target;

     

        return(<div className="container">
            {/* // 4. 类组件的jsx实现   画界面 */}
            { list.map((V, i)=> <V  key={i} />  )} 
            <div>
            {/* 6. 实现按钮点击事件   */}
                <button onClick={this.handleClick}  className="btn">抽奖</button>
            </div>
            抽中：{ Comp ? <Comp  /> : null }
            </div>
        )
    }
}