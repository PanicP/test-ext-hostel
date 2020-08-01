import axios from 'axios'
import { hostelListFromAPI } from './helper'

export const callGetHostels = async () => {
    try {
        const res = await axios.get(
            'https://42a3c039-1cf6-4bd8-b159-07129942aa50.mock.pstmn.io/hostels'    
        )
        if (res) {
            return hostelListFromAPI( res.data.hostels )
        }
    } catch (error) {
        return false
    }
}
