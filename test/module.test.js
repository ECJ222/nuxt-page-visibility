// module tests
import Visibility from '../lib/visibility'

describe('Module test', () => {
  const { isSupported } = Visibility()

  test('Should be equal to true', () => {
    expect(isSupported).toBe(true)
  })
})
