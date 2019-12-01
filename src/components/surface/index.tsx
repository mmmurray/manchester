import React, { createContext, FC, useContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useTheme } from '../../theme'

const StyledSurface = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.foregroundColor};
  height: 100%;
  width: 100%;
`

const SurfaceContext = createContext<number>(0)

const Surface: FC = ({ children }) => {
  const surfaceLevel = useContext(SurfaceContext)
  const theme = useTheme()

  return (
    <ThemeProvider
      theme={{
        ...theme,
        ...(surfaceLevel === 0
          ? {}
          : theme.layers[(surfaceLevel - 1) % theme.layers.length]),
      }}
    >
      <StyledSurface>
        <SurfaceContext.Provider value={surfaceLevel + 1}>
          {children}
        </SurfaceContext.Provider>
      </StyledSurface>
    </ThemeProvider>
  )
}

Surface.displayName = 'Surface'

export default Surface
