import React, { Component } from 'react';

// 主题馆内容
class FixBtns extends Component {
  render() {
    return (
      <div className='fixbtns'>
        <li className='top'></li>
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
