import React, { Component } from 'react';
import axios from 'axios';
import util from '../../common/util'

class RightCont extends Component {
	constructor(props){
		super()

		this.state = {
			goods:null
		}
	}

	componentWillMount(){
		var that = this;
		axios.get('/static/data/list.json')
	    .then(function(res){
	      that.setState({
	        goods:res.data
	      })
	    })
	    .catch(function(err){
	      console.log(err);
	    });
	}

  render() {
    return (
      <div className='right_cont'>
       	 <div className='rightcont_scroller'>
	       	 {this.state.goods?util.forRender(Tab,1,this.state.goods[this.props.type]):''}
       	 </div>
      </div>
    )
  }
}


class Tab extends Component{

	constructor(props){
		super(props)

		// this.state = {
		// 	info:props
		// }
	}

	componentWillReceiveProps(props){
		// this.setState({
		// 	info:props
		// })
	}

	render(){
		return(
			<div className='rc_tab'>
				<div className="tab_img">
				      <a href="">
				        <img src={this.props.info?this.props.info.src:''} alt=""/>
				      </a>
			    </div>
			    <TypeDiv list={this.props.info?this.props.info.list[0]:''}/>
       	 	</div>
		)
	}
}

class TypeDiv extends Component{
	constructor(props){
		super(props)

		// this.state = {
		// 	good:props.list
		// }
	}

	componentWillReceiveProps(props){
		// this.setState({
		// 	good:props
		// })
		// console.log(this.props)
	}

	render(){
		return(
			<div className='tab_type'>
				<h3 className="title">
			      <a href="">
			        {this.props.list?this.props.list.name:''}
			        <svg className="icon" aria-hidden="true">
					    <use xlinkHref="#icon-jiantou-copy-copy"></use>
					</svg>
			      </a>
			    </h3>
			    <ul>
			      <li>
			        <a href="">
			          <img src={this.props.list?this.props.list.goods[0].src:''} alt=""/>
			          <p>{this.props.list?this.props.list.goods[0].name:''}</p>
			        </a>
			      </li>
			    </ul>
       	 	</div>
		)
	}
}

export default RightCont