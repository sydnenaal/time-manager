import { ChangeEvent } from 'react'

export interface InputProps {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    autoFocus?: boolean
    name?: string
    type?: 'email' | 'password' | 'text'
}

export interface StyleInputProps {
    width?: number
    height?: number
}
