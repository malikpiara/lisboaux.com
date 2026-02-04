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
            Welcome to LisboaUX
          </h1>
        </div>

        <section className='text-lg space-y-4'>
          <div className='mt-0 '>
            <div className='max-w-3xl mx-0'>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                We are a community of designers based in Lisboa. Every month, we host talks & intimate dinners to nurture growth and belonging. Come listen to our stories and hone your craft together with us.
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
    <ul className='text-lg font-medium md:absolute right-5 bottom-5 lg:top-5 text-right border md:border-none rounded-lg p-4 shadow md:shadow-none md:bg-background bg-card fixed opacity-90 backdrop-blur-md'>
      <li>
        <Link
          className='flex flex-row justify-end items-start gap-2'
          href={'https://jobs.lisboaux.com'}
        >
          <div>Design Jobs</div>
          <div className='m-0'>
            <Badge className={'bg-[#0237CF] text-muted md:hidden'}>New</Badge>
            <Badge
              className={'bg-[#0237CF] text-muted hidden md:inline-flex'}
            ></Badge>
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
