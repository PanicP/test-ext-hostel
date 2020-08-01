import React, { useEffect } from 'react'
import { useHostel } from '../../features/hostel/hostel-store'
import { callGetHostels } from '../../features/hostel/hostel-api'
import { isEmpty } from 'lodash'

export const HostelDetail = ({ id }) => {
    const {
        hostelsData,
        handleSetHostels,
        handleSetDisplayHostel,
    } = useHostel()

    useEffect(() => {
        const getHostels = async () => {
            const hostels = await callGetHostels()
            handleSetHostels({ data: hostels })
        }
        getHostels()
    }, [])

    useEffect(() => {
        if (!isEmpty(hostelsData)) {
            handleSetDisplayHostel({ id })
        }
    }, [hostelsData])

    return <div></div>
}
