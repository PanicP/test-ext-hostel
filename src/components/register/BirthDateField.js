import React from 'react'
import { Form, Button, DatePicker } from 'antd'
import moment, { Moment } from 'moment'

export const BirthDateField = () => {
    const disabledDate = (current) => {
        return current > moment().endOf('day')
    }
    return (
        <Form.Item
            name="birthDate"
            label="Birth Date"
            rules={[{ required: true, message: 'Birth Date is required!' }]}
        >
            <DatePicker allowClear disabledDate={disabledDate} />
        </Form.Item>
    )
}
