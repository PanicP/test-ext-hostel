import React from 'react'
import { Form, Input } from 'antd'

export const LastNameField = ({ data }) => (
    <Form.Item
        name="lastName"
        label="Lastname"
        initialValue={data}
        rules={[
            {
                required: true,
                message: 'Lastname is required!',
            },
        ]}
    >
        <Input placeholder="Doe" />
    </Form.Item>
)
