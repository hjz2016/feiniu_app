import React, { Component } from 'react';

// 主题馆内容
class TCont extends Component {
  render() {
    let renderList = (l,type)=>{
          var res = [];
            for(var i = 0; i < l; i++) {
              if(type){
                res.push(<Cont_Long key={i}/>)
              }else{
                res.push(<Cont_Short key={i}/>)
              }
            }
            return res
      }
    return (
      <div className='t_cont'>
        <ul>
          {renderList(4,true)}
          {renderList(8,false)}
        </ul>
      </div>
    )
  }
}

class Cont_Long extends Component {
  render() {
    return (
      <li className='cont_long'>
        <div className='l_title'>
          <h3>生鲜馆</h3>
          <p>
            <span>满</span>
            <span>88</span>
            <span>送鸡蛋</span>
          </p>
         </div>
         <div className='l_img'>
          <a href="/goods">
            <img src="./static/images/goods/t1.jpg" alt=""/>
          </a>
        </div>
      </li>
    )
  }
}

class Cont_Short extends Component {
  render() {
    return (
        <li className='cont_short'>
          <div className='l_title'>
            <h3>电器城</h3>
            <p>
              <span>每日必秒</span>
            </p>
           </div>
           <div className='l_img'>
            <a href="/goods">
              <img src="./static/images/goods/t2.jpg" alt=""/>
            </a>
          </div>
        </li>
    )
  }
}



export default TCont;
