import axios from 'axios'

export const callAuth = async () => {
    try {
        const res = await axios.post(
            'https://42a3c039-1cf6-4bd8-b159-07129942aa50.mock.pstmn.io/auth'    
        )
        if (res) {
            console.log(res, res.data, res.data.token)
            localStorage.setItem('authToken', res.data.token)
            return true
        }
    } catch (error) {
        return false
    }
}
