import React from "react"
import CommonLogin from "./commonlogin"
import CallLogin from "./calllogin"
class LoginHeader extends React.Component{
	constructor(props,context){
        super(props,context)
        this.state = {
			change:false
		}
    }
	changeone(){
		this.setState({
			change:true
		})
	}
	changetwo(){
		this.setState({
			change:false
		})
	}
	render(){
		console.log(this.state.change)
        return (
           <div className="login">
           		<div>
           			{this.state.change?<CallLogin changetwo={this.changetwo.bind(this)}/>:<CommonLogin changeone={this.changeone.bind(this)}/>}
           		</div>
				<div className="speedLogin">
					<p className="speed_login">
						<span>其他方式登录</span>
					</p>
					<p className="third_box">
						<a href="">
							<span className="qqimg"></span>
							<span className="desc">QQ</span>
						</a>
					</p>
				</div>
           </div>
           
        )
    }
}
export default LoginHeader
