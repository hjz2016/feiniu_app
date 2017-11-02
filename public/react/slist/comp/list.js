import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class List extends Component {
	constructor(props,context){
		super(props,context)
    this.checkScroll = this.checkScroll.bind(this)

    this.state = {
      loadMore:false
    }
    
    this.num = 0;

	}

  checkScroll(){
    
    if($('.list_wrapper .item:last').offset().top-$(document.documentElement).scrollTop() < 560){
     
      this.num = this.num + 1
      this.loadMore()
    
    }
  }

  loadMore(){
   
    var that = this;
    
      that.setState({
        loadMore:true
      })
    
    
  }

  renderList(){
    var that = this
    var newArr = [];
    
      for(var j = 0; j < 8; j++) {
            newArr.push(<Item types={that.props.types} key={j}/>)
      }
    
      newArr.push(<Spliter  key={'f'}/>)
    
    return newArr
  }

  loadLi(){
    var that = this
    var newArr = [];

    for(var i = 0 ; i < this.num ; i++){
        
          for(var j = 0; j < 4; j++) {
              newArr.push(<Item types={that.props.types} key={j+'.'+i}/>)
          }
        // console.log(i,this.num)
        newArr.push(<Spliter key={i}/>)
      }

      return newArr;
  }

  render() {
    var newArr = this.renderList()
    
    return (
      <div className="slist_list">  
          <div className='list_wrapper'>
            <ul>
                <div> 
                  <p className="loading_btm" style={{display:'none'}}>
                    <b></b>
                    <i>正在努力刷新数据中...</i>
                  </p> 
                </div>
                <div className='tranf_wrap'>
                  {newArr}
                  {this.state.loadMore?this.loadLi():''}
                  <div className="loading">
                    <img src='./static/images/loading.gif'/>
                    <span>正在努力加载中...</span>
                  </div>
                </div>
            </ul>
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

List.contextTypes = {
    router: PropTypes.object.isRequired
};


class Item extends Component{
    constructor(props,ctx){
      super(props,ctx)

    }

    shouldComponentUpdate(props){
      if(this.props == props){
        return false
      }else{
        return true
      }
    }
    
    goDetail(){
      // console.log(this.context.router)
      this.context.router.history.push('/detail')
    }

    render(){
        return(
            <li onClick={this.goDetail.bind(this)} className={this.props.types?'item':'item trans'}> 
                <div className="d_img"> 
                  <a > 
                    <i className="hot"> 
                      <img src="//img03.fn-mart.com/pic/6e58133d4ca627e1a563/h2Hn22szD2CgKMZMXn/79eyoGcalGjYfG/CsmRslkAW3KAM3dOAAAMdry-vUk572.png"/>  
                    </i> 
                    <img src="//img03.fn-mart.com/C/item/2015/0817/201508C170000295/_934815301_400x400_q75.jpg"/> 
                  </a> 
                </div> 
                <div className="d_adc before"> 
                  <a > 
                    <div className="d_title"> 
                      <p className="prefix-title"> 
                        <span> 
                          <img src="//st02.fn-mart.com/vue-statics/src/assets/images/goods/icon_selfsupport2_2x.png"/> 
                        </span>   
                        清风 原木纯品软包抽纸 150抽4包16提（64包箱贩） 
                      </p> 
                      <p className="subhead">
                      </p> 
                    </div> 
                  </a> 
                  <div className="d_mix"> 
                    <div className="dm_1"> 
                        
                        <a className="tg lh new_tg" > 
                          <i className="fl new_i">
                            <p className="fd_C red tg2-price" >
                              <em className="fl em_style">¥ </em>
                              <span className="fl s_style">129</span>
                              <b>.9</b> 
                              <s>¥ 199</s>
                            </p>
                          </i> 
                          <p className="s_mark">  
                            <i>
                              <span className="marking" >限时特惠
                              </span>
                            </i>  
                          </p>  
                        </a> 
                        <div className="d_price"> 
                          <span className="judge">好评100% </span> 
                          <span className="judge">评价419条</span>    
                        </div>  
                      </div> 
                      <div className="cart_case"> 
                        <div> 
                          <Link to='cart'>
                            <svg className="icon" aria-hidden="true" style={{fontSize:'0.16rem'}}>
                              <use xlinkHref="#icon-shoppingcart2"></use>
                            </svg>
                          </Link>    
                        </div>
                      </div> 
                    </div> 
                  </div>  
                
              </li>
        )
    }
}

Item.contextTypes = {
    router: PropTypes.object.isRequired
};


class Spliter extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <li className="w_species"> 
        <div className="clearfix"> 
          <p><a href="javascript:;">软包</a>
          </p>
          <p><a href="javascript:;">心心相印</a>
          </p>
          <p><a href="javascript:;">蝈蝈</a>
          </p>
          <p><a href="javascript:;">免邮</a>
          </p> 
        </div>  
      </li>
    )
  }

}

export default List
