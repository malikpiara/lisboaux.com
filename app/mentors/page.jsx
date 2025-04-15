'use client';
import Link from 'next/link';
import { inter } from '../fonts';
import Image from 'next/image';
import { TeamMemberCard } from '@/components/team-member-card';
import { Badge } from '@/components/ui/badge';
import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#1C42BB' },
          dark: { 'cal-brand': '#fafafa' },
        },
        layout: 'week_view',
        hideEventTypeDetails: false,
      });
    })();
  }, []);
  return (
    <div className={`flex min-h-screen flex-col ${inter.className}`}>
      <header className='text-lg'>
        <div className='mx-auto flex h-14 max-w-[1024px] items-center justify-between px-4'>
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
              href='/mentors'
              className='hover:text-primary hover:opacity-30 transition-all'
            >
              Mentorship <Badge className={'bg-blue-700'}>New</Badge>
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

      <main className='flex-1 text-lg animate-in'>
        <section className='mx-auto  py-10 px-4'>
          <section className='bg-white dark:bg-gray-900'>
            <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
              <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
                <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
                  From speakers to mentors
                </h2>

                <h3 className='text-muted-foreground text-xl'>
                  Our mentors are past speakers who dedicate at least 1 hour
                  each month to help you grow — through 1-1 career advice,
                  portfolio feedback, and sharing practical tools and resources
                  for designers.
                </h3>
              </div>
              <div className='grid gap-8 mb-6 lg:mb-16 md:grid-cols-3'>
                <TeamMemberCard
                  name='Isabel Novais Machado'
                  image='isabel.png'
                  role='Head of Design at Usercentrics'
                  bio={
                    'With over 15 years of experience spanning telecommunications, data, and finance, Isabel has been instrumental in positioning Design as a strategic partner for business and tech. As a design leader, she’s passionate about collaboration and believes that truly impactful solutions come from understanding people’s needs.'
                  }
                  socialLinks={{
                    linkedin: 'https://www.linkedin.com/in/isabelnovais/',
                  }}
                  //calLink={'malikpiara/1-hour-meeting'}
                />
                <TeamMemberCard
                  name='Sónia Gomes'
                  image='sonia.png'
                  role='Principal Product Designer at Uphold'
                  bio={
                    'Sonia led 20+ successful projects for brands like OutSystems, Net-a-Porter, Namecheap, Prozis and Blip/Betfair, creating seamless B2B, SaaS, and B2C experiences. VP at UXPA Portugal and mentor, helping designers grow while sharing insights through talks and writing. Passionate about making design inclusive, impactful, and always a little fun!'
                  }
                  socialLinks={{
                    linkedin: 'https://www.linkedin.com/in/sonia-gomes/',
                  }}
                  calLink={'malikpiara/lisboaux-mentoring-with-sonia'}
                />
                <TeamMemberCard
                  name='Paulo Fonseca'
                  image='paulo.png'
                  role='Co-founder at proposals.app'
                  bio={
                    'UX Designer and User Researcher for 15 years now. Worked in multiple industries all over the world, from healthcare to fintech, and supporting both established corporations and scrappy startups. Founded a few startups as well and advised a handful of others, and now he is building proposals.app, an open-source governance tool for DAO people, focused especially on Ethereum.'
                  }
                  socialLinks={{
                    linkedin: 'https://www.linkedin.com/in/paulofonseca1987/',
                  }}
                  calLink={'malikpiara/lisboaux-mentoring-with-paulo'}
                />
              </div>
            </div>
          </section>
        </section>
      </main>

      <footer className=''>
        <div className='mx-auto flex max-w-[1024px] items-center justify-between px-4 py-4'>
          <p className='text-muted-foreground'>
            © {new Date().getFullYear()} LisboaUX
          </p>
        </div>
      </footer>
    </div>
  );
}
