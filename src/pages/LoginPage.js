import React from 'react'
import { ClassicWithSidebarLayout } from '../components/layout'
import { LoginPanel } from '../components/auth'

export const LoginPage = () => {
    return (
        <ClassicWithSidebarLayout>
            <LoginPanel/>
        </ClassicWithSidebarLayout>
    )
}
