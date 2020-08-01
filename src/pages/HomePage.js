import React, { useState } from 'react'
import { ClassicWithSidebarLayout } from '../components/layout'
import { HostelList } from '../components/hostel'

export const HomePage = () => {

    const [isAuthed, setIsAuthed] = useState(localStorage.getItem('authToken'))

    return (
        <ClassicWithSidebarLayout>

            <div>aaaaaa</div>
            { isAuthed ? <HostelList></HostelList> : <div></div>}
        </ClassicWithSidebarLayout>
    )
}
