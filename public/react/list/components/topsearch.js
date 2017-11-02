import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import actions from '../../redux/actions'
import store from '../../redux/store'

class TopSearch extends Component {
	constructor(props){
		super()

		this.goBack = this.goBack.bind(this)

		this.state = {
			dafaultvalue:store.getState().keyword
		}
	}

	goBack(){
		this.context.router.history.goBack()
	}

  render() {
  	
    return (
      <div className='top_ser'>
      	 <span className="t_l" onClick={this.goBack}></span>
	     <span className="t_m">
	     	<svg className="icon" aria-hidden="true">
		    	<use xlinkHref="#icon-sousuo"></use>
			</svg>	
			<Link to={'/search/'+this.state.dafaultvalue}>
				<input type="text" defaultValue={this.state.dafaultvalue}/>
			</Link>
	     </span>
	     <span className="t_r">
			<svg className="icon" aria-hidden="true">
		    	<use xlinkHref="#icon-list-ul"></use>
			</svg>	
	     </span>
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


TopSearch.contextTypes = {
    router: PropTypes.object.isRequired
};

export default TopSearch