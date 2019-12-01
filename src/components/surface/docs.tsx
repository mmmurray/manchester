import React, { FC } from 'react'
import styled from 'styled-components'
import Surface from '.'
import { createComponentDocs } from '../../showcase/docs'

const Content = styled.div`
  font-size: 20px;
  padding: 20px;
`

const Example: FC = () => (
  <Surface>
    <Content>
      <Surface>
        <Content>
          <Surface>
            <Content>
              <p>Example text on surface</p>
            </Content>
          </Surface>
        </Content>
      </Surface>
    </Content>
  </Surface>
)

export default createComponentDocs({
  component: Surface,
  render: () => <Example />,
  props: {
    children: {
      description: 'Content',
      value: '',
    },
  },
})
