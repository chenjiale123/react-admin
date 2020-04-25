import React, { Component } from "react"

import { Link ,withRouter} from "react-router-dom"
import './leftNav.less'

import { Menu, Button, Icon } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import menuList from '../../utils/menuConfig'

const { SubMenu } = Menu;

 class leftNav extends Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    getList(menuList) {
        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.path}>
                        <Link to={item.path}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                 
// 控制展开
                const cItem=item.children.find(cItem=> cItem.path==this.props.location.pathname)
                if(cItem){
                    this.openKey=item.path
                }


                return (
                    <SubMenu
                        key={item.path}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {
                            this.getList(item.children)
                        }

                    </SubMenu>
                )
            }
        })
    };
    componentWillMount(){
     this.node=this.getList(menuList)
    };
    render() {
      
       const path=this.props.location.pathname
        const openKey=this.openKey
        return (
            <div className="left-nav">

                <div className='top'>
                    <img src="" alt="" />
                    <span>后台管理</span>
                </div>
                <div className="menu" style={{ width: "100%" }}>

                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </Button>
                    <Menu
                        selectedKeys={[path]}
                        defaultOpenKeys={[openKey]}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >

                        {
                            this.node
                        }

                    </Menu>


                </div>



            </div>
        )
    }
}
export default withRouter(leftNav)