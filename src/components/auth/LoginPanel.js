import React, { useState } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
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
            <Row gutter={16}>
                <Col span={3} />
                <Col span={16}>
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
                </Col>
                <Col span={5} />
            </Row>
            <Row gutter={16}>
                <Col span={3} />
                <Col span={16}>
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
                </Col>
                <Col span={5} />
            </Row>
            <Row gutter={16}>
                <Col span={3} />
                <Col span={16}>
                    <Form.Item {...tailLayout}>
                        <Button className="hostel-regis-submit-button" type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
                <Col span={5} />
            </Row>
        </Form>
    )
}

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    },
}

const tailLayout = {
    wrapperCol: {
        offset: 6,
        span: 18,
    },
}
