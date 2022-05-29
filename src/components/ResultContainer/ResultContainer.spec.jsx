import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { render, screen } from '@testing-library/react'
import ResultContainer from './index.jsx'

const userData =  {
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

describe('testing asideform component', () => {
    beforeAll(() => server.listen())
    beforeEach(() => { server.resetHandlers() })
    afterAll(() => server.close())
    it('should render the headerresult component', () => {
        render(<ResultContainer userData={userData}/>)
        const headerresult = screen.getByLabelText(/resultheader/i)
        expect(headerresult).toBeInTheDocument()
        
    })

})