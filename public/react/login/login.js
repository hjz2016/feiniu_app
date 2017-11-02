
import React from 'react'
import LoginHeader from './components/loginheader'
import './login.scss'

class Login extends React.Component {
    constructor(props,context){
        super(props,context)
       
    }
     
    render(){
        return (
            <div className="my">
                <LoginHeader/>
                
    		</div>
        )
    }
}

export default Login