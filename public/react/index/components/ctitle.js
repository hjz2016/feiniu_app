import React, { Component } from 'react';

// 频道title
class CTitle extends Component {
  construcotr(props){
  
  }

  render() {
    let cls = ''
    switch (this.props.type) {
      case 1:
        cls = 'c_title'
        break;
      case 2:
        cls = 't_title'
        break;
      case 3:
        cls = 'c_title';
        break;
      case 4:
        cls = 'cs_title';
        break;
    }

    return (
      <div className={cls}>
        <div className='title_main'> 
         <p className='line'></p>
         <p>{this.props.channel}</p>
         <p className='line'></p>
         
          
        </div>
        {this.props.type==3?<div className='title_more'>
            <span>查看更多</span>
            <img src='./static/images/goods/arrow.jpg'/>
          </div>:''}
      </div>
    )
  }
}

export default CTitle;
