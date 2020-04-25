/*

根组件

*/

import React,{Component} from 'react'

import   {BrowserRouter ,Route,Switch} from 'react-router-dom'

import Login from '../src/pages/login/login'
import Admin from '../src/pages/admin/admin'

// import {Button,message}   from 'antd'

// import 'antd/dist/antd.css'


export default class App extends Component{
  
   
    render(){
        return (
            <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login}></Route>
              <Route path="/" component={Admin}></Route>
              </Switch>
            </BrowserRouter>

        )
    }


}
