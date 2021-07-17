import styled from '@emotion/styled'
import { StyleInputProps } from './Input.types'

export const StyledInput = styled.input<StyleInputProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    min-width: 100px;
    min-height: 50px;
    border: 1px solid #cccccc;
    border-radius: 3px
`