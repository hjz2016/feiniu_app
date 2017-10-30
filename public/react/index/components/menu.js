import React, { Component } from 'react';
// var imgUrl = require('../images/bg.jpg')
    
class Menu extends Component {
	  render() {
	  	let renderList = (l)=>{
	  		  var res = [];
	          for(var i = 0; i < l; i++) {
	            res.push(<MItem key={i}/>)
	          }
	          return res
	  	}

	    return (
	      <div className='menu swiper-container menu_container'>
	        	<ul className='swiper-wrapper tab'>
					<div className="swiper-slide">{renderList(10)}</div>
					<div className="swiper-slide">{renderList(10)}</div>
	        	</ul>
	        	<div className="swiper-pagination " id='menu_pagination'></div>
	      </div>
	    )
	  }

	  componentDidMount(){
	  	var mySwiper4 = new Swiper('.menu_container', {
	  		pagination:'#menu_pagination',
	  		
	  		initialSlide:0
		})
	  }
}

class MItem extends Component {
  render() {
    return (
	    <li className='m_item'>
	      <span>
			<img src='./static/images/menu/1.jpg'/>
			<p>急速达</p>
		  </span>
		</li>
    )
  }
}

export default Menu;