/**
 *  1. 新建一个类组件
    2. 实现类组件的jsx  画界面
    3. 新建一个state  存储代办事项
    4. 实现按钮点击事件
 */
// 1. 新建一个类组件
import React, { Component } from 'react'

export default class Todos extends Component {
    // 3. 新建一个state  存储代办事项
    state={
        // 存储我们待办事项
       list: ['上课', '下课', '睡觉'] ,
       inpValue: '' 
    }

    handleChange=(e)=> {
        // 把值更新到state当中
        this.setState({
            inpValue: e.target.value
        })
    }

    handleClick=()=> {
        let { list, inpValue } = this.state;

        if (inpValue) {
            list.push(inpValue);
            this.setState({
                list,
                inpValue: ''
            });
        }

    }
    handeDel(index, e){
        // console.log(index, e);

        let { list } = this.state;
        // list.splice('索引', "删除几个值")
        list.splice(index, 1);
        this.setState({
            list
        });

    }

    render() {

        console.log(this.state.list)
        return (
            <div className="container" >
                 {/* 2. 实现类组件的jsx  画界面 */}
                    {/* 拿到input的值 */}
                 <input  value={this.state.inpValue } type="text"  onChange={this.handleChange} />
                 {/* 4. 实现按钮点击事件 */}
                 <button onClick={this.handleClick }>Todo</button>
                { this.state.list.map((v, i)=> <h3 onClick={this.handeDel.bind(this, i)} key={i}>{v}</h3>) }                
            </div>
        )
    }
}

