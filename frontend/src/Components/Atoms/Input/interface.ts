export interface InputProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    autoFocus?: boolean
    name?: string
    type?: 'email' | 'password' | 'text'
}

export interface StyleInputProps {
    width?: number
    height?: number
}
