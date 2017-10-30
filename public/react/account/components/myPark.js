import React from "react"
class MyPark extends React.Component{
	constructor(props,context){
        super(props,context)
    }
	render(){
        return (
        	<div className="myPark">
           		<h3 className="Bbottom">
           			<a href="#">
           			我的订单
           			<span>查看全部订单<i>></i></span>
           			
           			</a>
           		</h3>
           		<ul className="Part_box">
		            <li><i className="icon iconfont">&#xe613;</i><span>待付款</span></li>
		            <li><i className="icon iconfont">&#xe61e;</i><span>待发货</span></li>
		            <li><i className="icon iconfont">&#xe601;</i><span>待发货</span></li>
		            <li><i className="icon iconfont">&#xe61f;</i><span>待评论</span></li>
		            <li><i className="icon iconfont">&#xe623;</i><span>退货</span></li>
		        </ul>
           	</div>
           	
        )
    }
}
export default MyPark
