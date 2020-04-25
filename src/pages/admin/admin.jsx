import React,{Component} from 'react'
import { Layout } from 'antd';

import {Redirect ,Route,Switch} from 'react-router-dom'
import 'antd/dist/antd.css'
import './admin.less'
import LeftNav from '../../component/leftNav/leftNav'
import Header from '../../component/header/header'


import Home from '../home/home'
import Product from '../product/product'
import Manage from '../product/manage'


const {  Footer, Sider, Content } = Layout;



export default class Admin extends Component{
    render(){
        return(
       
          <Layout className="contain" >
      <Sider>
         <LeftNav/>


      </Sider>
      <Layout>
        <Header>
        
        </Header>
        <Content>
          <Switch>
           <Route path="/home" component={Home}/> 
           <Route path="/product" component={Product}/> 
           <Route path="/manage" component={Manage}/> 
           <Redirect  to="/"/>
          </Switch>


        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  
        )
    }
}