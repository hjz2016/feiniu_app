import React from 'react';
import ReactDOM from 'react-dom';

// 公共样式
import './common/common.scss';

// 首页
import C1 from './index/c1';
// import './index/images/fixedbtns.png';

import C2 from './list/c2';
import C3 from './event/c3';

// 用户页
import C4 from './account/my'

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


ReactDOM.render(<Router >
					<div> 
						<Route exact path="/" component={C1}/>
					    <Route path="/list" component={C2}/>
					    <Route path="/event" component={C3}/>
					    <Route path="/account" component={C4}/>
					 </div>	 
					 
				</Router>, document.getElementById('app'));
