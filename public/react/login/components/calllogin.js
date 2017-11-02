

import React from 'react'
import PropTypes from 'prop-types';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class CallLogin extends React.Component {
    constructor(props,context){
        super(props,context)
        this.goBack = this.goBack.bind(this)
    }

    goBack(){
		this.context.router.history.goBack()
	}
    render(){
    	// console.log(this.props,"son2")
        return (
            <div className="my">
               <div className="commonprivate">
					<div className="header">
						<span className="left">
							<i onClick={this.goBack} className="iconfont">&#xe63d;</i>
						</span>
						<h1>手机验证登录</h1>
						<span className="right">
							<Link to='/regi' className="aRegister">立即注册</Link>
						</span>
					</div>
					<div className="tab_type">
						<span className="tab-left" onClick={this.props.changetwo}> 账号密码登录</span>
						<span className="tab-right tab-left-right" >手机验证登录</span>
					</div>
					<div className="name">
						<ul>
							<li>
								<em>手机号：</em>
								<input type="text" placeholder="请输入你的手机号码"/>
								<span className="get_captcha">获取验证码</span>
							</li>
							<li>
								<em>验证码：</em>
								<input type="password" placeholder="请输入验证码"/>
							</li>
						</ul>
						<div className="btn_box">
							<p>登 录</p>
						</div>
						<div className="divFormattwo">
							<span>注册/登录代表您已同意<a href="#">《飞牛网服务协议》</a></span>
						</div>
					</div>
				</div>
                
            </div>
        )
    }
}

CallLogin.contextTypes = {
    router: PropTypes.object.isRequired
};

export default CallLogin