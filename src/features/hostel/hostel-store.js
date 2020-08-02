import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo, useLayoutEffect, useEffect } from 'react'
import { callGetHostels } from './hostel-api'
import { setHostels, setDisplayHostel } from "./hostel-slice"
import { hostelsSelector, displayHostelSelector } from './hostel-selector'

export const useHostel = () => {
    const dispatch = useDispatch()

    // const hostelsData = useSelector(hostelsSelector)
    // const hostelsData = useSelector(state => state.hostel.data)
    
    const hostelsData = useSelector(useMemo(hostelsSelector, [dispatch]))
    const displayHostelData = useSelector(useMemo(displayHostelSelector, [dispatch]))
    
    const handleSetHostels = useCallback(({ data }) => {
        dispatch(setHostels({ data }))
    }, [dispatch])

    const handleSetDisplayHostel = useCallback(({ id }) => {
        dispatch(setDisplayHostel({ id }))
    }, [dispatch])

    return {
        displayHostelData,
        handleSetDisplayHostel,
        handleSetHostels,
        hostelsData
    }
}
