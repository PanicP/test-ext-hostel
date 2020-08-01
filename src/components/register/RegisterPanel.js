import React, { useState, useEffect } from 'react'
import { Form, Input, Button } from 'antd'

export const RegisterPanel = () => {
    const onFinish = (values) => {}

    const onFinishFailed = (errorInfo) => {}

    return (
        <Form
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
