import styled from '@emotion/styled'
import { StyleInputProps } from './interface'

export const StyledInput = styled.input<StyleInputProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border: 1px solid #cccccc;
    border-radius: 3px
`