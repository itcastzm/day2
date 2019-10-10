import React, { Component } from 'react'

export default class Login extends Component {
    state={
        username: '',
        password: ''
    }

    handleUserName=(e)=> {
        this.setState({
            username: e.target.value
        })
    }

    handlePw=(e)=> {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit=()=> {
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <div>
                     <label htmlFor="username">姓名：</label>
                     <input id="username" autoComplete="off"   type="text"     value={this.state.username}   onChange={this.handleUserName}   />
                </div>
                <div>
                    <label htmlFor="password">密码：</label>
                    <input id="password"  autoComplete="off" type="password"  value={this.state.password}  onChange={this.handlePw}    />
                </div>
               <div> 
                   <button  onClick={this.handleSubmit}>登录</button>
               </div>
            </div>
        )
    }
}
