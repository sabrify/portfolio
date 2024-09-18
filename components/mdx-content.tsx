import { JSX } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import HeadingWithId from './headingwithid'
import React, { ReactNode } from 'react'

// Define the Code component for syntax highlighting
function Code({
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  children?: ReactNode
}) {
  const codeHTML = typeof children === 'string' ? highlight(children) : ''
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

// Define the custom components with proper typing for MDX
interface MDXComponents {
  code: React.ComponentType<React.HTMLAttributes<HTMLElement>>
  HeadingWithId: React.ComponentType<React.HTMLAttributes<HTMLHeadingElement>>
}

// Custom components for MDX rendering
const components: MDXComponents = {
  code: Code,
  HeadingWithId // Handles all heading elements
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
