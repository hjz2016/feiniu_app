import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './main.scss';
// import 'antd-mobile/dist/antd-mobile.css'
// import axios from 'axios';


// 顶部搜索
import TopSearch from './comp/topsearch.js'

// 隐藏框
import Bottom from './comp/bottom.js'

// 筛选内容
import Sel from './comp/sel.js'

// 固定按钮
import FixBtns from './comp/fixbtns.js'




class Slist extends Component {
	constructor(props){
		super(props)

    this.state = {
        isShow:true
    }
	}

  chgH(){

    if(this.state.isShow){
      this.setState({
        isShow:false
      })
    }else{
       this.setState({
        isShow:true
      })
    }
    
  }

  render() {
    return (
      <div className='slist'>
      	<TopSearch chgH={this.chgH.bind(this)}/>
        {this.state.isShow?
          <Bottom chgS={{height:'.6rem'}} />:
          <Bottom chgS={{height:'0'}} />
        }     
        <Sel/>
        <FixBtns/>
      </div>
    )
  }
}

export default Slist
