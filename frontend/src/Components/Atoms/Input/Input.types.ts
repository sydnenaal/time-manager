import { ChangeEvent, FocusEvent } from 'react'

export interface InputProps {
    value: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void
    placeholder?: string
    autoFocus?: boolean
    name?: string
    type?: 'email' | 'password' | 'text'
}

export interface StyleInputProps {
    width?: number
    height?: number
}

export type IProps = InputProps & StyleInputProps
