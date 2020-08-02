import React, { useState } from 'react'
import { ClassicWithSidebarLayout } from '../components/layout'
import { HostelList, HostelCarousel } from '../components/hostel'

export const HomePage = () => {

    const [isAuthed, setIsAuthed] = useState(localStorage.getItem('authToken'))

    return (
        <ClassicWithSidebarLayout>
            <HostelCarousel/>
            { isAuthed ? <HostelList></HostelList> : <div></div>}
            <h3>Welcome to the hostel picker!</h3>
        </ClassicWithSidebarLayout>
    )
}
