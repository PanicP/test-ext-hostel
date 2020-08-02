import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo, useLayoutEffect, useEffect } from 'react'
import { callGetHostels } from './hostel-api'
import { setHostels, setDisplayHostel, setIsBooked } from './hostel-slice'
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
    
    return {
        bookedHostelData,
        displayHostelData,
        hostelsData,
        handleSetDisplayHostel,
        handleSetHostels,
        handleSetIsBooked,
    }
}
