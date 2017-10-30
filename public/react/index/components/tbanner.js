import React, { Component } from 'react';
import Item from './cb_banner_item'

// 频道轮播
class CBanner extends Component {
  render() {
    let renderList = (l)=>{
          var res = [];
            for(var i = 0; i < l; i++) {
              res.push(<Item key={i} num={i}/>)
            }
            return res
    }
    return (
      <div className='c_banner swiper-container tbanner_container'>
        <div className='b_wrap swiper-wrapper'>
            {renderList(2)}
        </div>
        <div className="swiper-pagination tbanner_pagination" ></div>
      </div>
    )
  }

  componentDidMount(){
    var mySwiper5 = new Swiper('.tbanner_container', {
        autoplay: 2000,
        direction : 'horizontal',
        loop:true,
        width:window.innerWidth,
        pagination : '.tbanner_pagination'
    })
  }
}

export default CBanner;
