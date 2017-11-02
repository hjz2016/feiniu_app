import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class Bottom extends Component {
	constructor(props){
		super()
	}

  render() {
    return (
      <div className='bottom' style={this.props.chgS?this.props.chgS:''}>
      	 <ul>
			<li className='b_item'>
				<Link to="/">
					<em></em>
					<p>首页</p>
				</Link>
			</li>
			<li className='b_item'>
				<Link to='/list'>
					<em></em>
					<p className='active'>商品分类</p>
				</Link>
			</li>
			
			<li className='b_item'>
				<Link to='/cart'>
					<em></em>
					<p>购物车</p>
				</Link>
			</li>
			<li className='b_item'>
				<Link to='/account'>
					<em></em>
					<p>我的飞牛</p>
				</Link>
			</li>
      	 </ul>
         
      </div>
    )
  }
}

export default Bottom;