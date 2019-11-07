import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'

import axios from 'axios'

class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post(`http://localhost:5000/users/login`, { email: values.email, password: values.password })
                    .then(res => {
                        console.log(res)
                        localStorage.setItem('token', res.data.token)
                        this.props.history.push('/')
                    })
                    .catch((err) => {
                        console.log(err.message)
                    })
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="signup-form-wrapper">
                <div className="signup-form">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your Email!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Email"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <div>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Remember me</Checkbox>)}
                                <a className="login-form-forgot" href="">
                                    Forgot password
                    </a>
                            </div>
                            <div>
                                <Button block type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                            </Button>
                                Or <Link to="/signup">register now!</Link>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const WrappedLogin = Form.create({ name: 'login' })(Login);

export default WrappedLogin
