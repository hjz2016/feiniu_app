import React from "react";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class MyHeader extends React.Component{
	constructor(props,context){
        super(props,context)
    }
	render(){
        return (
            <div className="myHeader">
	            <div className="header">
	               <i className="iconfont header-icon">&#xe637;</i>
	               <Link to='/'>
					<i className="iconfont header-icon">&#xe602;</i>
				   </Link>
	            </div>
	            <div className="content">
	            	<div className="img">
		            	<img src="./static/images/my/feiniu.jpg"/>
		            </div>	
		            <div className="person_i">
		                <p className="bigbox">
	                        <span className="J_login" ><Link to='/login'>登录</Link></span>
	                        <span className="J_register"><Link to='/regi'>注册</Link></span>
		                </p>
		              
		            </div>
        		</div>
        		<ul className="header-bottom">
        			<li className="J_checkLogin" ><span className="J_itemCount">0</span>商品收藏</li>
		            <li className="J_checkLogin" ><span className="J_mallCount">0</span>店铺收藏</li>
		            <li className="J_checkLogin" ><span><i className="iconfont">&#xe605;</i></span>我的足迹</li>
		            <li className="J_checkLogin" ><span><i className="iconfont">&#xe603;</i></span>签到领积分</li>
        		</ul>
            </div>
           
        )
    }
}
export default MyHeader
