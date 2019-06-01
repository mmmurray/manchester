import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    color: ${({ theme }) => theme.colors.primaryForeground};
  }
`

export default Global
