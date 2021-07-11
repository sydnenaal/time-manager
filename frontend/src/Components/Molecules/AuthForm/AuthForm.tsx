import { memo, ReactNode } from 'react'

import { StyledForm } from './AuthForm.styles'

interface IFormProps {
    children: ReactNode
}

export const AuthForm = memo(({ children }: IFormProps) => {
    return <StyledForm>{children}</StyledForm>
})
