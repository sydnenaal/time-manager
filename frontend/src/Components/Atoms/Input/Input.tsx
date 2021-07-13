import { memo } from 'react'

import { InputProps } from './Input.types'
import { StyledInput } from './Input.styles'

export const Input = memo(({ onChange, value, ...rest }: InputProps) => (
    <StyledInput value={value} onChange={onChange} {...rest} />
    )
)

Input.displayName = 'Input'
