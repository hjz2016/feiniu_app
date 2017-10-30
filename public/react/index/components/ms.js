import React, { Component } from 'react';
import MsCont from './ms-cont';


// 秒杀
class MS extends Component {
  render() {
    return (
      <div className='ms'>
        <MsTop/>
        <MsCont/>
      </div>
    )
  }
}

// 秒杀头部
class MsTop extends Component {
  

  render() {
    return (
      <div className='ms_top'>
         <div className='ms_icon'><img src="./static/images/ms/ms1.jpg"/></div>
		 <h4>15点场</h4>
		 <div className="ms_time countdown">
        <span className='cd_h'></span>:
        <span className='cd_m'></span>:
        <span className='cd_s'></span>
     </div>
		 <div className='ms_limit'><p>限时限量</p><img src="./static/images/ms/ms2.jpg"/></div>
      </div>
    )
  }

  componentDidMount(){
      $(".cd_h")  
      .countdown("2017/11/04", function(event) {  
        $(this).text(  
          event.strftime('%H')  
        );  
      });  

      $(".cd_m")  
      .countdown("2017/11/04", function(event) {  
        $(this).text(  
          event.strftime('%M')  
        );  
      });  

      $(".cd_s")  
      .countdown("2017/11/04", function(event) {  
        $(this).text(  
          event.strftime('%S')  
        );  
      });  
  }
}

export default MS;
