import React, { Component } from 'react';

// 秒杀内容
class MsCont extends Component {
  render() {
  	let renderList = (l)=>{
  		  var res = [];
          for(var i = 0; i < l; i++) {
            res.push(<MsLi key={i}/>)
          }
          return res
  	}

    return (
      <div className='ms_cont'>
         <ul className='swiper-container swiper-container3'>
             <div className="swiper-wrapper">
    			     {renderList(6)}
             </div>
    		 </ul>
      </div>
    )
  }

  componentDidMount(){
    var mySwiper = new Swiper('.swiper-container3', {
        width : 98    
    })
  }
}

// li
class MsLi extends Component {
  render() {
    return (
		<li className="swiper-slide">
			 <a href="/goods">
				<div><img src="./static/images/goods/paper.jpg" /></div>
				<div className='ms_price'>
					<p className='ms_old_price'>￥15.9</p>
					<p className='ms_new_price'>￥29.9</p>
				</div>
			 </a>
		</li>
    )
  }
}

export default MsCont;
