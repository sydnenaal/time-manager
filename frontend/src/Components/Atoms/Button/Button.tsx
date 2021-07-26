import { memo } from 'react'

import { StyledButton } from './Button.styles'
import { IProps } from './Button.types'

export const Button = memo(({ children }: IProps) => <StyledButton>{children}</StyledButton>)
