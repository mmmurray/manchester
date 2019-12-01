import React from 'react'
import RichText from '.'
import { createComponentDocs } from '../../showcase/docs'

export default createComponentDocs({
  component: RichText,
  props: {
    children: {
      description: 'Content',
      value: (
        <>
          <h1>Hello</h1>
          <h2>World</h2>
          <p>Lorem ipsum</p>
        </>
      ),
    },
  },
})
