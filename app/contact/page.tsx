import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-5xl'>
        <h2 className='title text-4xl font-bold tracking-tight'>Let&apos;s talk about your project</h2>
        <p className='mt-2 text-lg leading-8 text-zinc-400 dark:text-zinc-500'>We help companies and individuals build out their digital presence. </p>

        <ContactForm />
      </div>
    </section>
  )
}