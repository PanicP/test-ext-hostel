import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { history } from '../../history'
import { Redirect } from 'react-router-dom'
import { callAuth } from '../../features/auth/auth-api'

export const LoginPanel = () => {
    const [isAuthed, setIsAuthed] = useState(localStorage.getItem('authToken'))

    const onFinish = async (values) => {
        const isLoginSucceeded = await callAuth()
        setIsAuthed(isLoginSucceeded)
        if (isLoginSucceeded) {
            history.push('/')
        }
    }

    const onFinishFailed = (errorInfo) => {}

    return isAuthed ? (
        <Redirect to="/"></Redirect>
    ) : (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

const layout = {
    labelCol: {
        span: 3,
    },
    wrapperCol: {
        span: 21,
    },
}

const tailLayout = {
    wrapperCol: {
        offset: 3,
        span: 21,
    },
}
