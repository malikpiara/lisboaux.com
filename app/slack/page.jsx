import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function SlackPage() {
  return (
    <main className='min-h-screen bg-background'>
      <div className='max-w-3xl mx-auto px-4 py-8 items-center'>
        {/* Welcome Section */}
        <div className='mb-8'>
          <h1 className='text-2xl font-semibold'>
            Our Slack Community is currently closed.
          </h1>
        </div>

        <section className='text-lg space-y-4'>
          <div className='mt-0 '>
            <div className='max-w-3xl mx-0'>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                We believe a feeling of community can only be achieved when
                there is intimacy and when people feel safe to express
                themselves with a high amplitude of freedom. This has been our
                promise since the beginning. That feeling is at the core of
                everything we do at LisboaUX.
              </p>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                Since we launched our job board for designers a couple of weeks
                ago, many people flocked to LisboaUX. We're so grateful for the
                energy and we want to keep serving you in the way you deserve.
                So, we decided to close our intake of new members indefinitely,
                while we work on improving our curation process. This way,
                LisboaUX will remain a design community where you can share more
                of you and where you can ask for help with confidence others
                will be gentle, caring and have your best interest at heart.
              </p>

              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                Our job board, monthly co-working days for designers and offline
                talks remain open to anyone who would like to join.
              </p>
            </div>
          </div>
        </section>
        <NewNavigation />
      </div>
    </main>
  );
}

export function NewNavigation() {
  return (
    <ul className='text-lg font-medium md:absolute right-5 bottom-5 lg:top-5 text-right border md:border-none rounded-lg p-4 shadow md:shadow-none md:bg-background bg-card sticky opacity-90'>
      <li className=''>
        <Link
          className='flex flex-row justify-end items-start gap-2'
          href={'https://jobs.lisboaux.com'}
        >
          <div>Design Jobs</div>
          <div className='m-0'>
            <Badge className={'bg-[#0237CF]'} />
          </div>
        </Link>
      </li>
      <li>
        <Link href={'https://www.youtube.com/@LisboaUX'}>YouTube Channel</Link>
      </li>
      <li>
        <Link href={'/slack'}>Slack Community</Link>
      </li>
      <li>
        <Link href={'https://lu.ma/lisboaux'}>Offline Events</Link>
      </li>
    </ul>
  );
}
