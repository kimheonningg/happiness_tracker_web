import { render } from '@redwoodjs/testing/web'

import CreateAccountPage from './CreateAccountPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CreateAccountPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateAccountPage />)
    }).not.toThrow()
  })
})
