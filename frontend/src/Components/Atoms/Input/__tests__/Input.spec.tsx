import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Input } from '../Input'

describe('<Input />', () => {
    test('render email input', () => {
        render(<Input value={'test'} onChange={(value: string) => null} type={'email'} />)

        const inputEl = screen.getByDisplayValue('test')
        expect(inputEl).toBeInTheDocument()
        expect(inputEl).toHaveAttribute('type', 'email')
    })

    test('pass valid email to test email input field', () => {
        render(<Input value={'test@mail.com'} onChange={(value: string) => null} type={'email'} />)

        const inputEl = screen.getByDisplayValue('test@mail.com')
        userEvent.type(inputEl, 'test@mail.com')

        expect(screen.getByDisplayValue('test@mail.com')).toHaveValue('test@mail.com')
        expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument()
    })
})
