
import React from 'react'

import './my.scss';

import MyHeader from './components/myheader'
import MyPark from './components/myPark'
import MyMoney from './components/mymoney'
import MyHelp from './components/myhelp'
import MyBottom from './components/mybottom'

import './my.scss'
class My extends React.Component {
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div id='accountPage' className="my">
                <MyHeader/>
                <MyPark/>
                <MyMoney/>
                <MyHelp/>
                <MyBottom/>
            </div>
        )
    }
}

export default My