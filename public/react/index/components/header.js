import React, { Component } from 'react';
import axios from 'axios';
import util from '../../common/util.js'
import actions from '../../redux/actions'
import store from '../../redux/store';
// import geolocation from '../../common/geolocation'

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


class Header extends Component {
	constructor(props){
		super()

		this.state = {
			dafaultvalue:store.getState().keyword,
			style:{backgroundColor:'#d7063b'},
			pos:false
		}
	}

	componentWillMount(){

		var that = this;

		if(localStorage['pos']){
			that.setState({
				pos:true
			})
		}else{
			setTimeout(()=>{
				that.setState({
					pos:true
				})
				localStorage['pos']='北京市';
				location.reload()
			},5000)
		}
	}

	getVal(e){
		var val = e.target.value

	}
	
  	render() {
	    return (
	      <div className='header' style={this.props.color?this.state.style:{}}>
	         <div className="h_left" style={{width:'.7rem',textAlign:'center'}}>
	         	<svg className="icon" aria-hidden="true">
				    <use xlinkHref="#icon-dingwei-copy"></use>
				</svg>
				<a href="/">{this.state.pos?'北京市':'定位中'}</a>
			 </div>
			 <div className="h_search">
				<form>
					<button>
						<svg className="icon" aria-hidden="true">
					    	<use xlinkHref="#icon-sousuo"></use>
						</svg>	
					</button>
					<Link to={'/search/'+(this.state.dafaultvalue?this.state.dafaultvalue:'nokey')}>
						<input onClick={this.getVal.bind(this)} type="text" defaultValue={this.state.dafaultvalue}/>
					</Link>
					
				</form>
			 </div>
			 <div className="h_right">
			 	{
			 		localStorage['user']?<Link to="/account"> {JSON.parse(localStorage['user']).nickname}</Link>:
					<Link to="/login">登录</Link>
			 	}
			 	
			 </div>
	      </div>
	    )
  	}

  	componentDidMount(){
  		var that = this
		
  		this.unsubscribe = store.subscribe(function(){
			that.setState({
				dafaultvalue:store.getState().keyword
			})
		})
  	}

  	componentWillUnmount(){
  		this.unsubscribe()
  	}
}




export default Header;