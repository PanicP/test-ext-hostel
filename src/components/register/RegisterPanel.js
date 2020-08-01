import React, { useState, useEffect, Fragment } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'
import { TitleField } from './TitleField'
import { FirstNameField } from './FirstNameField'
import { LastNameField } from './LastNameField'
import { BirthDateField } from './BirthDateField'
import { NationalityField } from './NationalityField'
import { GenderField } from './GenderField'
import { PhoneNumberField } from './PhoneNumberField'
import { UserNameField } from './UserNameField'
import { PasswordField } from './PasswordField'
import { ConfirmPasswordField } from './ConfirmPasswordField'
import { callRegis } from '../../features/auth/authApi'
import { history } from '../../history'
import { Redirect } from 'react-router-dom'

export const RegisterPanel = () => {
    const [form] = Form.useForm()
    const [isLogin, setIsLogin] = useState(localStorage.getItem('authToken'))

    const onFinish = async (values) => {
        const isLoginSucceeded = await callRegis({ data: values })
        setIsLogin(isLoginSucceeded)
        if (isLoginSucceeded) {
            history.push('/')
        }
    }

    const onFinishFailed = (errorInfo) => {}

    return isLogin ? (
        <Redirect to="/"></Redirect>
    ) : (
        <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
        >
            <Row gutter={16}>
                <Col span={8}>
                    <UserNameField />
                </Col>
                <Col span={8}>
                    <PasswordField />
                </Col>
                <Col span={8}>
                    <ConfirmPasswordField />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={4}>
                    <TitleField />
                </Col>
                <Col span={10}>
                    <FirstNameField />
                </Col>
                <Col span={10}>
                    <LastNameField />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={4}>
                    <BirthDateField />
                </Col>
                <Col span={10}>
                    <NationalityField />
                </Col>
                <Col span={10}>
                    <GenderField />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <PhoneNumberField />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Button htmlType="submit" color="primary" type="primary">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
