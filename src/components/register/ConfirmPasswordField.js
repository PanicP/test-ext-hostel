import React from 'react'
import { Form, Input } from 'antd'
import {
    EyeTwoTone,
    EyeInvisibleOutlined
} from '@ant-design/icons'

export const ConfirmPasswordField = ({ data }) => (
    <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        initialValue={data}
        rules={[
            {
                required: true,
                message: 'Password is required!',
            },
        ]}
    >
        <Input.Password placeholder="■■■■■■■■" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
    </Form.Item>
)
