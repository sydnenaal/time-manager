import { render } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom'
import { Button } from '../../../Atoms/Button/Button'
import { AuthForm } from '../AuthForm'

describe('<AuthForm />', () => {
    let container: HTMLDivElement | null = null

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterEach(() => {
        if (container) {
            unmountComponentAtNode(container)
            container.remove()
        }
        container = null
    })

    it('should renders correctly', () => {
        const tree = render(
            <AuthForm children={<Button children="simple button" onClick={() => null} />} />
        )
        expect(tree).toMatchSnapshot()
    })
})
