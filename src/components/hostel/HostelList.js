/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { callGetHostels } from '../../features/hostel/hostel-api'
import { useHostel } from '../../features/hostel/hostel-store'
import { Table, Space, DatePicker } from 'antd'
import moment from 'moment'

export const HostelList = () => {
    const { handleSetHostels, hostelsData } = useHostel()

    useEffect(() => {
        const getHostels = async () => {
            const hostels = await callGetHostels()
            handleSetHostels({ data: hostels })
        }
        getHostels()
    }, [])

    const disabledDate = (current) => {
        return current < moment().endOf('day')
    }

    const handleSelectHostel = ({ data }) => {
        console.log(data)
    }

    const handleOnChangeDate = (date, dateString, text, record) => {
        console.log(date, dateString, text, record)
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: '50px',
        },
        {
            title: 'Hostel Name',
            dataIndex: 'name',
            key: 'name',
            width: '150px',
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
            width: '100px',
        },
        {
            title: 'From',
            key: 'fromDate',
            width: '200px',
            render: (text, record) => (
                <DatePicker allowClear disabledDate={disabledDate} onChange={ (date, dateString) => handleOnChangeDate(date, dateString, text, record) }/>
            ),
        },
        {
            title: 'To',
            key: 'toDate',
            width: '200px',
            render: (text, record) => (
                <DatePicker allowClear disabledDate={disabledDate} />
            ),
        },
        {
            title: '',
            key: 'action',
            width: '200px',
            render: (text, record) => (
                <Space size="middle">
                    <a
                        onClick={() =>
                            handleSelectHostel({
                                data: {
                                    ...record,
                                },
                            })
                        }
                    >
                        Booking {record.name}
                    </a>
                </Space>
            ),
        },
    ]

    return (
        <div>
            <Table dataSource={hostelsData} columns={columns} />
        </div>
    )
}
