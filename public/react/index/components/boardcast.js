import React, { Component } from 'react';

class BC extends Component {
	  render() {
	    return (
	      <div className='BC'>
	        <div className='b_left'>
	        	<img src='./static/images/menu/bc.jpg'/>
	        </div>
	        <div className='laba'>
	        	<svg className="icon" aria-hidden="true" style={{marginLeft:'.13rem',
    fontSize:'.15rem'}}>
	                <use xlinkHref="#icon-laba"></use>
	            </svg>
	        </div>
	        <div className='b_right swiper-container bc_container'>
	        	<ul className="swiper-wrapper">
					<li className="swiper-slide">浙商卡满50立减49</li>
					<li className="swiper-slide">浙商卡满50立减49</li>
					<li className="swiper-slide">浙商卡满50立减49</li>
					<li className="swiper-slide">浙商卡满50立减49</li>
					<li className="swiper-slide">浙商卡满50立减49</li>
					<li className="swiper-slide">浙商卡满50立减49</li>
	        	</ul>
	        </div>
	      </div>
	    )
	  }

	  componentDidMount(){
	  	var mySwiper3 = new Swiper('.bc_container', {
	  		autoplay: 2000,
	  		direction : 'vertical',
	  		loop:true
		})
	  }
}

export default BC;