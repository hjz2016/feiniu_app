import React, { Component } from 'react';
import './main.scss';

// 头部
import Header from './components/header';

// banner menu 广播
import Banner from './components/banner';
import Menu from './components/menu';
import BC from './components/boardcast';

// 秒杀
import MS from './components/ms';

// 公共title 特色频道
import Title from './components/ctitle';
import CCont from './components/ccont';
import CBanner from './components/cbanner';

// 公共title 主题馆
import TCont from './components/tcont';
import TBanner from './components/tbanner';

// 公共title 店铺推荐
import RCont from './components/rcont';

// 公共title 促销专享
import CSCont from './components/cscont';

import Footer from './components/footer'; 

// 底部
import Bottom from './components/bottom';

// 回到顶部
import FixBtns from './components/fixbtns';

class c1 extends Component {
  constructor(props){
    super()
    this.scrollChgColor = this.scrollChgColor.bind(this)

    this.state = {
      color:false
    }
  }

  scrollChgColor(){
    if(document.documentElement.scrollTop < 50){
      this.setState({color:false})
    }else{
      this.setState({color:true})
    }
    
  }

  render() {
    return (
      <div onScroll={this.scrollChgColor}  id='app-wrapper'>
       <Header color={this.state.color}/>
       <TopMain/>
       <MS/>
       <Channel/>
       <Theme/>
       <Reco/>
       <CS/>
       <Footer/>
       <Bottom/>
       <FixBtns/>
      </div>
    )
  }
  
  componentDidMount(){
    var that = this;
    
    document.addEventListener('scroll',function(){
      that.scrollChgColor()
    })

    document.addEventListener('touchmove',function(){
      that.scrollChgColor()
    })

   
  }

}

// 中部
class TopMain extends Component {
  render() {
    return (
      <div className='top_main'>
       <Banner/>
       <Menu/>
       <BC/>
      </div>
    )
  }
}

// 频道
class Channel extends Component {
  render() {
    return (
      <div>
        <Title channel={'特色频道'} type={1}/>
        <CCont/>
        <CBanner/>
      </div>
    )
  }
}

// 主题
class Theme extends Component {
  render() {
    return (
      <div>
        <Title channel={'主题馆'} type={2}/>
        <TCont/>
        <TBanner/>
      </div>
    )
  }
}

// 推荐
class Reco extends Component {
  render() {
    return (
      <div>
        <Title channel={'店铺推荐'} type={3}/>
        <RCont/>
      </div>
    )
  }
}

// 促销专享
class CS extends Component {
  render() {
    return (
      <div>
        <Title channel={'促销专享'} type={4}/>
        <CSCont/>
      </div>
    )
  }
}

export default c1;
