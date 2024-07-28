import { render } from '@redwoodjs/testing/web'

import Camera from './Camera'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Camera', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Camera />)
    }).not.toThrow()
  })
})
