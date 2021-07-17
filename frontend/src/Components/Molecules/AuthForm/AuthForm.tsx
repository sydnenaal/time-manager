import { memo } from 'react'
import { Formik, FormikHelpers, FormikValues } from 'formik'
import { IFormProps } from './interface'
import { StyledForm } from './AuthForm.styles'
import { Input } from '../../Atoms/Input/Input'

export const AuthForm = memo(({ children }: IFormProps) => {
    const handleOnSubmit = (values: FormikValues, actions: FormikHelpers<FormikValues>) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }, 1000);
    }

    return <StyledForm>
        <Formik
            initialValues={{ name: 'Dima' }}
            onSubmit={handleOnSubmit}
        >
            {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        name="name"
                    />
                    {errors.name && <div>{errors.name}</div>}
                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    </StyledForm>
})
