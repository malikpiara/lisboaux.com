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
          dark: { 'cal-brand': '#1C42BB' },
        },
        layout: 'month_view',
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
                  highlighted={true}
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
                  highlighted={true}
                />
                <TeamMemberCard
                  name='Hugo Alves'
                  image='hugo.png'
                  role='Co-founder & CPO at Synthetic Users'
                  bio={
                    'With over 15 years of experience in psychology, web development, and product management, I am passionate about creating human-like digital personas that can interact with real users and generate valuable insights. I lead a team of engineers, designers, and researchers to build and scale a platform that leverages artificial intelligence, natural language processing, and behavioral science to create realistic and engaging synthetic users. I have skills in user experience, digital marketing, and web development. I am driven by curiosity, innovation, and impact.'
                  }
                  socialLinks={{
                    linkedin: 'https://www.linkedin.com/in/hugomanuelalves/',
                  }}
                  calLink={'hugo-lisboaux'}
                  highlighted={true}
                />
                <TeamMemberCard
                  name='Ivo Gomes'
                  image='ivo.png'
                  role='Director of Product Design at Dashlane'
                  bio={
                    "I’m passionate about minimalist and functional design. I'm currently leading an awesome design team at Dashlane, focusing on making the Internet a safer place by protecting companies and individuals sensitive data (credentials and secrets) from breaches and phishing attempts. As a fan of Design Systems, I helped build Cobalt (Talkdesk's Design System) from the ground up, and lead the team at Dashlane in consolidating our Design System from the early start to a complete multi-platform system."
                  }
                  socialLinks={{
                    linkedin: 'https://www.linkedin.com/in/ivogomes/',
                  }}
                  calLink={''}
                />
                <TeamMemberCard
                  name='Mariana Pena Monteiro'
                  image='mariana.png'
                  role='Senior Innovation & Service Design consultant'
                  bio={
                    "I’m a Service Design & User Experience Specialist with 9 years experience in human-centred design. I help organisations better understand their customers/staff's needs and delivering human-centred design solutions. I facilitate collaboration across all stages of the innovation process, from initial customer research and co-design workshops through to developing live services and products. I work best in an agile environment, where iterative improvements and open communication help guide the team towards a shared goal."
                  }
                  socialLinks={{
                    linkedin:
                      'https://www.linkedin.com/in/marianapenamonteiro/',
                  }}
                  calLink={'mariana-lisboaux'}
                  highlighted
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
