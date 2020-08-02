/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, Fragment } from 'react'
import { callGetHostels } from '../../features/hostel/hostel-api'
import { useHostel } from '../../features/hostel/hostel-store'
import { Table, Space, DatePicker } from 'antd'
import moment from 'moment'
import { history } from '../../history'

export const HostelList = () => {
    const { handleSetHostels, hostelsData, handleSetIsBooked } = useHostel()

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

    const handleBookingHostel = ({ data }) => {
        console.log(data)
        handleSetIsBooked({ id: data.id })
    }

    const handleOnChangeDate = (date, dateString, text, record) => {
        console.log(date, dateString, text, record)
    }

    const handleSelectHostel = ({ id }) => {
        console.log('id', id)
        history.push(`/hostel/${id}`)
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
            render: (text, record) => <a onClick={() => handleSelectHostel({ id: record.id })}>{text}</a>,
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
                <DatePicker
                    allowClear
                    disabledDate={disabledDate}
                    onChange={(date, dateString) => handleOnChangeDate(date, dateString, text, record)}
                />
            ),
        },
        {
            title: 'To',
            key: 'toDate',
            width: '200px',
            render: (text, record) => <DatePicker allowClear disabledDate={disabledDate} />,
        },
        {
            title: '',
            key: 'action',
            width: '200px',
            render: (text, record) => (
                <Space size="middle">
                    <a
                        onClick={() =>
                            handleBookingHostel({
                                data: {
                                    ...record,
                                },
                            })
                        }
                    >
                        {record.isBooked ? <Fragment>Unbooking {record.name}</Fragment> : <Fragment>Booking {record.name}</Fragment>}
                    </a>
                </Space>
            ),
        },
    ]

    return (
        <div>
            <Table dataSource={hostelsData} columns={columns} pagination={false} />
        </div>
    )
}
