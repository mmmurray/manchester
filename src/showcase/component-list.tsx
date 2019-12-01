import React, { FC } from 'react'
import styled from 'styled-components'

type ComponentListProps = {
  components: {
    name: string
    link: string
    selected: boolean
  }[]
  onSelect(component: string): void
}

const StyledList = styled.ul`
  list-style: none;
`

const StyledListItem = styled.li`
  margin-bottom: 8px;
`

const StyledLink = styled.a<{ selected: boolean }>`
  color: #222222;
  font-size: 18px;
  text-decoration: none;
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')}

  :hover {
    color: black;
  }
`

const ComponentList: FC<ComponentListProps> = ({ components, onSelect }) => (
  <StyledList>
    {components.map(({ name, link, selected }, index) => (
      <StyledListItem key={index}>
        <StyledLink
          href={link}
          selected={selected}
          onClick={() => onSelect(name)}
        >
          {name}
        </StyledLink>
      </StyledListItem>
    ))}
  </StyledList>
)

export { ComponentList }
