

import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//import CallLogin from './calllogin'
class CommonLogin extends React.Component {
    constructor(props,context){
        super(props,context)
        this.goBack = this.goBack.bind(this)
    }

    goBack(){
		this.context.router.history.goBack()
	}
    render(){
    	console.log(this.props,"son1")
        return (
            <div className="my">
               <div className="commonprivate">
					<div className="header">
						<span className="left">
							<i onClick={this.goBack} className="iconfont">&#xe63d;</i>
						</span>
						<h1>飞牛账号密码登录</h1>
						<span className="right">
							<Link to='/regi' className="aRegister">立即注册</Link>
						</span>
					</div>
					<div className="tab_type">
						<span className="tab-left tab-left-right"> 账号密码登录</span>
						<span className="tab-right" onClick={this.props.changeone}>手机验证登录</span>
					</div>
					<div className="name">
						<ul>
							<li>
								<em>账号：</em>
								<input type="text" placeholder="请输入用户名/邮箱/手机号"/>					    
							</li>
							<li>
								<em>密码：</em>
								<input type="password" placeholder="请输入密码"/>
							</li>
						</ul>
						<div className="btn_box">
							<p>登 录</p>
						</div>
						<div className="divFormat">
							<a className="right" href="">忘记密码</a>
						</div>
					</div>
				</div>
                
            </div>
        )
    }
}

CommonLogin.contextTypes = {
    router: PropTypes.object.isRequired
};

export default CommonLogin