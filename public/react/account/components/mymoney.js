import React from "react"
class MyMoney extends React.Component{
	constructor(props,context){
        super(props,context)
    }
	render(){
        return (
        	<div className="myPark">
           		<h3 className="Bbottom">
           			<a href="javascript:;">
           			我的资产
           			</a>
           		</h3>
           		<ul className="Part_box">
		            <li><i className="icon iconfont">&#xe624;</i><span>账户余额</span></li>
		            <li><i className="icon iconfont">&#xe60f;</i><span>购物卡</span></li>
		            <li><i className="icon iconfont">&#xe66d;</i><span>优惠券</span></li>
		            <li><i className="icon iconfont">&#xe600;</i><span>积分</span></li>
		            <li><i className="icon iconfont">&#xe704;</i><span>卡券充值</span></li>
		        </ul>
           	</div>
           	
        )
    }
}
export default MyMoney


