import React, { Component } from 'react';
import { List } from 'antd-mobile';
import axios from 'axios';
import actions from '../../redux/actions'
// import util from '../../common/util';

const Item = List.Item;
const Brief = Item.Brief;


class HideList extends Component{
	constructor(props){
		super(props)

    	this.chgVal = this.chgVal.bind(this)
	    this.state = {
	        disabled: false
	    }
	}

	chgVal(e){
		var val = e.target.innerHTML;
		console.log(1)
		$('.focusIpt').val(val)
		actions.chgKeyWord(val)
	}

	render() {
		var that = this;
		function forRender(data){
			  var res = [];
		      for(var i = 0; i < data.keywordList.length; i++) {
		      	var val = data.keywordList[i].name
		        res.push(<Item key={i} className='item'>{val}</Item>)
		      }
		      return res
		}
	  	
	    return (
	      <div className='hide_list'>
	      	 <List className="my-list">
	      	 	{this.props.data?forRender(this.props.data):''}
		        
		      </List>
	      </div>
	    )
	  }

	componentDidUpdate(){
		var that = this
		$('.item').click(function(e) {
			
			that.chgVal(e)
			that.props.hideList()
		});
	}
}

// keywordList
// catogyList

export default HideList