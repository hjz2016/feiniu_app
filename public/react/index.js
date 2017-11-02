import React from 'react';
import ReactDOM from 'react-dom';

// 公共样式
import './common/common.scss';

// 首页
import C1 from './index/c1';

import C2 from './list/c2';
import C3 from './event/c3';

// 用户页
import C4 from './account/my'

// 搜索页
import Search from './search/search'

// 小类列表
import Slist from './slist/index'

// 登录页
import Login from './login/login'

// 注册页
import Regi from './regi/register'

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './redux/store'




ReactDOM.render(<Provider store={store}><Router >
					<div> 
						<Route exact path="/" component={C1}/>
					    <Route path="/list" component={C2}/>
					    
					    <Route path="/search/:keyWords"  component={Search}/>
					    
					    <Route path="/event" component={C3}/>
					    <Route path="/account" component={C4}/>
					    <Route path="/login" component={Login}/>
					    <Route path="/regi" component={Regi}/>
					    <Route path="/slist" component={Slist}/>
					 </div>	 
					 
				</Router></Provider>, document.getElementById('app'));

