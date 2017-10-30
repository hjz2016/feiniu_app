import React from "react"
class MyHelp extends React.Component{
	constructor(props,context){
        super(props,context)
    }
	render(){
        return (
        	<div className="myHelp">
           		<ul className="Part_box">
		            <li><i className="icon iconfont">&#xe625;</i><span>个人信息</span></li>
		            <li><i className="icon iconfont">&#xe617;</i><span>曾经购买</span></li>
		            <li><i className="icon iconfont">&#xe8c1;</i><span>积分商城</span></li>
		            <li><i className="icon iconfont">&#xe65a;</i><span>帮助中心</span></li>
		            <li><i className="icon iconfont">&#xe609;</i><span>意见反馈</span></li>
		        </ul>
           	</div>
           	
        )
    }
}
export default MyHelp


