import React, { FC } from 'react'
import styled from 'styled-components'

type HeadlineProps = {}

const StyledHeadline = styled.h1`
  color: inherit;
  font-size: 100px;
  font-weight: 900;
  letter-spacing: 0.05em;
  line-height: 1.4;
  margin: 0;
`

const Headline: FC<HeadlineProps> = ({ children }) => (
  <StyledHeadline>{children}</StyledHeadline>
)

Headline.displayName = 'Headline'

export default Headline
