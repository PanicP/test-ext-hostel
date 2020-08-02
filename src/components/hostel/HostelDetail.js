import React, { useEffect, Fragment } from 'react'
import { useHostel } from '../../features/hostel/hostel-store'
import { callGetHostels } from '../../features/hostel/hostel-api'
import { isEmpty } from 'lodash'
import { HostelLocation } from './HostelLocation'

export const HostelDetail = ({ id }) => {
    const { displayHostelData, hostelsData, handleSetHostels, handleSetDisplayHostel } = useHostel()

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

    return (
        <div>
            {console.log('display', displayHostelData)}
            {!isEmpty(displayHostelData) && (
                <Fragment>
                    <div className="hostel-detail-image-container">
                        <img className="hostel-detail-image" src={require(`../../static/pictures/${id}/1.jpg`)} alt="unavailable" />
                        <img className="hostel-detail-image" src={require(`../../static/pictures/${id}/2.jpg`)} alt="unavailable" />
                        <img className="hostel-detail-image" src={require(`../../static/pictures/${id}/3.jpg`)} alt="unavailable" />
                    </div>

                    <h2>{displayHostelData.name}</h2>
                    <h3>{displayHostelData.price} THB</h3>
                    <p>{displayHostelData.desc}</p>
                    <HostelLocation
                        lat={displayHostelData.location.lat}
                        lng={displayHostelData.location.lng}
                        name={displayHostelData.name}
                    />
                </Fragment>
            )}
        </div>
    )
}
