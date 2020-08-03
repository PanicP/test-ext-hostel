import React, { useState, Fragment } from 'react'
import { Layout, Menu, Row, Col } from 'antd'
import { HomeOutlined, BookOutlined, EditOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import { history } from '../../history'

const { Header, Content, Sider, Footer } = Layout

export const ClassicWithSidebarLayout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [isAuthed, setIsAuthed] = useState(localStorage.getItem('authToken'))

    return (
        <Fragment>
            <Layout>
                <Sider
                    className="layout-sider"
                    theme="light"
                    collapsible
                    collapsed={isCollapsed}
                    onCollapse={() => setIsCollapsed(!isCollapsed)}
                >
                    <div className="logo" />
                    {!isAuthed ? (
                        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                            <Menu.Item
                                key="1"
                                icon={<HomeOutlined />}
                                onClick={() => {
                                    history.push('/')
                                }}
                            >
                                Home
                            </Menu.Item>

                            <Menu.Item
                                key="2"
                                icon={<EditOutlined />}
                                onClick={() => {
                                    history.push('/register')
                                }}
                            >
                                Register
                            </Menu.Item>
                            <Menu.Item
                                key="3"
                                icon={<LoginOutlined />}
                                onClick={() => {
                                    history.push('/login')
                                }}
                            >
                                Sign In
                            </Menu.Item>
                        </Menu>
                    ) : (
                        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                            <Menu.Item
                                key="1"
                                icon={<HomeOutlined />}
                                onClick={() => {
                                    history.push('/')
                                }}
                            >
                                Home
                            </Menu.Item>

                            <Menu.Item
                                key="2"
                                icon={<BookOutlined />}
                                onClick={() => {
                                    history.push('/hostel-booking-list')
                                }}
                            >
                                Booking List
                            </Menu.Item>
                            <Menu.Item
                                key="3"
                                icon={<LogoutOutlined />}
                                onClick={() => {
                                    localStorage.removeItem('authToken')
                                    history.push('/login')
                                }}
                            >
                                Sign Out
                            </Menu.Item>
                        </Menu>
                    )}
                </Sider>

                <Layout className="site-layout">
                    <Header className="layout-container-header">
                        <Row gutter={16}>
                            <Col span={4} />
                            <Col span={4} className="navbar-left-button">Hostels Picker</Col>
                            <Col span={8} />
                            <Col span={2} className="navbar-right-button">Register</Col>
                            <Col span={2} className="navbar-right-button">Sign In</Col>
                            <Col span={4} />
                        </Row>
                    </Header>
                    <Content className="layout-container-content">
                        <Row gutter={16}>
                            <Col span={4} />
                            <Col span={16}>
                                <div className="site-layout-background">{children}</div>
                            </Col>
                            <Col span={4} />
                        </Row>
                    </Content>
                    <Footer className="layout-container-footer">
                        <Row gutter={16}>
                            <Col span={4} />
                            <Col span={16}>Hostels Picker by PanicP</Col>
                            <Col span={4} />
                        </Row>
                    </Footer>
                </Layout>
            </Layout>
        </Fragment>
    )
}
