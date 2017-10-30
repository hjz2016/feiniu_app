import React, { Component } from 'react';
import axios from 'axios';
import util from '../../common/util.js'

class Banner extends Component {
  constructor(props){
    super()

    this.state = {
      data:null
    }
  }

  componentWillMount(){
    var that = this

    axios.get('/static/data/banner.json')
    .then(function(res){
      that.setState({
        data:res.data
      })
    })
    .catch(function(err){
      console.log(err);
    });
  }

  componentWillReceiveProps(props){
    
  }

  render() {
    return (
      <div className='banner swiper-container banner_container'>
      	<div className="swiper-wrapper">
  		    {this.state.data?util.forRender(Item,6,this.state.data):''}
		    </div>
        <div className="swiper-pagination " id='banner_pagination'></div>
      </div>
    )
  }

  componentDidMount(){
  	this.mySwiper2 = new Swiper('.banner_container', {
    		autoplay: 2000,
    		direction : 'horizontal',
    		loop:true,
    		width:window.innerWidth,
        pagination : '#banner_pagination'
  	})
  }

  componentDidUpdate(){
      this.mySwiper2.update()
    }
}


class Item extends Component{
    constructor(props){
      super()
      console.log(props)
    }

    render() {
      return (
        <div className="swiper-slide">
          <img src={this.props.info?this.props.info[this.props.num]['b-src']:'./static/images/loading.gif'}/>
        </div>
      )
    }
}

export default Banner;