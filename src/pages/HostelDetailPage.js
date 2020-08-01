import React from 'react'
import { ClassicWithSidebarLayout } from '../components/layout'
import { HostelDetail } from '../components/hostel'

export const HostelDetailPage = ({ match, location }) => {
    return (
        <ClassicWithSidebarLayout>
            <HostelDetail id={ match.params.id }/>
        </ClassicWithSidebarLayout>
    )
}
