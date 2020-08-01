import React, { useState, useEffect } from 'react'
import { Form, Input, Button } from 'antd'

export const LoginPanel = () => {
    const [isLogin, setIsLogin] = useState(false)

    const onFinish = (values) => {
        
    }

    const onFinishFailed = (errorInfo) => {}

    return (
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
