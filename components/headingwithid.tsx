// components/HeadingWithId.tsx

import React from 'react'

interface HeadingWithIdProps {
  children: React.ReactNode
  id?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function HeadingWithId({
  children,
  id,
  as: Tag = 'h2' // Default to h2 if not specified
}: HeadingWithIdProps) {
  return <Tag id={id}>{children}</Tag>
}
