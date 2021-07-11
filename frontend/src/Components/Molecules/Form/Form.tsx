import { memo, ReactNode } from "react"

import { StyledForm } from "./Form.styles";

interface IFormProps {
    children: ReactNode
}

export const Form = memo(({ children }: IFormProps)  => {
    return <StyledForm>{children}</StyledForm>
});