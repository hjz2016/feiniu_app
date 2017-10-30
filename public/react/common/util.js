import React, { Component } from 'react';


const util = {
	forRender(tag,l,props){
		  var res = [];
	      for(var i = 0; i < l; i++) {
	        res.push(React.createElement(tag, {key:i,num:i,info:props}))
	      }
	      return res
	}
}

export default util;