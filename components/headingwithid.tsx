import React from 'react'

interface HeadingWithIdProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' // Specify allowed heading types
}

export default function HeadingWithId({
  children,
  id,
  as: Tag = 'h2', // Default to h2 if not specified
  ...rest // Pass remaining props
}: HeadingWithIdProps): JSX.Element {
  return (
    <Tag id={id} {...rest}>
      {children}
    </Tag>
  )
}
