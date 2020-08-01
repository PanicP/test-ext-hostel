import React from 'react'
import { Select, Form } from 'antd'

export const TitleField = ({ data }) => (
    <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: 'Title is required!' }]}
    >
        <Select placeholder="Select Title">
            <Select.Option value="mr.">Mr.</Select.Option>
            <Select.Option value="mrs.">Mrs.</Select.Option>
        </Select>
    </Form.Item>
)
