import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class Bottom extends Component {
  render() {
    return (
      <div className='bottom'>
      	 <ul>
			<li className='b_item'>
				<Link to="/">
					<img src='./static/images/bottom/index.jpg'/>
					<p>首页</p>
				</Link>
			</li>
			<li className='b_item'>
				<Link to='/list'>
					<img src='./static/images/bottom/type.jpg'/>
					<p>商品分类</p>
				</Link>
			</li>
			<li className='b_item'>
				<Link to='/event'>
					<img src='./static/images/bottom/fest.jpg'/>
				</Link>
			</li>
			<li className='b_item'>
				<Link to='/cart'>
					<img src='./static/images/bottom/cart.jpg'/>
					<p>购物车</p>
				</Link>
			</li>
			<li className='b_item'>
				<Link to='/account'>
					<img src='./static/images/bottom/user.jpg'/>
					<p>我的飞牛</p>
				</Link>
			</li>
      	 </ul>
         
      </div>
    )
  }
}

export default Bottom;