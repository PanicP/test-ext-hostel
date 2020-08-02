import { createSlice } from '@reduxjs/toolkit'
import { isEmpty } from 'lodash'

const initialState = {
    data: [],
    displayHostel: {},
}

export const hostelSlice = createSlice({
    name: 'hostel',
    initialState,
    reducers: {
        setHostels: (state, action) => {
            state.data = action.payload.data
        },
        setDisplayHostel: (state, action) => {
            state.displayHostel = !isEmpty(state.data) ? state.data.filter((hostel) => hostel.id === action.payload.id)[0] : {}
        },
        setIsBooked: (state, action) => {
            state.data = state.data.map((hostel) => ({
                ...hostel,
                isBooked: hostel.id === action.payload.id ? !hostel.isBooked : hostel.isBooked,
            }))
        },
        setFromDate: (state, action) => {
            state.data = state.data.map((hostel) => ({
                ...hostel,
                fromDate: hostel.id === action.payload.id ? action.payload.fromDate : hostel.fromDate,
            }))
        },
        setToDate: (state, action) => {
            state.data = state.data.map((hostel) => ({
                ...hostel,
                toDate: hostel.id === action.payload.id ? action.payload.toDate : hostel.toDate,
            }))
        },
    },
})

export const { setHostels, setDisplayHostel, setIsBooked, setFromDate, setToDate } = hostelSlice.actions

export default hostelSlice.reducer
