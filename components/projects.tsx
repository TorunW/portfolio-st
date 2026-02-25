import Image from 'next/image';

export default function projects() {
  return (
    <div className='flex flex-col justify-center max-w-7xl px-4 md:px-6 lg:px-8'>
      <h2 className='text-4xl font-bold text-center mt-12 md:mt-16 lg:mt-20 mb-4 md:mb-6'>
        Projects
      </h2>
      <div className='flex flex-col gap-12 md:gap-16 lg:gap-20'>
        <div className='pb-12 md:pb-20 lg:pb-24'>
          <div className='flex flex-col md:flex-row md:-space-x-16 lg:-space-x-20 justify-center'>
            <div className='order-1 md:order-none relative w-full h-64 md:basis-2/5 md:h-auto'>
              <Image
                src={'/placeholder.png'}
                alt='image'
                layout='fill'
                objectFit='cover'
                className='object-cover rounded-xl'
              />
            </div>
            <div className='order-2 md:order-none bg-(--color-coffee-950) p-6 md:p-8 relative md:top-12 lg:top-16 md:basis-3/5 z-10'>
              <h3 className='text-3xl text-(--color-coffee-200) mt-8 md:mt-10 lg:mt-12 mb-3 md:mb-4'>
                TicTacToe – Testing Playground
              </h3>
              <p className='text-base mb-4 md:mb-5 lg:mb-6 leading-7 md:leading-8 lg:leading-9'>
                Built a TicTacToe web application using Next.js to demonstrate
                structured software testing practices in a controlled
                environment.
                <span className='block h-2 md:h-3 lg:h-4'></span>
                Defined functional requirements and created corresponding test
                cases and test plan using both white box and black box static
                testing techniques. Currently implementing end to end test
                automation using Playwright to validate core gameplay logic and
                user flows.
                <span className='block h-2 md:h-3 lg:h-4'></span>
                This project focuses on applying testing methodologies across
                the full development lifecycle, from requirement analysis to
                automated regression testing.
              </p>
            </div>
          </div>
        </div>

        <div className='pb-12 md:pb-20 lg:pb-24'>
          <div className='flex flex-col md:flex-row md:-space-x-16 lg:-space-x-20 justify-centers'>
            <div className=' order-2 md:order-none   bg-(--color-coffee-950) p-6 md:p-8 relative md:top-12 lg:top-16 md:basis-3/5 z-10'>
              <h3 className='text-3xl text-(--color-coffee-200) mt-8 md:mt-10 lg:mt-12 mb-3 md:mb-4'>
                Tempesta Bookmark Manager
              </h3>
              <p className='text-base mb-4 md:mb-5 lg:mb-6 leading-7 md:leading-8 lg:leading-9'>
                Contributed to an open source Rust based bookmark management
                project through GitHub pull requests.
                <span className='block h-2 md:h-3 lg:h-4'></span>
                Performed early happy path testing of core features such as
                bookmark creation and editing, and collaborated with developers
                to verify expected behaviour following application refactoring.
                After the refactoring of the codebase was initiated by another
                developer, took ownership of updating and refactoring the
                remaining automated tests to align with the new structure and
                ensure continued test reliability.
                <span className='block h-2 md:h-3 lg:h-4'></span>
                This experience involved working within an existing codebase and
                validating functionality during active development changes.
              </p>
            </div>
            <div className='order-1 md:order-none relative w-full h-64 md:basis-2/5 md:h-auto'>
              <Image
                src={'/placeholder.png'}
                alt='image'
                layout='fill'
                objectFit='cover'
                className='object-cover rounded-xl'
              />
            </div>
          </div>
        </div>

        <div className='pb-12 md:pb-20 lg:pb-24'>
          <div className='flex flex-col md:flex-row md:-space-x-16 lg:-space-x-20 justify-center'>
            <div className='order-1 md:order-none relative w-full h-64 md:basis-2/5 md:h-auto'>
              <Image
                src={'/placeholder.png'}
                alt='image'
                layout='fill'
                objectFit='cover'
                className='object-cover rounded-xl'
              />
            </div>
            <div className='order-2 md:order-none bg-(--color-coffee-950) p-6 md:p-8 relative md:top-12 lg:top-16 md:basis-3/5 z-10'>
              <h3 className='text-3xl text-(--color-coffee-200) mt-8 md:mt-10 lg:mt-12 mb-3 md:mb-4'>
                NGO Organisation Website
              </h3>
              <p className='text-base mb-4 md:mb-5 lg:mb-6 leading-7 md:leading-8 lg:leading-9'>
                Developed and migrated a full stack website from WordPress to a
                custom Next.js and MySQL solution based on stakeholder
                requirements gathered through planning meetings. Collaborated
                with a senior developer who primarily focused on backend
                architecture and acted as a technical mentor, while also
                contributing to backend implementation.
                <span className='block h-2 md:h-3 lg:h-4'></span>
                Implemented secure online donation functionality using Stripe,
                improved membership and newsletter sign up workflows, and
                introduced an administrative dashboard for managing content and
                user data. Performed workflow based testing of payment
                processes, authentication, and form validation following
                deployment.
                <span className='block h-2 md:h-3 lg:h-4'></span>
                Public repository not available due to client confidentiality
                and data protection requirements. Source code available upon
                request.
              </p>
            </div>
          </div>
        </div>

        <div className='pb-12 md:pb-20 lg:pb-24'>
          <div className='flex flex-col md:flex-row md:-space-x-16 lg:-space-x-20 justify-centers'>
            <div className=' order-2 md:order-none   bg-(--color-coffee-950) p-6 md:p-8 relative md:top-12 lg:top-16 md:basis-3/5 z-10'>
              <h3 className='text-3xl text-(--color-coffee-200) mt-8 md:mt-10 lg:mt-12 mb-3 md:mb-4'>
                Pixense Mobile Application
              </h3>
              <p className='text-base mb-4 md:mb-5 lg:mb-6 leading-7 md:leading-8 lg:leading-9'>
                Designed and developed an AI powered image generation mobile
                application to gain practical experience with mobile development
                and product release workflows.
                <span className='block h-2 md:h-3 lg:h-4'></span>
                Independently managed the full application lifecycle including
                deployment to the Google Play Store and compliance with evolving
                platform security and developer verification policies.
                <span className='block h-2 md:h-3 lg:h-4'></span>
                Maintaining store compliance required ongoing updates and
                verification processes, providing practical insight into the
                operational and maintenance demands of production level mobile
                applications beyond initial release.
              </p>
            </div>
            <div className='order-1 md:order-none relative w-full h-64 md:basis-2/5 md:h-auto'>
              <Image
                src={'/placeholder.png'}
                alt='image'
                layout='fill'
                objectFit='cover'
                className='object-cover rounded-xl'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
