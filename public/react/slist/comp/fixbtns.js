import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// 主题馆内容
class FixBtns extends Component {
  render() {
    return (
      <div className='fixbtns'>
        <Link to='/'><li className='home'></li></Link>
        <Link to='/cart'><li className='cart'></li></Link>
      </div>
    )
  }

  componentDidMount(){
    $('.top').click(function() {
      $(document).scrollTop(0)
    });
  }
}

export default FixBtns;
