import { InputProps } from './interface'

const Input: React.FC<InputProps> = ({ onChange, value, ...rest }) => {
    return (
        <input
            value={value}
            onChange={({ target: { value } }) => onChange(value)}
            {...rest}
        />
    )
}

export default Input
