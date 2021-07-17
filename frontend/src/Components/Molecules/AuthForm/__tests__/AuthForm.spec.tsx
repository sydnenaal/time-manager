import { render } from '@testing-library/react'

import { Button } from '../../../Atoms/Button/Button'

import { AuthForm } from '../AuthForm'

describe('<AuthForm />', () => {
    it('should renders correctly', () => {
        const tree = render(
            <AuthForm children={<Button children="simple button" onClick={() => null} />} />
        )
        expect(tree).toMatchSnapshot()
    })
})
