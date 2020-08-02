import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { setHostels, setDisplayHostel, setIsBooked, setFromDate, setToDate } from './hostel-slice'
import { hostelsSelector, displayHostelSelector, bookedHostelSelector } from './hostel-selector'

export const useHostel = () => {
    const dispatch = useDispatch()

    // const hostelsData = useSelector(hostelsSelector)
    // const hostelsData = useSelector(state => state.hostel.data)

    const hostelsData = useSelector(useMemo(hostelsSelector, [dispatch]))
    const displayHostelData = useSelector(useMemo(displayHostelSelector, [dispatch]))
    const bookedHostelData = useSelector(useMemo(bookedHostelSelector, [dispatch]))

    const handleSetHostels = useCallback(
        ({ data }) => {
            dispatch(setHostels({ data }))
        },
        [dispatch]
    )

    const handleSetDisplayHostel = useCallback(
        ({ id }) => {
            dispatch(setDisplayHostel({ id }))
        },
        [dispatch]
    )

    const handleSetIsBooked = useCallback(
        ({ id }) => {
            dispatch(setIsBooked({ id }))
        },
        [dispatch]
    )

    const handleSetFromDate = useCallback(
        ({ id, fromDate }) => {
            dispatch(setFromDate({ id, fromDate }))
        },
        [dispatch]
    )

    const handleSetToDate = useCallback(
        ({ id, toDate }) => {
            dispatch(setToDate({ id, toDate }))
        },
        [dispatch]
    )
    
    return {
        bookedHostelData,
        displayHostelData,
        hostelsData,
        handleSetDisplayHostel,
        handleSetHostels,
        handleSetIsBooked,
        handleSetFromDate,
        handleSetToDate,
    }
}
