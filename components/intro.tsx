import Image from 'next/image'
import authorImage from '@/public/images/authors/hamid.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I'm Hamid.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
        I'm a web developer based in Kenitra, Morocco. with a focus
         on eCommerce solutions and Shopify development.  I love exploring new technologies and sharing
         what I learn through hands-on projects and coding challenges.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Hamed Bahram'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}