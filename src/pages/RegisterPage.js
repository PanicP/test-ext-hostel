import React from 'react'
import { ClassicWithSidebarLayout } from '../components/layout'
import { RegisterPanel } from '../components/register'

export const RegisterPage = () => {

    return (
        <ClassicWithSidebarLayout>
            <RegisterPanel/>
        </ClassicWithSidebarLayout>
    )
}
