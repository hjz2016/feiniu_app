import React from "react";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import actions from '../../redux/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MyHeader extends React.Component{
	constructor(props,context){
        super(props,context)
        console.log(context)
    }

    deleteStorage(){
    	var that = this
    	
    	localStorage.removeItem('user')
    	location.reload()
    }

	render(){
		var imgurl = localStorage['user']?JSON.parse(localStorage['user']).userimg_url:null;
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
		            	<img src={imgurl?
		            		imgurl
		            		:
		            		'./static/images/my/feiniu.jpg'}/>
		            </div>	
		            <div className="person_i">
		                <p className="bigbox">
							{localStorage['user']?
							<span>
								<span>{JSON.parse(localStorage['user']).nickname}</span>
								<span className="J_login" ><Link to='/account' onClick={this.deleteStorage}>退出</Link></span>
							</span>
							:
								<span><span className="J_login" ><Link to='/login'>登录</Link></span>
		                        <span className="J_register"><Link to='/regi'>注册</Link></span></span>
								
							}
	                        
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

MyHeader.contextTypes = {
    router: PropTypes.object.isRequired
};

let mapDispatchToProps = function(dispatch){
	return{
		actions:bindActionCreators(actions,dispatch)
	}	
}

let Cont = connect(state=>state,mapDispatchToProps)(MyHeader);



export default Cont
