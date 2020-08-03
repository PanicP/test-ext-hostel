import React from 'react'
import { css } from '@emotion/core'
import RotateLoader from 'react-spinners/RotateLoader'
import { Modal } from 'antd'
import { useUtil } from '../../features/util/util-store'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: #1b90ff;
    border: 1px solid white;
`

export const Loading = () => {
    const { isLoading } = useUtil()
    return (
        <Modal visible={isLoading} footer={null} closeIcon={<></>} width={0} style={{ paddingTop: '25vh' }}>
            <RotateLoader css={override} color={'#ffffff'} loading={isLoading} />
        </Modal>
    )
}
