import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { isLoadingSelector } from './util-selector'
import { setIsLoading } from './util-slice'

export const useUtil = () =>  {
    const dispatch = useDispatch()

    const isLoading = useSelector(useMemo(isLoadingSelector, [dispatch]))

    const handleSetIsLoading = useCallback(
        ({ isLoading }) => {
            dispatch(setIsLoading({ isLoading }))
        },
        [dispatch]
    )

    return {
        isLoading,
        handleSetIsLoading,
    }
}