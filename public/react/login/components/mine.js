import React from "react"
import store from "../../ff/store"
import actions from "../../ff/action"
class LoginHeader extends React.Component{
	constructor(props,context){
        super(props,context)
        this.state={
        	num:1
        }
    }
	add(){
		this.setState({
			num:++this.state.num
		})
	}
	render(){
        return (
           <div>
           		{this.state.num}
           		<button onClick={this.add.bind(this)}>+</button>
           </div>
           
        )
    }
	
}
export default LoginHeader
