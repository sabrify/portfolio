'use client'
import Link from 'next/link'
import ThemeToggle from './theme-toggle'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from './ui/drawer'
import { MenuIcon } from 'lucide-react'

export default function MainMenu() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  return isDesktop ? (
    <div className='Desktop-nav'>
      <nav className='container flex max-w-5xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-5xl font-bold'>
            HS
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-base font-medium text-muted-foreground sm:gap-10'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  ) : (
    <div className='mobile-nav'>
      <Drawer direction='left'>
        <nav className='container flex max-w-5xl items-center justify-between'>
          <DrawerTrigger>
            <div>
              <MenuIcon /> {/* This should be on the far left */}
            </div>
          </DrawerTrigger>
          <div>
            <Link href='/' className='font-serif text-2xl font-bold'>
              HS
            </Link>
          </div>
          <div>
            <ThemeToggle /> {/* This should be on the far right */}
          </div>
        </nav>

        {/* Drawer content for mobile links */}
        <DrawerContent>
          <ul className='flex flex-col items-start gap-6 px-20 py-8 text-base font-medium text-muted-foreground sm:gap-10'>
            <li className='transition-colors hover:text-foreground'>
              <DrawerClose asChild>
                <Link href='/posts'>Posts</Link>
              </DrawerClose>
            </li>
            <li className='transition-colors hover:text-foreground'>
              <DrawerClose asChild>
                <Link href='/projects'>Projects</Link>
              </DrawerClose>
            </li>
            <li className='transition-colors hover:text-foreground'>
              <DrawerClose asChild>
                <Link href='/contact'>Contact</Link>
              </DrawerClose>
            </li>
          </ul>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
