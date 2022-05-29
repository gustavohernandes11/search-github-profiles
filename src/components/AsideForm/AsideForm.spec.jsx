import { render, screen } from '@testing-library/react'
import AsideForm from './index.jsx'

describe('testing asideform component', () => {
    it('should render the form input and button', () => {
        render(<AsideForm />)

        const button = screen.getByLabelText(/formbutton/i)
        const input = screen.getByLabelText(/forminput/i)
        
        expect(button).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    })  
    
})