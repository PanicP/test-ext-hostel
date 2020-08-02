import React from 'react'
import { ClassicWithSidebarLayout } from '../components/layout'
import { HostelBookingList } from '../components/hostel'

export const HostelBookingListPage = () => {
    return (
        <ClassicWithSidebarLayout>
            <HostelBookingList/>
        </ClassicWithSidebarLayout>
    )
}
