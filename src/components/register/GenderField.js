import React from 'react'
import { Form, Select } from 'antd'

export const GenderField = () => {
    return (
        <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: 'Gender is required!' }]}
        >
            <Select placeholder="Select Title">
                <Select.Option value="male.">Male</Select.Option>
                <Select.Option value="female.">Female</Select.Option>
                <Select.Option value="unisex">Unisex</Select.Option>
            </Select>
        </Form.Item>
    )
}
