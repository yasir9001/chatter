import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios'

export class Singup extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (values.password === values.confirmPassword) {
                    // console.log('Received values of form: ', values);
                    axios.post(`http://localhost:5000/users/signup`, { email: values.email, password: values.password })
                        .then(res => {
                            // const persons = res.data;
                            // console.log(res.data, res)
                            this.props.history.push('/login')
                            // this.setState({ persons });
                        })
                        .catch((err) => {
                            console.log(err.message)
                        })
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="signup-form-wrapper">
                <div className="signup-form">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your email!' }],
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
                            {getFieldDecorator('confirmPassword', {
                                rules: [{ required: true, message: 'Confirm your Password!' }],
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
                                <Button block type="primary" htmlType="submit" className="login-form-button">
                                    Sign Up
                            </Button>
                                Or <Link to="/login">already have an account</Link>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const WrappedSingup = Form.create({ name: 'singup' })(Singup);

export default WrappedSingup
