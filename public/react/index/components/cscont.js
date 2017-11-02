import React, { Component } from 'react';
import axios from 'axios';

// 促销内容
class CSCont extends Component {
  constructor(props){
    super()

    this.renderList = this.renderList.bind(this)
    this.loadMore = this.loadMore.bind(this)
    this.checkScroll = this.checkScroll.bind(this)

    this.state = {
      loadMore_flag:false,
      goodsData:null
    }
  }

  componentWillMount(){
    // 初始化获取数据
    this.getGoods()
  }

  getGoods(){
    var that = this

    axios.get('/static/data/goods.json')
    .then(function(res){
      // 存储
      that.setState({
        goodsData:res.data
      })
    })
    .catch(function(err){
      console.log(err);
    });
  }

  moreUl(num){
    var res = [];
    for(var i = 0; i < num; i++) {
        res.push(<ul key={i}>{this.renderList(8)}</ul>)
    }
    return res
  }

  renderList(l){
   
    var res = [];
    for(var i = 0; i < l; i++) {
        
        res.push(<CSItem goodsData={this.state.goodsData?this.state.goodsData[i]:''} key={i}/>)
    }
    return res
  }

  loadMore(flag){
    this.setState({loadMore_flag:flag})
  }

  checkScroll(){
   
    if($('.cs_cont>ul:last').offset().top-$(document.documentElement).scrollTop() < -600){
      this.num = $('.cs_cont>ul').length
      this.loadMore(true)
    }
  }

  render() {
    return (
      <div className='cs_cont'>
        <ul>
          {this.renderList(8)}
        </ul>
        {this.state.loadMore_flag ? 
          this.moreUl(this.num)
          :''}
          <div className="loading">
            <img src='./static/images/loading.gif'/>
            <span>正在努力加载中...</span>
          </div>
      </div>
    )
  }

  componentDidMount(){
    document.addEventListener('scroll',this.checkScroll)
  }

  componentWillUnmount(){
    document.removeEventListener('scroll',this.checkScroll)
  }
}

class CSItem extends Component {
  constructor(props){
    super()
  
    this.state = {
      ten:props.goodsData?props.goodsData.o_price.split('.')[0]:'',
      one:props.goodsData?props.goodsData.o_price.split('.')[1]:''
    }
  }

  componentWillReceiveProps(props){
    this.setState({
      ten:props.goodsData?props.goodsData.o_price.split('.')[0]:'',
      one:props.goodsData?props.goodsData.o_price.split('.')[1]:''
    })
  }

  render() {
    return (
      <li>
        <div className="cs_img">
          <img src={this.props.goodsData?this.props.goodsData.src:"./static/images/loading.gif"} alt=""/>
        </div>
        <div className="cs_bot">
          <p>{this.props.goodsData?this.props.goodsData.name:'加载中...'}</p>
          <div className="cs_price">
            <span className="cs_o_p"><em>￥</em>{this.state.ten}<b>{'.'+this.state.one}</b></span>
            <span className="cs_n_p"><em>{this.props.goodsData.n_price?'￥':''}</em> <b>{this.props.goodsData?this.props.goodsData.n_price:''}</b></span>
          </div>
          <div className="cart_btn">
            <a href="/goods.add">
              <svg className="icon" aria-hidden="true" style={{fontSize:'0.16rem'}}>
                <use xlinkHref="#icon-shoppingcart2"></use>
              </svg>
            </a>
          </div>
        </div>
      </li>
    )
  }
}





export default CSCont;
