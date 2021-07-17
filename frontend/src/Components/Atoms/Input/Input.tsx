import { memo } from 'react'

import { InputProps, StyleInputProps } from './Input.types'
import { StyledInput } from './Input.styles'

export const Input = memo(({ onChange, value, ...rest }: InputProps & StyleInputProps) => (
    <StyledInput value={value} onChange={onChange} {...rest} />
    )
)

Input.displayName = 'Input'
