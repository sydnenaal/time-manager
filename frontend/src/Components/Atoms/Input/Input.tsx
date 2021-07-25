import { memo, useState } from 'react'
import {
 equals, cond, T, always,
} from 'ramda'

import { IProps } from './Input.types'
import {
 Container, StyledImage, StyledImageContainer, StyledInput,
} from './Input.styles'

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
            {type === 'password' && (
<StyledImageContainer onClick={toggleType}>
                <StyledImage src="https://icdn.lenta.ru/images/2019/12/09/12/20191209124207243/square_320_483be77face892f812d0bf4ed11d2fae.jpg" />
</StyledImageContainer>
)}
        </Container>
    )
    })

Input.displayName = 'Input'
