import { JSX } from 'react';
import { highlight } from 'sugar-high';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import React, { ReactNode } from 'react';

// Define the Code component
function Code({
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { children?: ReactNode }) {
  // Check if children is a string before passing it to highlight
  const codeHTML = typeof children === 'string' ? highlight(children) : '';

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

// Define the custom components with proper typing for MDX
interface MDXComponents {
  code: React.ComponentType<React.HTMLProps<HTMLElement>>;
}

// Custom components for MDX rendering
const components: MDXComponents = {
  code: Code,
};

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
