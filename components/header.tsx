import { Github, Linkedin, NotepadText, User } from 'lucide-react';
import Link from 'next/link';

export default function header() {
  return (
    <section className='py-12 md:py-16 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
        <div className='flex flex-col gap-8 md:gap-10 lg:gap-12'>
          <h1 className='text-5xl md:text-6xl font-bold text-(--color-coffee-50)'>
            Torun Alenius Wikström
          </h1>

          <div className='flex flex-col gap-3 md:gap-4'>
            <h2 className='text-2xl md:text-3xl text-(--color-coffee-200)'>
              Web Developer & Software Tester
            </h2>

            <p className='max-w-2xl text-base leading-7 md:leading-8 lg:leading-9'>
              Junior QA Engineer (ISTQB Certified) with a development
              background, focused on building and validating reliable, well
              structured software systems.
            </p>
          </div>
          <div className='grid lg:grid-row-1 grid-cols-2 gap-4 w-fit'>
            <a
              href={'https://linkedin.com/in/torun-wikström-a77011220'}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-(--color-coffee-900) text-sm md:text-base hover:bg-(--color-coffee-950) hover:cursor-pointer text-(--color-coffee-200) font-bold py-2 px-4 rounded inline-flex items-center '
            >
              <Linkedin className='w-4 h-4 mr-2' />
              LinkedIn
            </a>

            <a
              href={'https://github.com/TorunW'}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-(--color-coffee-900) text-sm md:text-base hover:bg-(--color-coffee-950) hover:cursor-pointer text-(--color-coffee-200) font-bold py-2 px-4 rounded inline-flex items-center '
            >
              <Github className='w-4 h-4 mr-2' />
              GitHub
            </a>
            <Link
              href={'/cv'}
              className='bg-(--color-coffee-900) text-sm md:text-base hover:bg-(--color-coffee-950) hover:cursor-pointer text-(--color-coffee-200) font-bold py-2 px-4 rounded inline-flex items-center '
            >
              <NotepadText className='w-4 h-4 mr-2' /> Read my CV
            </Link>
            <Link
              href={'/#about'}
              className='bg-(--color-coffee-900) text-sm md:text-base hover:bg-(--color-coffee-950) hover:cursor-pointer text-(--color-coffee-200) font-bold py-2 px-4 rounded inline-flex items-center '
            >
              <User className='w-4 h-4 mr-2' />
              About me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
