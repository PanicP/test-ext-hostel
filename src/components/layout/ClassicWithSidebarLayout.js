import React, { useState, Fragment } from 'react'
import { Layout, Menu } from 'antd'
import {
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
    LoginOutlined,
    LogoutOutlined,
} from '@ant-design/icons'
import { history } from '../../history'

const { Header, Content, Footer, Sider } = Layout

export const ClassicWithSidebarLayout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return (
        <Fragment>
            <Layout>
                <Sider
                    theme="light"
                    collapsible
                    collapsed={isCollapsed}
                    onCollapse={() => setIsCollapsed(!isCollapsed)}
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        zIndex: 2,
                    }}
                >
                    <div className="logo" />
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['4']}
                    >
                        <Menu.Item key="1" className="sider-item" icon={<UserOutlined />}>
                            Username
                        </Menu.Item>
                        <Menu.Item key="2" className="sider-item" icon={<VideoCameraOutlined />}>
                            Register
                        </Menu.Item>
                        <Menu.Item key="3" className="sider-item" icon={<LoginOutlined />} onClick={() => {
                                history.push('/login')
                            }}>
                            Sign In
                        </Menu.Item>
                        <Menu.Item
                            key="4"
                            className="sider-item"
                            icon={<LogoutOutlined />}
                            onClick={() => {
                                localStorage.removeItem('authToken')
                                history.push('/login')
                            }}
                        >
                            Sign Out
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 80 }}>
                    {/* <Header
                        className="site-layout-background"
                        style={{ padding: 0 }}
                    /> */}
                    <Header
                        style={{
                            background: '#fff',
                            padding: 0,
                            position: 'fixed',
                            zIndex: 1,
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <p
                            style={{
                                width: 'fit-content',
                                margin: '0 75px 0 0',
                            }}
                        >
                            This is Header
                        </p>
                    </Header>
                    <Content
                        style={{
                            margin: '64px 0 0',
                            overflow: 'initial',
                            border: '2px solid orange',
                        }}
                    >
                        <div
                            className="site-layout-background"
                            style={{ padding: 24, textAlign: 'center' }}
                        >
                            {children}
                        </div>
                    </Content>
                    <Footer
                        style={{ textAlign: 'center', border: '2px solid red' }}
                    >
                        Footer
                    </Footer>
                </Layout>
            </Layout>
        </Fragment>
    )
}
