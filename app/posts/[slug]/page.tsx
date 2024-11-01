import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { getPosts, getPostBySlug } from '@/lib/posts'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, mobileImage, author, publishedAt } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-5xl'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        {image && mobileImage && (
          <div
            className='relative mb-6 w-full overflow-hidden rounded-lg'
            style={{ minHeight: '384px' }}
          >
            <div className='desktop-image'>
            <Image
              src={image}
              alt={title || ''}
              className='object-conain'
             fill
            />
            </div>
            <div className='mobile-image'>
            <Image
              src={mobileImage}
              alt={title || ''}
              className='object-contain'
             fill
            />
            </div>
           
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 max-w-5xl dark:prose-invert'>
          <MDXContent source={content} />
        </main>

        <footer className='mt-16'></footer>
      </div>
    </section>
  )
}
