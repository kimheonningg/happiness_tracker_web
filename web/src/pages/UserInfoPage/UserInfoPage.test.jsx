import { render } from '@redwoodjs/testing/web'

import UserInfoPage from './UserInfoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserInfoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserInfoPage />)
    }).not.toThrow()
  })
})
