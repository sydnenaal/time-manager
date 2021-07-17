import { memo, ReactNode } from 'react'

import { StyledButton } from './Button.styles'

interface IButtonProps {
    children: ReactNode
}

export const Button = memo(({ children }: IButtonProps) => (
    <StyledButton>{children}</StyledButton>
))
