import React, { Component } from 'react';
import store from '../../flux/store.js';
import actions from '../../flux/actions.js';
import util from '../../common/util.js';


class LeftList extends Component {
	constructor(props){
		super(props)

		this.dir = ["热门分类", "生鲜冷藏", "食品酒饮", 
		"进口好货", "个护美妆", "家清厨卫", "家纺家装", 
		"母婴玩具", "手机数码", "家电汽配", "女装配饰", 
		"男装运动", "鞋靴箱包", "图书文具", "保健计生", 
		"礼品卡券"];

		this.state = {
			num:store.num
		}
	}

	  chg_Num(e){
	  	var val = e.target.value
	  	actions.chgNum('chgNum',val)
	  }

	  render() {
	    return (
		    <div className='leftlist_scroller'>
		      <div className='left_list  leftlist_container'>
		      	<ul >
		       		{util.forRender(Item,this.dir.length,[this.dir,this.props.chgType])}
		       	</ul>
		       	
		      </div>
		    </div>
	    )
	  }

	componentDidMount(){
		var that = this;
		store.notifyV(function(newVal){
			that.setState({
				num:newVal
			})
		})
		
		
	}
}

class Item extends Component{
	constructor(props){
		super()
		this.clickHandler = this.clickHandler.bind(this)

	}

	clickHandler(e){
		$(e.target).addClass('current')
		.siblings('li').removeClass('current')

		this.props.info[1](this.props.num)
	}

	render() {
		if(this.props.num == 0){
			var cls = 'current'
		}else{
			var cls = ''
		}
		
		this.marker = 'item:'+this.props.num

	    return (
	      <li className={cls+' '+this.marker} ref={this.marker} onClick={this.clickHandler}>
			{this.props.info[0][this.props.num]}
	      </li>
	    )
	}

	componentDidMount(){
		
	}
}

export default LeftList