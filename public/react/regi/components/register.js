

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
        return (
             <div className="register">
               <div className="commonprivate">
					<div className="header">
						<span className="left">
							<i onClick={this.goBack} className="iconfont">&#xe63d;</i>
						</span>
						<h1>注册</h1>
						
					</div>
					
					<div className="name">
						<ul>
							<li>
								<em>账户名：</em>
								<input type="text" placeholder="请输入你的账户名"/>
							</li>
							<li>
								<em>验证码：</em>
								<input type="password" placeholder="请输入验证码"/>
							</li>
						</ul>
						<div className="btn_box">
							<p>注册</p>
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