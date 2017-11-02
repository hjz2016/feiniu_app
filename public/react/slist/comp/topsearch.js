import React, { Component } from 'react';
import PropTypes from 'prop-types';
import actions from '../../redux/actions'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {connect} from 'react-redux'

class TopSearch extends Component {
	constructor(props){
		super()

		this.goBack = this.goBack.bind(this)
	}

	goBack(){
			this.context.router.history.goBack()
	}

	  render() {
	  	// console.log(this.props)
	    return (
	      <div className='top_ser'>
	      	 <span className="t_l" onClick={this.goBack}></span>
		     <span className="t_m">
		     	<svg className="icon" aria-hidden="true">
			    	<use xlinkHref="#icon-sousuo"></use>
				</svg>	
				<Link to={'/search/'+this.props.newO}>
		       		<input type="text" className='focusIpt' placeholder={this.props.newO}/>
		       	</Link>
		     </span>
		     <span className="t_r">
				筛选
				<svg onClick={this.props.chgH} style={{marginLeft: '.1rem'}} className="icon" aria-hidden="true">
			    	<use xlinkHref="#icon-list-ul"></use>
				</svg>	
		     </span>
	      </div>
	    )
	  }

	 //  componentDidMount(){
		// $('.focusIpt').focus()
	 //  }
}

TopSearch.contextTypes = {
    router: PropTypes.object.isRequired
};

let mapStateToProps = (state)=>{
  return {
     newO:state.keyword
  }
}


let Cont = connect(mapStateToProps)(TopSearch)

export default Cont