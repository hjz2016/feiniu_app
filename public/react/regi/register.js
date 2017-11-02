
import React from 'react'
import Register from './components/register'
import './register.scss';

class Login extends React.Component {
    constructor(props,context){
        super(props,context)
       
    }
     
    render(){
        return (
            <div className="my">
                <Register/>
                
    		</div>
        )
    }
}

export default Login