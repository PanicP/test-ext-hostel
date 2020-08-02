import React, { useState } from 'react'
import { ClassicWithSidebarLayout } from '../components/layout'
import { HostelList, HostelCarousel } from '../components/hostel'
import { Space } from 'antd'

export const HomePage = () => {
    const [isAuthed, setIsAuthed] = useState(localStorage.getItem('authToken'))

    return (
        <ClassicWithSidebarLayout>
            <HostelCarousel />
            <Space>
                <h3 className="homepage-welcome-text">Welcome to the hostel picker!</h3>
            </Space>
            {isAuthed ? <HostelList></HostelList> : <div></div>}
        </ClassicWithSidebarLayout>
    )
}
