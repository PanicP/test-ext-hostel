import React from 'react'
import GoogleMapReact from 'google-map-react'

const Pointer = ({ text }) => (
    <div
        style={{
            color: 'white',
            background: 'grey',
            padding: '15px 10px',
            display: 'inline-flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '100%',
            transform: 'translate(-50%, -50%)',
        }}
    >
        {text}
    </div>
)

export const HostelLocation = ({ lat, lng, name }) => {

    return (
        <div className="map-container">
            <GoogleMapReact
                defaultCenter={{ lat, lng }}
                defaultZoom={16}
            >
                <Pointer lat={lat} lng={lng} text={name} />
            </GoogleMapReact>
        </div>
    )
}
