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
            state.displayHostel = !isEmpty(state.data)
                ? state.data.filter((hostel) => hostel.id === action.payload.id)[0]
                : {}
        },
    },
})

export const { setHostels, setDisplayHostel } = hostelSlice.actions

export default hostelSlice.reducer
