import { memo, useCallback } from 'react'
import { Formik, FormikHelpers, FormikValues } from 'formik'
import { Button, Input } from 'Components'
import { StyledForm } from './AuthForm.styles'
import { signInSchema } from './utils'

const fakeInitialValues = { email: 'dima@mail.ru', password: 'password' }

export const AuthForm = memo(() => {
    const handleOnSubmit = useCallback((values: FormikValues, actions: FormikHelpers<FormikValues>) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }, 1000);
    }, [])

    return (
<StyledForm>
        <Formik
          initialValues={fakeInitialValues}
          validationSchema={signInSchema}
          onSubmit={handleOnSubmit}
        >
            {({
 handleSubmit, handleChange, handleBlur, values, errors,
}) => (
                <form onSubmit={handleSubmit}>
                    <Input
                      type="text"
                      placeholder="Email Address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      width={481}
                      height={56}
                      value={values.email}
                      name="email"
                    />
                    {errors.email && <div style={{ color: 'red', marginBottom: '15px' }}>{errors.email}</div>}
                    <Input
                      type="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      width={481}
                      height={56}
                      value={values.password}
                      name="password"
                    />
                    {errors.password && <div style={{ color: 'red', marginBottom: '15px' }}>{errors.password}</div>}
                    <Button width={90} height={40}>Войти</Button>
                </form>
            )}
        </Formik>
</StyledForm>
)
})
