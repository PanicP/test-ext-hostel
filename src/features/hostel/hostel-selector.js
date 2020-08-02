import { createSelector } from '@reduxjs/toolkit'

export const hostelsSelector = () =>
    createSelector(
        (state) => state.hostel.data,
        (data) => {
            return data.map((hostel, index) => ({ ...hostel, key: index }))
        }
    )

export const displayHostelSelector = () =>
    createSelector(
        (state) => state.hostel.displayHostel,
        (data) => data
    )

export const bookedHostelSelector = () =>
    createSelector(
        (state) => state.hostel.data,
        (data) => data.filter((hostel) => hostel.isBooked)
    )
