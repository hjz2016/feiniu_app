import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// 商品类型
import Types from  './types.js';

// 商品列表
import List from './list.js'

class Sel extends Component {
	constructor(props){
		super(props)

    this.state = {
      checked:false,
      isShow:true
    }
	}

  toggle(){
    if(this.state.checked){
      this.setState({
        checked:false
      })
    }else{
      this.setState({
        checked:true
      })
    }

    this.refresh()
  }

  transf(){
    // console.log(1)
    if(this.state.isShow){
      this.setState({
        isShow:false
      })
      $('.tranf_wrap .item').addClass('trans')
      $('.d_adc').removeClass('before')
    }else{

      this.setState({
        isShow:true
      })
      $('.tranf_wrap .item').removeClass('trans')
      $('.d_adc').addClass('before')
    }
    this.refresh()


  }

  refresh(e){


    $('.loading_btm').show(200)
    setTimeout(function(){
        $('.loading_btm').hide(200)
    },2000)
    if(!e)return;
    $(e.target).parent().addClass('active')
    .siblings('li').removeClass('active')
  }

  render() {
    return (
      <div className='slist_sel'>
      	 <div className="list_nav"> 
            <ul className="lv_ul"> 
              <li className="synthesize active" > 
                <a href="javascript:;" onClick={this.refresh.bind(this)}>综合</a> 
              </li>
              <li > 
                <a href="javascript:;" onClick={this.refresh.bind(this)}>销量</a>
              </li>
              <li className="cost down" > 
                <a href="javascript:;" onClick={this.refresh.bind(this)}>价格</a> 
              </li> 
              <li className="sales_p" onClick={this.toggle.bind(this)}> 
                {this.state.checked?
                  <a href="javascript:;" className={'checked'}>促销</a>:
                  <a href="javascript:;" className={'nocheck'}>促销</a>
                } 
              </li> 
              <li className="set_list" onClick={this.transf.bind(this)}> 
                {this.state.isShow?
                <div> 
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-qiapianxingshi"></use>
                    </svg>  
                </div>: 
                <div> 
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-liebiaoxingshi"></use>
                    </svg>  
                </div> 
                }
              </li> 
            </ul> 
          </div>
          <Types/>
          <List types={this.state.isShow}/>
      </div>
    )
  }
}

export default Sel
