import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Surface } from '..'
import SplitPanel from '../components/split-panel'
import { ComponentList } from './component-list'

type Prop = {
  name: string
  description: string
  type: string
}

export type ShowcaseComponent = {
  name: string
  props: Prop[]
  element: JSX.Element
}

type ShowcaseProps = {
  title: string
  components: ShowcaseComponent[]
}

const StyledInnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 8px;
  width: 100%;
`

const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid black;

  th,
  td {
    border: 1px solid black;
    padding: 4px;
  }
`

const StyledSidebarContainer = styled.aside`
  padding: 16px;
`

const StyledTitle = styled.h1`
  font-size: 45px;
  font-weight: 900;
  margin-bottom: 20px;
`

const StyledComponentContainer = styled.div`
  display: grid;
  grid-row-gap: 10px;
  padding: 16px;
`

const StyledElementContainer = styled.div`
  padding: 20px;
  overflow-x: auto;
`

const StyledComponentHeadingLink = styled.a`
  text-decoration: none;
  color: inherit;
  padding-top: 32px;

  & > * {
    font-size: 36px;
  }

  :hover {
    text-decoration: underline;
  }
`

const createComponentLink = (name: string) => `#${name.replace(/ /g, '_')}`

const PropsTable: FC<{ props: Prop[] }> = ({ props }) => (
  <StyledTable>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {props.map(prop => (
        <tr key={prop.name}>
          <td>{prop.name}</td>
          <td>{prop.description}</td>
          <td>{prop.type}</td>
        </tr>
      ))}
    </tbody>
  </StyledTable>
)

const Feature: FC<{ name: string }> = ({ name, children }) => {
  if (!window.location.search.includes(`feature=${name}`)) {
    return null
  }

  return <>{children}</>
}

const Showcase: FC<ShowcaseProps> = ({ title, components }) => {
  const defaultLeftSize = 280
  const [leftSize, setLeftSize] = useState(defaultLeftSize)
  const [selected, setSelected] = useState(
    window.location.hash ? window.location.hash.substring(1) : null,
  )

  const leftPanel = (
    <StyledSidebarContainer>
      <StyledTitle>{title}</StyledTitle>
      <ComponentList
        onSelect={component => setSelected(component)}
        components={components.map(({ name }) => ({
          name,
          selected: selected === name,
          link: createComponentLink(name),
        }))}
      />
    </StyledSidebarContainer>
  )

  const rightPanel = (
    <Surface>
      <StyledInnerContainer>
        {components.map((component, index) => {
          return (
            <StyledComponentContainer key={index}>
              <StyledComponentHeadingLink
                id={createComponentLink(component.name).substring(1)}
                href={createComponentLink(component.name)}
              >
                <h2>{component.name}</h2>
              </StyledComponentHeadingLink>
              <Surface>
                <StyledElementContainer>
                  {component.element}
                </StyledElementContainer>
              </Surface>
              <Feature name="props">
                <h3>Props</h3>
                <PropsTable props={component.props} />
              </Feature>
            </StyledComponentContainer>
          )
        })}
      </StyledInnerContainer>
    </Surface>
  )

  return (
    <SplitPanel
      leftPanel={leftPanel}
      rightPanel={rightPanel}
      minLeftSize={defaultLeftSize}
      leftSize={leftSize}
      defaultLeftSize={defaultLeftSize}
      onSizeChange={setLeftSize}
    />
  )
}

export default Showcase
