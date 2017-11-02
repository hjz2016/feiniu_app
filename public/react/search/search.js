import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './main.scss';
import 'antd-mobile/dist/antd-mobile.css'
import axios from 'axios';


// 顶部搜索
import TopSearch from './components/topsearch.js'

// 中部关键字
import MidKey from './components/midkey.js'

// 隐藏搜索列表
import HideList from  './components/hideList.js'

class Search extends Component {
	constructor(props){
		super(props)

    this.showList = this.showList.bind(this)
    this.hideList = this.hideList.bind(this)

    this.state = {
       isShow:false,
       data:null,
       keyData:null
    }
	}

  showList(e){
    // 顺便获取数据
    var val = e.target.value;

    var that = this;
    this.setState({
          isShow:true
        })

    if(val==''){
      this.hideList()
      return;
    }
    axios.get('http://localhost:3000/find_api/suggestion/?q='+val)
      .then(function (response) {
        // console.log(response)
        that.setState({
          data:response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });

    
    
  }

  hideList(){
    this.setState({
      isShow:false
    })
  }

  getKeyWordInfo(){
    var that = this
    axios.post('http://localhost:3000/search_api/index/getRecentSearchKeywords', {
        data:{"apiVersion":"t5.11","token":"15cc5ca73eefa2bc824d02ddd73177e3","body":{"keyword":""},"areaCode":"CS000016-310100-310113-3101130001","device_id":"c698e9644bf5790c1b0ed90ff9175b23","addrId":"","re_rule":"2"}
    })
      .then(function (response) {
        var data = JSON.parse(response.data.body.Keywords)
        that.setState({
          keyData:data.hotKeywords
        });
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentWillMount(){
    this.getKeyWordInfo()
  }

  render() {
    return (
      <div id='searchDiv'>
      	<TopSearch showList={this.showList} />
        {this.state.isShow?<HideList hideList={this.hideList} data={this.state.data}/>:<MidKey keyData={this.state.keyData}/>}
        
      </div>
    )
  }
}

export default Search
