import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class c3 extends Component {
  render() {
    return (
      <div>
      	<Link to='/'>首页</Link>
      	<Link to='/list'>列表页</Link>
       <h1>{'活动页'}</h1>
      </div>
    )
  }
}

export default c3;
