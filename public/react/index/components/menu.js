import React, { Component } from 'react';
// var imgUrl = require('../images/bg.jpg')
    
var arr =  ["//img02.fn-mart.com/pic/7ed7133d8a9127c136b9/hT8nTTs2v2LgBMuM32/5YmRSyJGOY3ihy/CsmRsVkcCbOAIk4GAAAg-LdGWGY577_org_q75s500.png",

"//img03.fn-mart.com/pic/6d80133a29c219a0a305/hTqTnns2DnLdBgZMjT/79eGSRCaCYOy3G/CsmRslghPSOAQU6PAABCLjUbLhk400_org_q75s500.png",
"//img02.fn-mart.com/pic/e7d8133a29c1199d11d8/B26n221z_2fdhMZdtz/simaoafGuaJ9fG/CsmRsFghPSmAInVqAAA3VBmSEGo843_org_q75s500.png",
"//img06.fn-mart.com/pic/bcb1133a29c6199d6867/B26zzz5TDnLgklUd3T/siSRmGLRLxja3G/CsmRsVghPS6AD1l8AAA6-fE9ybQ563_org_q75s500.png",
"//img06.fn-mart.com/pic/43c1133a29c4199d9e92/hT8nTTs2v2LgBMuMf2/7YeaoatyUGc9CG/CsmRsFghPTGAVqvJAAA2nE09VMY565_org_q75s500.png",
"//img02.fn-mart.com/pic/d3f0133a29c7199e3f9b/Kz8Tnn1zvTLdhMVd3z/5xmRoatRLx3Rja/CsmRsVghPTuAArS4AAA7ECbe2X4245_org_q75s500.png",
"//img06.fn-mart.com/pic/36ed133a29c7199e7cf9/K28z2212_ntdKdUlOz/7YSGmatafY3GOy/CsmRsVghPT-AJDFxAAAsha1QbHc374_org_q75s500.png",
"//img02.fn-mart.com/pic/1daa133a2c461b223f10/kzHzzz52_2tgKduMXn/7imyeaOaQyUGha/CsmRsVhYoWuAOHSeAAAYxcblbwc951_org_q75s500.png",
"//img02.fn-mart.com/pic/ec61133a29c8199ecb58/K28TTT1z_zCMBdugtz/5xSGeaCRZGExEy/CsmRr1ghPUSAJaV4AAAwGHmm3hw578_org_q75s500.png",
"//img03.fn-mart.com/pic/c77e133a29c7199f7ffa/B26n221z_2fdhMZdtz/59eaSGCaZRciLR/CsmRsFghPU-AFbenAAAu74AIIKI869_org_q75s500.png",
"//img02.fn-mart.com/pic/cd78133a29c219a3f463/kTH222sTvTtMhdUlX2/sYSReGfatYOajR/CsmRslghPW-AF1h5AAA8rW7EZrw672_org_q75s500.png",
"//img02.fn-mart.com/pic/bdcf133a29c819a645c6/BT62TT52F2LdKlVlLn/1xmGSGtyuGciCR/CsmRsFghPV6AK2_kAABg8yzM2UI201_org_q75s500.png",
"//img06.fn-mart.com/pic/47c8133a29ca19a34ff9/K28TTT1z_zCMBdugXz/1YmRmafGLxjGOG/CsmRsVghPWSAB9GSAAA4hB77ftA159_org_q75s500.png",
"//img02.fn-mart.com/pic/9172133a29c419a3b9c5/BT62TT52F2LdKlVlOn/5xSGeaCRfijR3y/CsmRsVghPWuAP7pfAAAt9pOzNxU131_org_q75s500.png",
"//img02.fn-mart.com/pic/4934133a29ca19a433fb/K28TTT1z_zCMBdugtz/1ioRmyfaVaJ9LG/CsmRsFghPXOARlrVAAAqqyDowCY730_org_q75s500.png",
"//img06.fn-mart.com/pic/65ef133a29c0199f1cd1/K2HT221TD2tdkdUlCT/1ioRmyfaVaJ9LG/CsmRsFghPUmAX68EAAAwoQCfi_w908_org_q75s500.png",
"//img04.fn-mart.com/pic/63fe133d12281b21cb43/B262zz1z_TCgBgUlOz/s9maoajyhiOyER/CsmRsVjAx-SARn9QAABgJOWbZnA083_org_q75s500.png",
"//img04.fn-mart.com/pic/918a133a29ca19a4a134/Kz62zz12DTtlkdult2/1YoaoRtRuaE9LG/CsmRsFghPXqADClgAAAx0f1Z-FM908_org_q75s500.png",
"//img06.fn-mart.com/pic/8151133a264b1bd695bc/B2q2TT5T_zLMBMZdf2/1xmyeatazaSGKR/CsmRsFg2YSmAGMF4AAAgI4z91Bc142_org_q75s500.png",
"//img04.fn-mart.com/pic/9da3133a29c819a51674/Kn6zTT5n_zLMBdVMtn/1ioRmyfaVaJ9cG/CsmRr1ghPYGAFcJWAAA2oimiUMU989_org_q75s500.png"]


var names = ["急速达", "进口好货", "飞牛商城", "服装城", "母婴", "领券中心", "手机充值", "自创品牌", "曾经购买", "签到送积分", "品牌特卖", "店铺推荐", "秒杀", "飞牛团", "电器城", "卡券充值", "商品分类", "我的收藏", "订单查询", "我的飞牛"]

class Menu extends Component {
	  render() {
	  	let renderList = (l,s=0)=>{
	  		  var res = [];
	          for(var i = s; i < l; i++) {
	            res.push(<MItem key={i} src={arr[i]} name={names[i]}/>)
	          }
	          return res
	  	}

	    return (
	      <div className='menu swiper-container menu_container'>
	        	<ul className='swiper-wrapper tab'>
					<div className="swiper-slide">{renderList(10)}</div>
					<div className="swiper-slide">{renderList(20,10)}</div>
	        	</ul>
	        	<div className="swiper-pagination " id='menu_pagination'></div>
	      </div>
	    )
	  }

	  componentDidMount(){
	  	var mySwiper4 = new Swiper('.menu_container', {
	  		pagination:'#menu_pagination',
	  		
	  		initialSlide:0
		})
	  }
}

class MItem extends Component {
	constructor(props){
		super(props)
	}
  render() {
    return (
	    <li className='m_item'>
	      <span>
			<img src={this.props.src}/>
			<p>{this.props.name}</p>
		  </span>
		</li>
    )
  }
}

export default Menu;