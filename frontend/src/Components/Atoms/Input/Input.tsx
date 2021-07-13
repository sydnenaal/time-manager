import { InputProps } from './Input.types'

export const Input = ({ onChange, value, ...rest }: InputProps) => {
    return (
        <input
            value={value}
            onChange={onChange}
            {...rest}
        />
    )
}
