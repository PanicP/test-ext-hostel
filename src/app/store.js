import { configureStore } from '@reduxjs/toolkit'
import hostelReducer from '../features/hostel/hostel-slice'
import utilReducer from '../features/util/util-slice'

export const store = configureStore({
    reducer: {
        hostel: hostelReducer,
        util: utilReducer,
    },
})
