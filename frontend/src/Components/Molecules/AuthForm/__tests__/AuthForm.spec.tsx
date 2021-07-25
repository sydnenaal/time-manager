import { render } from '@testing-library/react'

import { AuthForm } from '../AuthForm'

describe('<AuthForm />', () => {
    it('should renders correctly', () => {
        const tree = render(
            <AuthForm />
        )
        expect(tree).toMatchSnapshot()
    })
})
