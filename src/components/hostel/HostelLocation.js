import React from 'react'
import GoogleMapReact from 'google-map-react'

const Pointer = ({ text }) => <div className="hostel-location-map-container">{text}</div>

export const HostelLocation = ({ lat, lng, name }) => {
    return (
        <div className="hostel-location-map">
            <GoogleMapReact defaultCenter={{ lat, lng }} defaultZoom={16}>
                <Pointer lat={lat} lng={lng} text={name} />
            </GoogleMapReact>
        </div>
    )
}
