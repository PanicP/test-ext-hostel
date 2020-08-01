import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
}

export const hostelSlice = createSlice({
    name: 'hostel',
    initialState,
    reducers: {
        setHostels: (state, action) => {
            state.data = action.payload.data
        },
    },
})

export const { setHostels } = hostelSlice.actions

export default hostelSlice.reducer