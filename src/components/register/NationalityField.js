import React from 'react'
import { Select, Form } from 'antd'

export const NationalityField = ({ data }) => {
    return (
        <Form.Item
            name="nationality"
            label="Nationality"
            rules={[{ required: true, message: 'Nationality is required!' }]}
            wrapperCol={{ span: 24, offset: 1 }}
        >
            <Select>
                <Select.Option value="thai">Thai</Select.Option>
                <Select.Option value="american">American</Select.Option>
            </Select>
        </Form.Item>
    )
}
