export const timer = (ms: number, cb: () => void) => {
  setTimeout(() => {
    cb()
  }, ms)
}
