import { JSX } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

// Define the Code component with proper typing
function Code({
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { children: string }) {
  const codeHTML = highlight(children)

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

// Custom components for MDX rendering
const components: Record<string, any> = {
  code: Code
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
