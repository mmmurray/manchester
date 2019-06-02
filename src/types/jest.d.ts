declare namespace jest {
  interface Matchers<R> {
    toMatchA11ySnapshot(): R
    toMatchDomSnapshot(): R
    toMatchImageSnapshot(): R
  }
}
