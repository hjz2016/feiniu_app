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
      <div className='c_banner swiper-container cbanner_container'>
        <div className='b_wrap swiper-wrapper'>
           {renderList(3)}
        </div>
        <div className="swiper-pagination cbanner_pagination" ></div>
      </div>
    )
  }

  componentDidMount(){
    var mySwiper3 = new Swiper('.cbanner_container', {
        autoplay: 2000,
        direction : 'horizontal',
        loop:true,
        width:window.innerWidth,
        pagination : '.cbanner_pagination'
    })
  }
}

export default CBanner;
