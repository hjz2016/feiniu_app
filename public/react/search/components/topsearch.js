import React, { Component } from 'react';
import PropTypes from 'prop-types';
import actions from '../../redux/actions'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class TopSearch extends Component {
	constructor(props){
		super()

		this.goBack = this.goBack.bind(this)
	}

	goBack(){
		this.context.router.history.goBack()
	}

	  render() {
	  	console.log(this.props)
	    return (
	      <div className='top_ser'>
	      	 <span className="t_l" onClick={this.goBack}></span>
		     <span className="t_m">
		     	<svg className="icon" aria-hidden="true">
			    	<use xlinkHref="#icon-sousuo"></use>
				</svg>	
		       <input  onInput={this.props.showList} onChange={this.props.actions.chgKeyWordSync} type="text" className='focusIpt' placeholder={this.props.keyword}/>
		     </span>
		     <Link to='/slist' style={{color:'#000'}}>
		     <span className="t_r">
				
				搜索
				
		     </span></Link>
	      </div>
	    )
	  }

	  componentDidMount(){
		$('.focusIpt').focus()
	  }
}

// 跨页面传值必备 this.context.router
TopSearch.contextTypes = {
    router: PropTypes.object.isRequired
};

let mapDispatchToProps = (dispatch)=>{
  return {
    actions:bindActionCreators(actions,dispatch)
  
  }
}

let Cont = connect(state=>state,mapDispatchToProps)(TopSearch)

export default Cont