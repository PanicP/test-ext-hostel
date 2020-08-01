import React, { useEffect } from 'react'
import { callGetHostels } from '../../features/hostel/hostel-api'
import { useHostel } from '../../features/hostel/hostel-store'
import { Table, Space } from 'antd'

export const HostelList = () => {
    const { handleSetHostels, hostelsData } = useHostel()

    useEffect(() => {
        const getHostels = async () => {
            const hostels = await callGetHostels()
            handleSetHostels({ data: hostels })
        }
        getHostels()
    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: '100px'
        },
        {
            title: 'Hostel Name',
            dataIndex: 'name',
            key: 'name',
            width: '400px'
        },
        {
            title: 'Description',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            width: '200px'
        },
        {
            title: 'Action',
            key: 'action',
            width: '200px',
            render: (text, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ]

    return (
        <div>
            {/* { console.log( hostelsData) } */}
            <Table dataSource={hostelsData} columns={columns} />
        </div>
    )
}
