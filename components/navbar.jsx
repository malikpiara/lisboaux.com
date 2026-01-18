import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';

export function Header() {
  return (
    <header className='text-lg'>
      <div className='mx-auto flex h-14 text-blue-800 font-medium items-center justify-between px-4'>
        <div className='font- font-extrabold'>
          <Link href='/'>
            <Image
              alt='LisboaUX logotype'
              src={'logo.svg'}
              width={100}
              height={100}
            />
          </Link>
        </div>
        <nav className='flex gap-5 text-base'>
          <Link
            href='https://lu.ma/lisboaux'
            className='hover:text-primary hover:opacity-30 transition-all'
          >
            Events
          </Link>
          <Link
            href='https://jobs.lisboaux.com/'
            className='hover:text-primary hover:opacity-30 transition-all'
          >
            Jobs <Badge className={'bg-blue-700'}>New</Badge>
          </Link>
          <Link
            href='/mentors'
            className='hover:text-primary hover:opacity-30 transition-all'
          >
            Mentorship
          </Link>
          <Link
            href='https://lisboaux.com/slack'
            className='hover:text-primary hover:opacity-30 transition-all'
          >
            Community
          </Link>
          <Link
            href='https://www.linkedin.com/company/lisboaux/'
            className='hover:text-primary hover:opacity-30 transition-all'
          >
            LinkedIn
          </Link>
          <Link
            href='https://www.youtube.com/@LisboaUX'
            className='hover:text-primary hover:opacity-30 transition-all'
          >
            Youtube
          </Link>
        </nav>
      </div>
    </header>
  );
}
