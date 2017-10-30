import React, { Component } from 'react';

class TopSearch extends Component {
  render() {
    return (
      <div className='top_ser'>
      	 <span className="t_l"></span>
	     <span className="t_m">
	     	<svg className="icon" aria-hidden="true">
		    	<use xlinkHref="#icon-sousuo"></use>
			</svg>	
	       <input type="text" placeholder="牛奶"/>
	     </span>
	     <span className="t_r">
			<svg className="icon" aria-hidden="true">
		    	<use xlinkHref="#icon-list-ul"></use>
			</svg>	
	     </span>
      </div>
    )
  }
}

export default TopSearch