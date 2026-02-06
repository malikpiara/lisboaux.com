'use client';
import { inter } from '../fonts';
import { TeamMemberCard } from '@/components/team-member-card';
import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';
import { Header } from '@/components/navbar';
import { listOfMentors } from './listOfMentors';

export default function Home() {
  // Sorting mentors based on who is available.
  const sortedMentors = [...listOfMentors].sort((a, b) => {
    if (a.highlighted && !b.highlighted) return -1;
    if (!a.highlighted && b.highlighted) return 1;
    return 0;
  });

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
      <Header />
      <main className='flex-1 text-lg animate-in'>
        <section className='mx-auto py-4 px-4'>
          <section className='bg-background dark:bg-gray-900'>
            <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
              <div className='mx-auto max-w-screen-sm text-center mb-10 lg:mb-24'>
                <h2 className='mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-[#0237CF] dark:text-white'>
                  Grab a coffee, get advice
                </h2>

                <h3 className='text-muted-foreground text-xl max-w-xl mx-auto'>
                  Our mentors dedicate one hour every month to help you grow —
                  through 1-1 career advice, portfolio feedback, and practical
                  resources for designers.
                </h3>
              </div>
              <div className='grid gap-10 mb-6 md:grid-cols-3'>
                {sortedMentors.map((mentor) => (
                  <TeamMemberCard
                    key={mentor.name}
                    {...mentor} // Passing all properties with spread operator
                  />
                ))}
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
