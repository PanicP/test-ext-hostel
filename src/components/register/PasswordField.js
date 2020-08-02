import React from 'react'
import { Form, Input } from 'antd'
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'

export const PasswordField = ({ data }) => (
    <Form.Item
        name="password"
        label="Password"
        initialValue={data}
        hasFeedback
        rules={[
            {
                required: true,
                message: 'Password is required!',
            },
        ]}
    >
        <Input.Password placeholder="■■■■■■■■" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
    </Form.Item>
)
