import React, { Component } from 'react';
import axios from 'axios';
import util from '../../common/util';
import actions from '../../redux/actions';
import {bindActionCreators} from 'redux';


import {connect} from 'react-redux';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class MidKey extends Component {
	constructor(props){
		super(props)

    
	}

  

  render() {
    // console.log(this.props)
    return (
      <div className='hot_box'>
      	<div className="rmss">
          <h3>热门搜索</h3>
          <ul className="sh_ul">
              {this.props.keyData?util.forRender(Item,this.props.keyData.length,[this.props.keyData,this.props.actions]):''}
          </ul>
        </div>
      </div>
    )
  }
}



class Item extends Component{
    constructor(props){
      super(props)
      
    }

    render() {
      // console.log(this.props)
      // console.log(this.props.info[this.props.num])
      return (
          <li>
            <Link to='/slist' onClick={this.props.info[1].chgKeyWordSync.bind(this,this.props.info[0][this.props.num].title)}>
                {this.props.info?this.props.info[0][this.props.num].title:''}
            </Link>
          </li>
      )
    }
}

let mapStateToProps = (state)=>{
  return {
     newO:state.keyword
  }
}

let mapDispatchToProps = (dispatch)=>{
  return {
    actions:bindActionCreators(actions,dispatch)
  
  }
}


let Cont = connect(mapStateToProps,mapDispatchToProps)(MidKey)

export default Cont
