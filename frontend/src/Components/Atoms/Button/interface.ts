import { ReactNode } from 'react'

export interface StyleButtonProps {
    height?: number
    width?: number
    size?: number
}

export interface IButtonProps {
    children: ReactNode
}

export type IProps = IButtonProps & StyleButtonProps

