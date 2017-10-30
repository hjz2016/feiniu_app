import React, { Component } from 'react';
import ajax_module from '../../ajax/fetchdata.js';


// 频道内容
class CCont extends Component {
  constructor(props){
    super()

    this.state = {
      data:null
    }
  }

  componentWillMount(){

  }

  render() {
    return (
      <div className='c_cont'>
        <ul>
          <li className='c_long'>
            <a href="/goods">
              {this.state.data?
                <img src={this.state.data[0].src} alt=""/>:
                <img style={{width:'50%',height:'50%',left:'25%',top:'25%',position:'absolute'}} src={'./static/images/loading.gif'} alt=""/>
              }
            </a>
          </li>
          <li className='c_short'>
            <a href="/goods">
              {this.state.data?
                <img src={this.state.data[1].src} alt=""/>:
                <img style={{width:'50%',margin:'0 auto'}} src={'./static/images/loading.gif'} alt=""/>
              }
            </a>
            <a href="/goods">
              {this.state.data?
                <img src={this.state.data[2].src} alt=""/>:
                <img style={{width:'50%',margin:'0 auto'}} src={'./static/images/loading.gif'} alt=""/>
              }
            </a>
          </li>
        </ul>
      </div>
    )
  }

  componentWillReceiveProps(props){
     var that = this;

      ajax_module.get(`/static/data/1.json`).then((res)=>{
          return res.json()
      }).then((data)=>{
         that.setState({
            data:data
         })
      })
    

  }
}

export default CCont;
