import styled from '@emotion/styled'
import { StyleInputProps } from './Input.types'

export const StyledInput = styled.input<StyleInputProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    min-width: 100px;
    min-height: 50px;
    font-size: 20px;
    border: none;
    outline: none;
    border-radius: 3px;
    border-bottom: 1px solid #cccccc;
    &:focus {
        border: 2px solid rgba(33, 129, 202, 0.7);
        box-shadow: 4px 4px 8px 0px rgba(33, 129, 202, 0.3);
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    padding-bottom: 15px;
    display: flex;
`

export const StyledImageContainer = styled.div`
    position: absolute;
    bottom: 45%;
    right: 5%;
    width: 20px;
    height: 20px;
`

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
`
