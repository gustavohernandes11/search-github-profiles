import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import userEvent from '@testing-library/user-event';
import App from './App.js'




describe('testing the main component', () => {

    const handlers = [
        rest.get('https://api.github.com/users/*', (req, res, ctx) => {
            return res(ctx.json([
                {
                    "login": "facebook",
                    "avatar_url": "https://avatars.githubusercontent.com/u/69631?v=4",
                    "url": "https://api.github.com/users/facebook",
                    "html_url": "https://github.com/facebook",
                    "repos_url": "https://api.github.com/users/facebook/repos",
                    "location": "Menlo Park, California",
                    "email": null,
                    "hireable": null,
                    "message": null,
                    "bio": "We are working to build community through open source technology. NB: members must have two-factor auth.",
                  }
            ]))
        })
    ]
    const server = setupServer(...handlers)
    
    beforeAll(() => server.listen())
    beforeEach(() => { server.resetHandlers() })
    afterAll(() => server.close())

    it('should active the search on button click event', async () => {
        render(<App />)
        await userEvent.setup()
        const input = screen.getByLabelText(/forminput/i)
        const button = screen.getByLabelText(/formbutton/i)
        userEvent.type(input, 'facebook')
        userEvent.click(button)

        const headerresult = screen.getByLabelText(/resultheader/i)
        // expect(headerresult).toBeInTheDocument()
        
    })
})
