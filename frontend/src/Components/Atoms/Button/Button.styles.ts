import styled from '@emotion/styled'
import { StyleButtonProps } from './Button.types'

export const StyledButton = styled.button<StyleButtonProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    font-size: ${(props) => props.size}px;
    border: none;
    cursor: pointer;
`
