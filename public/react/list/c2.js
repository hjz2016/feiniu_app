import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './main.scss';

// 顶部搜索
import TopSearch from './components/topsearch.js'

// 左侧列表
import LeftList from './components/leftlist.js'

// 右侧内容
import RightCont from './components/rightcont.js'


class C2 extends Component {
	constructor(props){
		super(props)

		
		this.state = {
			type:0
		}
	}

	chgType(type){
		this.setState({
			type:type
		})
	}

  render() {
    return (
      <div id='list-wrapper'>
      	<TopSearch/>
      	<div className='l_cont'>
			<LeftList chgType={this.chgType.bind(this)}/>
			<RightCont type={this.state.type}/>
      	</div>
      </div>
    )
  }
}

export default C2
