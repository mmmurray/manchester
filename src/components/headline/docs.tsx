import Headline from '.'
import { createComponentDocs } from '../../showcase/docs'

export default createComponentDocs({
  component: Headline,
  props: {
    children: {
      description: 'Text content',
      value: 'Manchester',
    },
  },
})
