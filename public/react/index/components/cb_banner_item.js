import React, { Component } from 'react';

class CB_Banner_Item extends Component {
	constructor(props){
		super()
		
		// console.log(props)
	}
	  render() {
	  	let num = this.props.num + 1
	  	let imgurl = './static/images/goods/c-b'+ num+".jpg"
	    return (
	         <div className='swiper-slide'>
	          	<a href="/goods"><img src={imgurl} alt=""/></a>
	         </div>
	    )
	  }

}


export default CB_Banner_Item;