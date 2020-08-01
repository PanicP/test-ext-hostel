import { configureStore } from '@reduxjs/toolkit'
import hostelReducer from '../features/hostel/hostel-slice'

export const store = configureStore({
    reducer: {
        hostel: hostelReducer,
    },
})
