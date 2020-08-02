import React, { Fragment } from 'react'
import { Select, Form, Input, Avatar } from 'antd'

const phoneOption = [
    {
        value: '+66',
        text: '+66',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1200px-Flag_of_Thailand.svg.png',
    },
]

export const PhoneNumberField = () => {
    const prefixSelector = (
        <Fragment>
            <Form.Item className="hostel-regis-phone-container" initialValue={'+66'} name="phonecode" noStyle>
                <Select className="hostel-regis-phone-selection">
                    {phoneOption.map((option) => (
                        <Select.Option value={option.value}>
                            <Avatar shape="square" size="small" src={option.image} />
                            {option.text}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
        </Fragment>
    )
    return (
        <Form.Item name="phone" label="Phone Number" initialValue={''} rules={[{ required: true, message: 'Phone number is required!' }]}>
            <Input addonBefore={prefixSelector} className="hostel-regis-phone-input" maxLength={9} minLength={9} />
        </Form.Item>
    )
}
