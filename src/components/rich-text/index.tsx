import React, { FC } from 'react'
import styled from 'styled-components'

type RichTextProps = {}

const StyledContainer = styled.div`
  color: inherit;
  height: 100%;
  width: 100%;

  p {
    font-size: 20px;
    line-height: 1.5;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  h1 {
    font-size: 48px;
    font-weight: bold;
    line-height: 1;
    margin-top: 24px;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 32px;
    font-weight: bold;
    line-height: 1;
    margin-top: 24px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 28px;
    line-height: 1;
    margin-top: 24px;
    margin-bottom: 16px;
  }

  h4 {
    font-size: 24px;
    line-height: 1;
    margin-top: 24px;
    margin-bottom: 16px;
  }

  h5 {
    font-size: 20px;
    line-height: 1;
    margin-top: 24px;
    margin-bottom: 16px;
  }

  h6 {
    font-size: 16px;
    line-height: 1;
    margin-top: 24px;
    margin-bottom: 16px;
  }

  .inline-code * {
    background-color: black;
    border-radius: 4px;
    color: ${({ theme }) => theme.accentColor};
    font-family: monospace;
    padding: 0 4px;
  }
`

const RichText: FC<RichTextProps> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)

RichText.displayName = 'RichText'

export default RichText
