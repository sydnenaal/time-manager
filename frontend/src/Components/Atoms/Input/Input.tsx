import { memo, useState } from 'react'
import {
 equals, cond, T, always,
} from 'ramda'

import { IProps } from './Input.types'
import { Container, StyledImage, StyledInput } from './Input.styles'

export const Input = memo(({
 onChange, value, type, ...rest
}: IProps) => {
    const [customType, setCustomType] = useState<string>(type)

    const toggleType = (): void => setCustomType(cond([
        [equals('password'), always('text')],
        [T, always('password')],
    ]))

    return (
        <Container>
            <StyledInput value={value} onChange={onChange} type={customType} {...rest} />
            {type === 'password' && <StyledImage onClick={toggleType}>Show/Hide</StyledImage>}
        </Container>
    )
    })

Input.displayName = 'Input'
