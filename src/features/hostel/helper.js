export const hostelListFromAPI = (data) => {
    return data.map((hostel) => ({
        ...hostel,
        isBooked: false,
        fromDate: '',
        toDate: '',
    }))
}

export const isEmptyArray = ( arr ) => {
    return Array.isArray(arr) && arr.length
}