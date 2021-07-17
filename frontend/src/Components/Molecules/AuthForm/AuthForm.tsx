import { memo, useCallback } from 'react'
import { Formik, FormikHelpers, FormikValues } from 'formik'
import { IFormProps } from './interface'
import { StyledForm } from './AuthForm.styles'
import { Input } from '../../Atoms/Input/Input'

const fakeInitialValues = { name: 'Dima' }

export const AuthForm = memo(({ children }: IFormProps) => {
    const handleOnSubmit = useCallback((values: FormikValues, actions: FormikHelpers<FormikValues>) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }, 1000);
    }, [])

    return <StyledForm>
        <Formik
            initialValues={fakeInitialValues}
            onSubmit={handleOnSubmit}
        >
            {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        width={481}
                        height={56}
                        value={values.name}
                        name="name"
                    />
                    {errors.name && <div>{errors.name}</div>}
                </form>
            )}
        </Formik>
    </StyledForm>
})
