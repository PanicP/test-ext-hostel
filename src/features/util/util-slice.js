import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
}

export const utilSlice = createSlice({
    name: 'util',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload.isLoading
        },
    },
})

export const { setIsLoading } = utilSlice.actions

export default utilSlice.reducer
