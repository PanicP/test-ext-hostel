import React from 'react'
import { Form, Input } from 'antd'

export const UserNameField = ({ data }) => (
    <Form.Item
        name="userName"
        label="Username"
        initialValue={data}
        rules={[
            {
                required: true,
                message: 'Username is required!',
            },
        ]}
    >
        <Input placeholder="John" />
    </Form.Item>
)
