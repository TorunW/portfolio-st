import Image from 'next/image';

interface AboutProps {
  id: string;
}

export default function about({ id }: AboutProps) {
  return (
    <section id={id} className='py-12 md:py-16 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row md:items-center gap-12 md:gap-16'>
          {/* Image */}
          <div className='relative w-full aspect-9/6 basis-1/5 md:basis-2/5 md:aspect-3/5 lg:basis-2/7 lg:aspect-4/5'>
            <Image
              src='/aboutme.jpg'
              alt='Portrait of Torun Alenius Wikström'
              fill={true}
              className='object-cover rounded-2xl'
              sizes='(min-width: 768px) 40vw, 100vw'
            />
          </div>

          {/* Text */}
          <div className='basis-4/5 md:basis-3/5 lg:basis-5/7 flex flex-col gap-6 md:gap-8'>
            <h2 className='text-4xl font-bold'>About Me</h2>

            <div className='flex flex-col gap-4 md:gap-5 lg:gap-6 text-base leading-7 md:leading-8 lg:leading-9'>
              <p>
                I’m an ISTQB Certified QA professional with a background in full
                stack development. I work mainly with JavaScript and Next.js,
                and I’ve built and deployed both web and mobile applications,
                including projects with database integrations, API connections,
                and payment systems.
              </p>

              <p>
                I started learning web development through documentation, online
                resources, and mentorship from a senior developer. After
                building several projects and releasing a mobile app, I became
                increasingly interested in quality, edge cases, and system
                behavior. That curiosity led me to study software testing more
                seriously and earn my ISTQB Foundation Level certification.
              </p>

              <p>
                Having written production code myself, I understand how features
                are structured, where complexity hides, and how small changes
                can affect the whole system. I now want to work in QA, combining
                structured testing knowledge with hands on development
                experience.
              </p>

              <p>
                Outside of tech, I design knitting patterns, which, much like
                writing test cases, requires translating complex structures into
                clear, logical, and reproducible instructions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
