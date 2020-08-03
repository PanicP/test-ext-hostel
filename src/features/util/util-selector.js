import { createSelector } from '@reduxjs/toolkit'

export const isLoadingSelector = () =>
    createSelector(
        (state) => state.util.isLoading,
        (data) => data
    )