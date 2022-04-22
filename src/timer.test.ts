import { timer } from "./timer";

describe('timer', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  beforeEach(() => {
    jest.useFakeTimers()
  })

  test('timer', () => {
    const cb = jest.fn()
    timer(100, cb)

    jest.advanceTimersByTime(100)
    expect(cb).toHaveBeenCalledTimes(1)

    // real timer
    // setTimeout(() => {
    //   expect(cb).toHaveBeenCalledTimes(1)
    // }, 1000)
  })
})
