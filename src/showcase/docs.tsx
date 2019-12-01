import React, { ComponentProps, ComponentType, ReactNode } from 'react'
import { ShowcaseComponent } from './showcase'

type ComponentDocsProps<
  TComponent extends ComponentType<any>,
  TProps = Omit<Required<ComponentProps<TComponent>>, 'children'> & {
    children?: ReactNode
  }
> = {
  [TProp in keyof TProps]: {
    description: string
    value: TProps[TProp]
  }
}

type ComponentDocs<TComponent extends ComponentType<any>> = {
  component: TComponent
  props: ComponentDocsProps<TComponent>
  render?(element: JSX.Element): JSX.Element
}

const createComponentDocs = <TComponent extends ComponentType<any>>(
  docs: ComponentDocs<TComponent>,
): ShowcaseComponent => {
  const props = Object.entries(docs.props).reduce<ComponentProps<TComponent>>(
    (acc, [name, { value }]) => {
      acc[name] = value
      return acc
    },
    {} as any,
  )

  const defaultElement = <docs.component {...props} />

  return {
    name: docs.component.displayName || '???',
    props: Object.entries(docs.props).map(([name, { description, value }]) => ({
      name,
      value,
      description,
      type: typeof value,
    })),
    element: docs.render ? docs.render(defaultElement) : defaultElement,
  }
}

export { createComponentDocs }
