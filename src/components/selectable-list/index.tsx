import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

type SelectableListItem = {
  id: string
  title: string
  selected?: boolean
  accessories?: ReactNode[]
  onClick?(): void
}

type SelectableListProps = {
  items: SelectableListItem[]
}

const StyledContainer = styled.ul`
  display: grid;
  grid-gap: 16px;
  height: 100%;
  list-style: none;
  padding: 0;
  width: 100%;
`

const StyledItem = styled.li`
  position: relative;
  height: 40px;
`

const StyledButton = styled.button<{ styledSelected?: boolean }>`
  background-color: transparent;
  border: none;
  border-radius: 2px;
  box-shadow: ${({ styledSelected, theme }) =>
    styledSelected
      ? `0 0 0 2px ${theme.accentColor}`
      : '0 0 0 1px rgba(255, 255, 255, 0.1)'};
  color: inherit;
  cursor: pointer;
  font-size: 20px;
  outline: none;
  padding: 8px;
  text-align: left;
  width: 100%;
  height: 100%;

  &:hover {
    box-shadow: ${({ styledSelected, theme }) =>
      styledSelected
        ? `0 0 0 2px ${theme.accentColor}`
        : '0 0 0 2px rgba(255, 255, 255, 0.2)'};
  }
`

const StyledAccessoriesContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 4px;
  position: absolute;
  top: 6px;
  right: 6px;
  height: 28px;
`

const StyledAccessoryContainer = styled.div`
  height: 100%;
`

const SelectableList: FC<SelectableListProps> = ({ items }) => {
  return (
    <StyledContainer>
      {items.map(({ id, title, selected, onClick, accessories = [] }) => (
        <StyledItem key={id}>
          <StyledButton
            styledSelected={selected}
            type="button"
            onClick={() => {
              if (onClick) {
                onClick()
              }
            }}
          >
            {title}
          </StyledButton>
          <StyledAccessoriesContainer>
            {accessories.map((accessory, index) => (
              <StyledAccessoryContainer key={index}>
                {accessory}
              </StyledAccessoryContainer>
            ))}
          </StyledAccessoriesContainer>
        </StyledItem>
      ))}
    </StyledContainer>
  )
}

SelectableList.displayName = 'SelectableList'

export default SelectableList
