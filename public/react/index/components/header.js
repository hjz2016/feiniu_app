import React, { Component } from 'react';
import axios from 'axios';
import util from '../../common/util.js'

class Header extends Component {
	constructor(props){
		super()

		this.state = {
			dafaultvalue:'腕表',
			style:{backgroundColor:'#d7063b'},
			pos:null
		}
	}

	componentWillMount(){
		var that = this

	    // axios.get('/static/data/banner.json')
	    // .then(function(res){
	    //   that.setState({
	    //     pos:res.data
	    //   })
	    // })
	    // .catch(function(err){
	    //   console.log(err);
	    // });
	}
	
  	render() {
	    return (
	      <div className='header' style={this.props.color?this.state.style:{}}>
	         <div className="h_left">
	         	<svg className="icon" aria-hidden="true">
				    <use xlinkHref="#icon-dingwei-copy"></use>
				</svg>
				<a href="/index.city">北京</a>
			 </div>
			 <div className="h_search">
				<form>
					<button>
						<svg className="icon" aria-hidden="true">
					    	<use xlinkHref="#icon-sousuo"></use>
						</svg>	
					</button>
					
					<input type="text" defaultValue={this.props.abc}/>
				</form>
			 </div>
			 <div className="h_right">
			 	<a href="/users.login">登录</a>
			 </div>
	      </div>
	    )
  	}
}

Header.defaultProps = {
	abc:'腕表'
}


export default Header;