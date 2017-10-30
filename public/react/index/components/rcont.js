import React, { Component } from 'react';

// 店铺推荐内容
class RCont extends Component {
  render() {
    let renderList = (l)=>{
          var res = [];
            for(var i = 0; i < l; i++) {
              res.push(<RItem key={i}/>)
            }
            return res
      }

    return (
      <div className='r_cont'>
        <ul>
          {renderList(4)}
        </ul>
      </div>
    )
  }
}

// R-item
class RItem extends Component {
  render() {
    return (
      <li>
        <div className="r_img">
          <a href="/goods" className='r_img_b'><img src="./static/images/goods/r1.jpg" alt=""/></a>
          <div className='r_img_s'>
            <a href="/goods"><img src="./static/images/goods/r2.jpg" alt=""/></a>
            <a href="/goods"><img src="./static/images/goods/r2.jpg" alt=""/></a>
          </div>
        </div>
        <div className="r_footer">
          <div className="r_f_l"><img src="./static/images/goods/r3.jpg" alt=""/></div>
          <div className="r_f_r">
            <p className="r_f_r_t">嘉食和旗舰店</p>
            <p className="r_f_r_b">猕猴桃第2份半价</p>
          </div>
        </div>
      </li>
    )
  }
}

export default RCont;
