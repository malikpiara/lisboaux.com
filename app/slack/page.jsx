import { NewNavigation } from '../page';

export default function SlackPage() {
  return (
    <main className='min-h-screen bg-background'>
      <div className='max-w-3xl mx-auto px-4 py-8 items-center'>
        {/* Welcome Section */}
        <div className='mb-8'>
          <h1 className='text-2xl font-semibold'>
            Our Slack Community is currently closed to new members.
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
