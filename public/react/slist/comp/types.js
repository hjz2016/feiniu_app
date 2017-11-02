import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Types extends Component {
	constructor(props){
		super(props)

	}

  checkThis(e){
    // console.log(e.target)
    $(e.target).parent().addClass('w_red')
    .siblings('li').removeClass('w_red')

    this.refresh()
  }

  refresh(){
    $('.loading_btm').show(200)
    setTimeout(function(){
        $('.loading_btm').hide(500)
    },2000)
    
  }

  render() {
    return (
      <div className="slist_types">  
        <div className="w_kinds zIndex"> 
          <ul className="tagUl"> 
            <li className="w_red" onClick={this.checkThis.bind(this)}>
              <i>自营</i>
            </li> 
            <li onClick={this.checkThis.bind(this)}>
              <i>品牌</i>
            </li>
            <li onClick={this.checkThis.bind(this)}>
              <i>类型</i>
            </li>
            <li onClick={this.checkThis.bind(this)}>
              <i>抽数</i>
            </li> 
          </ul> 
        </div>
      </div>
    )
  }
}

export default Types
