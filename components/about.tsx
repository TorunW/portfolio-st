import Image from 'next/image';
import FadeIn from './fade-in';

const skills = [
  'JavaScript',
  'Next.js',
  'React',
  'React Native',
  'Playwright',
  'ISTQB',
  'MySQL',
  'REST APIs',
  'Git',
];

interface AboutProps {
  id: string;
}

export default function About({ id }: AboutProps) {
  return (
    <section id={id} className='relative z-10 border-t border-bdr px-6 py-20 md:px-10'>
      <FadeIn>
        <div className='mb-12 flex items-baseline gap-4'>
          <span className='text-[11px] tracking-[0.1em] text-accent'>01</span>
          <h2 className='font-syne text-[clamp(1.8rem,4vw,2.8rem)] leading-none font-bold tracking-tight text-ink'>
            About Me
          </h2>
          <div className='mb-1.5 h-px flex-1 bg-bdr'></div>
        </div>
      </FadeIn>

      <div className='grid grid-cols-1 items-start gap-16 md:grid-cols-[1fr_2fr]'>
        <div>
          <div className='photo-frame relative aspect-[3/4] max-w-[280px] overflow-hidden rounded-[4px] border border-bdr bg-surface'>
            <Image
              src='/aboutme.jpg'
              alt='Portrait of Torun Alenius Wikström'
              fill
              className='object-cover'
              sizes='280px'
              priority
            />
          </div>
        </div>

        <FadeIn>
          <h3 className='font-syne mb-5 text-[1.4rem] font-semibold text-ink'>
            Hey, I&apos;m Torun Alenius Wikström —
          </h3>
          <p className='mb-4 text-[13px] leading-[1.9] text-muted'>
            I&apos;m an ISTQB Certified QA professional with a background in
            full stack development. I work mainly with JavaScript and Next.js,
            and I&apos;ve built and deployed both web and mobile applications,
            including projects with database integrations, API connections, and
            payment systems.
          </p>
          <p className='mb-4 text-[13px] leading-[1.9] text-muted'>
            I started learning web development through documentation, online
            resources, and mentorship from a senior developer. After building
            several projects and releasing a mobile app, I became increasingly
            interested in quality, edge cases, and system behavior. That
            curiosity led me to study software testing more seriously and earn
            my ISTQB Foundation Level certification.
          </p>
          <p className='mb-4 text-[13px] leading-[1.9] text-muted'>
            Having written production code myself, I understand how features are
            structured, where complexity hides, and how small changes can affect
            the whole system. I now want to work in QA, combining structured
            testing knowledge with hands on development experience.
          </p>
          <p className='text-[13px] leading-[1.9] text-muted'>
            Outside of tech, I design knitting patterns, which, much like
            writing test cases, requires translating complex structures into
            clear, logical, and reproducible instructions.
          </p>

          <div className='mt-8 flex flex-wrap gap-2'>
            {skills.map((skill) => (
              <span
                key={skill}
                className='cursor-default rounded-[2px] border border-bdr px-3 py-1 text-[11px] tracking-[0.06em] text-muted transition hover:border-accent hover:text-accent'
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
