import styled from '@emotion/styled'

export const StyledButton = styled.button`
    min-width: 100px;
    width: 100%;
    min-height: 40px;
    font-size: 15px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    &:hover {
        background: #1da1f2;
        color: white;
        box-shadow: 4px 4px 8px 0px rgba(33, 129, 202, 0.7);
    }
    &::placeholder {
        color: gray;
        font-size: 1.5em;
    }
`
