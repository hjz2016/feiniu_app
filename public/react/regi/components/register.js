

import React from 'react'
import PropTypes from 'prop-types';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import actions from '../../redux/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';

class Register extends React.Component {
    constructor(props,context){
        super(props,context)
        this.goBack = this.goBack.bind(this)
    }

    goBack(){
		this.context.router.history.goBack()
	}

	ajaxRegiUser(){
		var that = this;
		var usn = $('.usn').val()
		var pwd = $('.pwd').val()
		// console.dir(jsonp)
		// jsonp注册用户信息
		axios.get('http://datainfo.duapp.com/shopdata/userinfo.php',{
				params:{
					status:"register",
					userID:usn,
					password:pwd
				}
		})
		.then((res)=>{
			console.log(res)
			switch(res.data){
				case 0:
					alert('用户名重名');break;
				case 2:
					alert('数据库报错');break;
				default:
					alert('注册成功');
					that.context.router.history.push('/login')
			}
		})
		.then((err)=>{
			console.log(err)
		})
			
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
								<input className='usn' type="text" placeholder="请输入你的账户名"/>
							</li>
							<li>
								<em>验证码：</em>
								<input className='pwd' type="password" placeholder="请输入验证码"/>
							</li>
						</ul>
						<div className="btn_box">
							<p onClick={this.ajaxRegiUser.bind(this)}>注册</p>
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

Register.contextTypes = {
    router: PropTypes.object.isRequired
};

let mapDispatchToProps = function(dispatch){
	return{
		actions:bindActionCreators(actions,dispatch)
	}	
}

let Cont = connect(state=>state,mapDispatchToProps)(Register);



export default Cont