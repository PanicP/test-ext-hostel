import React from 'react'
import { Carousel } from 'antd'

export const HostelCarousel = () => {
    const hostelIDset = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10']
    return (
        <Carousel autoplay>
            {hostelIDset.map((id) => (
                <div>
                    <img
                        src={require(`../../static/pictures/${id}/1.jpg`)}
                        alt="unavailable"
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
            ))}
        </Carousel>
    )
}
