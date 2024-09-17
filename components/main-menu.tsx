'use client';
import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { MenuIcon } from 'lucide-react';

export default function MainMenu(){
    const isDesktop = useMediaQuery("(min-width: 768px)");
    return isDesktop ? 
        <div className="Desktop">
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
     : <div>
        <Drawer direction="right">
    <DrawerTrigger>
    <MenuIcon />
    </DrawerTrigger>
    <DrawerContent>
        crawer content 
    </DrawerContent>
        </Drawer>
     </div>
}