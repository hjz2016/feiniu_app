import React from "react"
class MyBottom extends React.Component{
	constructor(props,context){
        super(props,context)
    }
	render(){
        return (
        	<div className="footer">
			    <p className="vpage">
			        <a href="#" className="cur">触屏版</a>
			        <a href="#" name="gopc">电脑版</a>
			    </p>
			    <p className="copyright">Copyright © 2013-2016 飞牛网,ALL Rights Reserved.<br/>沪ICP备13025776号 营业执照</p>
			</div>
           	
        )
    }
}
export default MyBottom


