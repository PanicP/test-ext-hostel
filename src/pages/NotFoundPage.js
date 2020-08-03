import React from 'react'
import { ClassicWithSidebarLayout } from '../components/layout'
import { NotFoundPanel } from '../components/auth'

export const NotFoundPage = () => {

    return (
        <ClassicWithSidebarLayout>
            <NotFoundPanel/>
        </ClassicWithSidebarLayout>
    )
}
