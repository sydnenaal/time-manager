import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from './Button'

test('<Button />', async () => {
    render(<Button children="test" />)

    const button = screen.getByRole('button')
    
    fireEvent.click(button)

    expect(screen.getByText('test')).toBeInTheDocument()
})
