import Image from 'next/image';
import Link from 'next/link';

export default function projects() {
  return (
    <div className='flex flex-col justify-center items-center max-w-7xl px-4 md:px-6 lg:px-8'>
      <h2 className='text-4xl font-bold text-center mt-4 md:mt-6 lg:mt-0 mb-8 md:mb-12'>
        Projects
      </h2>
      <div className='flex flex-col gap-12 md:gap-16 lg:gap-20'>
        <div className='pb-12 md:pb-20 lg:pb-24'>
          <div className='flex flex-col md:flex-row justify-center'>
            <div className='order-1 md:order-0 relative w-full md:basis-2/5 aspect-video'>
              <Image
                src={'/Tictactoe-still.png'}
                alt='image of tictactoe app'
                fill={true}
                className='object-cover rounded'
              />
            </div>
            <div className='order-2 md:order-0 bg-(--color-coffee-950) rounded p-6 md:p-8 relative md:top-12 lg:top-16 md:basis-3/5 z-10 md:-ml-16 lg:-ml-20'>
              <h3 className='text-3xl text-(--color-coffee-200) mt-2 md:mt-3 lg:mt-4 mb-3 md:mb-4'>
                TicTacToe – Testing Playground
              </h3>
              <p className='text-base mb-4 md:mb-5 lg:mb-6 leading-7 md:leading-8 lg:leading-9'>
                Built a TicTacToe web application using Next.js to apply
                structured software testing practices in a controlled
                environment.
                <span className='block h-2 md:h-3 lg:h-4'></span>
                Defined functional requirements, created test cases and a test
                plan, and applied both white box and black box static testing
                techniques. The project focuses primarily on manual testing
                methodology, with end to end test automation using Playwright
                currently being implemented.
                <span className='block h-2 md:h-3 lg:h-4'></span>
                Demonstrates the full manual testing lifecycle from requirement
                analysis to execution, while progressively expanding into
                automation practices.
              </p>
              <div className='flex flex-row gap-4'>
                <Link
                  href={'/tictactoe-testing'}
                  scroll={true}
                  className='bg-(--color-coffee-800) text-sm md:text-base hover:bg-(--color-coffee-900) hover:cursor-pointer text-(--color-coffee-200) font-bold py-2 px-4 rounded inline-flex items-center '
                >
                  Testing showcase
                </Link>
                <Link
                  href={'https://github.com/TorunW/TicTacToe'}
                  className='bg-(--color-coffee-800) text-sm md:text-base hover:bg-(--color-coffee-900) hover:cursor-pointer text-(--color-coffee-200) font-bold py-2 px-4 rounded inline-flex items-center '
                >
                  Github
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='pb-12 md:pb-20 lg:pb-24'>
          <div className='flex flex-col md:flex-row  justify-center'>
            <div className='order-2 md:order-0 bg-(--color-coffee-950) rounded p-6 md:p-8 relative md:top-12 lg:top-16 md:basis-3/5 z-10 md:-mr-16 lg:-mr-20'>
              <h3 className='text-3xl text-(--color-coffee-200) mt-2 md:mt-3 lg:mt-4 mb-3 md:mb-4'>
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
              <Link
                href={'https://github.com/TorunW/tempesta'}
                className='bg-(--color-coffee-800) text-sm md:text-base hover:bg-(--color-coffee-900) hover:cursor-pointer text-(--color-coffee-200) font-bold py-2 px-4 rounded inline-flex items-center '
              >
                Github
              </Link>
            </div>
            <div className='order-1 md:order-0 relative w-full md:basis-2/5 aspect-video'>
              <Image
                src={'/tempesta-still.png'}
                alt='image'
                fill
                className='object-cover rounded'
              />
            </div>
          </div>
        </div>

        <div className='pb-12 md:pb-20 lg:pb-24'>
          <div className='flex flex-col md:flex-row justify-center'>
            <div className='order-1 md:order-0 relative w-full md:basis-2/5 aspect-video'>
              <Image
                src={'/NGO-still.png'}
                alt='image'
                fill
                className='object-cover rounded'
              />
            </div>
            <div className='order-2 md:order-0 bg-(--color-coffee-950) rounded p-6 md:p-8 relative md:top-12 lg:top-16 md:basis-3/5 z-10 md:-ml-16 lg:-ml-20'>
              <h3 className='text-3xl text-(--color-coffee-200) mt-2 md:mt-3 lg:mt-4 mb-3 md:mb-4'>
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
                Live site may experience occasional downtime due to external
                factors. Public repository not available due to client
                confidentiality and data protection requirements. Source code
                available upon request.
              </p>
              <Link
                href={'https://www.juedische-stimme.de/'}
                className='bg-(--color-coffee-800) text-sm md:text-base hover:bg-(--color-coffee-900) hover:cursor-pointer text-(--color-coffee-200) font-bold py-2 px-4 rounded inline-flex items-center '
              >
                Website
              </Link>
            </div>
          </div>
        </div>

        <div className='pb-12 md:pb-20 lg:pb-24'>
          <div className='flex flex-col md:flex-row justify-center'>
            <div className='order-2 md:order-0 bg-(--color-coffee-950) rounded p-6 md:p-8 relative md:top-12 lg:top-16 md:basis-3/5 z-10 md:-mr-16 lg:-mr-20'>
              <h3 className='text-3xl text-(--color-coffee-200) mt-2 md:mt-3 lg:mt-4 mb-3 md:mb-4'>
                Pixense Mobile Application
              </h3>
              <p className='text-base mb-4 md:mb-5 lg:mb-6 leading-7 md:leading-8 lg:leading-9'>
                Developed a mobile application using React Native Expo featuring
                AI powered image generation and image recognition workflows.
                Integrated OpenAI DALL E 3 for prompt based image generation and
                the Imagga API for automated image tagging.
                <span className='block h-2 md:h-3 lg:h-4'></span>
                Successfully managed the full release process to the Google Play
                Store, including configuration, deployment, and compliance
                requirements. The application was later removed due to ongoing
                platform verification and maintenance demands that were not
                feasible for a learning focused project.
                <span className='block h-2 md:h-3 lg:h-4'></span>
                The project provided hands on experience with mobile
                architecture, third party API integration, and production level
                deployment workflows. A live demo is available via Appetize.
              </p>
              <div className='flex flex-row gap-4'>
                <Link
                  href={'https://github.com/TorunW/pixense/'}
                  className='bg-(--color-coffee-800) text-sm md:text-base hover:bg-(--color-coffee-900) hover:cursor-pointer text-(--color-coffee-200) font-bold py-2 px-4 rounded inline-flex items-center '
                >
                  Github
                </Link>
                <Link
                  href={'https://appetize.io/app/b_pszrvccbsdwxq4cxq6n2x5477e'}
                  className='bg-(--color-coffee-800) text-sm md:text-base hover:bg-(--color-coffee-900) hover:cursor-pointer text-(--color-coffee-200) font-bold py-2 px-4 rounded inline-flex items-center '
                >
                  Play around with the App on Appetize
                </Link>
              </div>
            </div>
            <div className='order-1 md:order-0 relative w-full md:basis-2/5 aspect-video'>
              <Image
                src={'/Pixense-still.png'}
                alt='image'
                fill
                className='object-cover rounded'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
