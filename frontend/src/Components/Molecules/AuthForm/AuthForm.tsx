import { memo } from 'react'
import { IFormProps } from './interface'
import { StyledForm } from './AuthForm.styles'

export const AuthForm = memo(({ children }: IFormProps) => {
    return <StyledForm>{children}</StyledForm>
})
