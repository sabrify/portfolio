'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Alice Johnson',
    role: 'CEO, TechCorp',
    image: '/placeholder.svg?height=100&width=100',
    quote:
      "This product has revolutionized our workflow. It's intuitive, powerful, and a joy to use every day."
  },
  {
    name: 'Bob Smith',
    role: 'Marketing Director, InnovateCo',
    image: '/placeholder.svg?height=100&width=100',
    quote:
      "I've never seen such a responsive and helpful support team. They go above and beyond to ensure customer satisfaction."
  },
  {
    name: 'Carol Williams',
    role: 'Freelance Designer',
    image: '/placeholder.svg?height=100&width=100',
    quote:
      "As a designer, I appreciate the attention to detail in this product. It's both beautiful and functional."
  }
]

const TestimonialsCarousel: React.FC = () => {
  return (
    <Carousel className='m-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <Card className='border-none shadow-none'>
              <CardContent className='flex flex-col items-center p-6 text-center'>
                <Quote className='mb-4 h-8 w-8 text-primary' />
                <p className='mb-4 text-lg'>{testimonial.quote}</p>
                <Avatar className='mb-2 h-16 w-16'>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(' ')
                      .map(n => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className='font-semibold'>{testimonial.name}</h3>
                <p className='text-sm text-muted-foreground'>
                  {testimonial.role}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default TestimonialsCarousel
