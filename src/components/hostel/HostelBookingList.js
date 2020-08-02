/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
import { useHostel } from '../../features/hostel/hostel-store'
import { Table, Space } from 'antd'
import moment from 'moment'
import { history } from '../../history'
import { isEmpty } from 'lodash'

export const HostelBookingList = () => {
    const { bookedHostelData, handleSetIsBooked } = useHostel()

    const handleBookingHostel = ({ data }) => {
        console.log(data)
        handleSetIsBooked({ id: data.id })
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
            render: (text, record) => <p>{!isEmpty(record.fromDate) ? moment.unix(record.fromDate).format('MMM DD, YYYY') : ''}</p>,
        },
        {
            title: 'To',
            key: 'toDate',
            width: '200px',
            render: (text, record) => <p>{!isEmpty(record.fromDate) ? moment.unix(record.fromDate).format('MMM DD, YYYY') : ''}</p>,
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
            <Table dataSource={bookedHostelData} columns={columns} pagination={false} />
        </div>
    )
}
