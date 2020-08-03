import React, { Fragment, useState } from 'react'
import { Layout, Row, Col } from 'antd'
import { history } from '../../history'

const { Header } = Layout

export const ClassicHeader = () => {
    const [isAuthed, setIsAuthed] = useState(localStorage.getItem('authToken'))
    return (
        <Fragment>
            {!isAuthed ? (
                <Header className="layout-container-header">
                    <Row gutter={16}>
                        <Col span={4} />
                        <Col span={4} className="navbar-left-button">
                            <span className="navbar-button-text" onClick={() => history.push('/')}>
                                Hostels Picker
                            </span>
                        </Col>
                        <Col span={8} />
                        <Col span={2} className="navbar-right-button">
                            <span className="navbar-button-text" onClick={() => history.push('/register')}>
                                Register
                            </span>
                        </Col>
                        <Col span={2} className="navbar-right-button">
                            <span className="navbar-button-text" onClick={() => history.push('/login')}>
                                Sign In
                            </span>
                        </Col>
                        <Col span={4} />
                    </Row>
                </Header>
            ) : (
                <Header className="layout-container-header">
                    <Row gutter={16}>
                        <Col span={4} />
                        <Col span={4} className="navbar-left-button">
                            <span className="navbar-button-text" onClick={() => history.push('/')}>
                                Hostels Picker
                            </span>
                        </Col>
                        <Col span={8} />
                        <Col span={2} className="navbar-right-button">
                            <span className="navbar-button-text" onClick={() => history.push('/hostel-booking-list')}>
                                Booking List
                            </span>
                        </Col>
                        <Col span={2} className="navbar-right-button">
                            <span
                                className="navbar-button-text"
                                onClick={() => {
                                    localStorage.removeItem('authToken')
                                    history.push('/login')
                                }}
                            >
                                Sign Out
                            </span>
                        </Col>
                        <Col span={4} />
                    </Row>
                </Header>
            )}
        </Fragment>
    )
}
