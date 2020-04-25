import React from 'react'
import {Redirect} from 'react-router-dom'
import { Form,  Input, Button, Checkbox, message } from 'antd'
import {loginIn} from '../../api/api'
import 'antd/dist/antd.css';

import './login.less'





const FormItem = Form.Item





class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        // let {form, loginUser, state: {user}} = this.props
        let form=this.props.form
        form.validateFields(async (err, values) => {
            if (err) {
                message.error(err)
                return
            }else{
               loginIn(values.userName,values.password)
               .then(response=>{
                   console.log(response)
                   if(response.data.code==-1){
                       this.props.history.replace('/')
                   }
               })
               .catch(
                   error=>{
                    console.log(error)
                   }

               )
            }
        
        })
    }
    render() {
        const {
            getFieldDecorator
        } = this.props.form
   
        return (
            <div className="login_wrapper df-c">
                <div className="login_box">
                    <h1>后台管理系统</h1>
                    <Form onSubmit={this.handleSubmit} className="login_form">
                        <FormItem className="form_item">
                          {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入您的用户名!' }],
                          })(
                            <Input  placeholder="Username" />
                          )}
                        </FormItem>
                        <FormItem className="form_item">
                          {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入您的密码!' }],
                          })(
                            <Input  type="password" placeholder="Password" />
                          )}
                        </FormItem>
                        <FormItem className="form_item">
                          {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                          })(
                            <Checkbox className="fl">记住我</Checkbox>
                          )}
                          <a className="fr" href="javascript:;">忘记密码</a>
                        </FormItem>
                        <Button type="primary" htmlType="submit" className="db" className="submit">Log in</Button>
                        <FormItem style={{marginBottom: 0}}>
                            <pre style={{lineHeight: '25px'}}>Username: admin      Password: 123456</pre>
                            <pre style={{lineHeight: '25px'}}>Username: editor     Password: 123456</pre>
                            <pre style={{lineHeight: '25px'}}>Username: animate    Password: 123456</pre>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Form.create()(Login)