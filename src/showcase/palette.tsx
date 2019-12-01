import React, { FC } from 'react'
import styled from 'styled-components'
import { palette } from '../palette'
import { createComponentDocs } from './docs'

const StyledContainer = styled.div`
  padding: 16px 0;
  display: grid;
  grid-column-gap: 8px;
  grid-row-gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 120px));
  justify-content: center;
`

const Swatch = styled.div<{ color: string }>`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
`

const ItemContainer = styled.div`
  justify-items: center;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 16px;
  text-align: center;
`

const Palette: FC = () => (
  <StyledContainer>
    {Object.entries(palette).map(([name, color]) => (
      <ItemContainer key={name}>
        <Swatch color={color} />
        {name}
      </ItemContainer>
    ))}
  </StyledContainer>
)

Palette.displayName = 'Palette'

const paletteDocs = createComponentDocs({
  component: Palette,
  render: () => <Palette />,
  props: {
    children: { description: '', value: '' },
  },
})

export { paletteDocs }
