export default function Header() {
  return (
    <section className='relative z-10 flex min-h-screen flex-col justify-end px-6 pt-24 pb-20 md:px-10'>
      <div className='mb-6 animate-fade-up-1 text-[11px] tracking-[0.2em] text-accent uppercase opacity-0'>
        {'//'} junior QA engineer · ISTQB certified
      </div>

      <h1 className='font-syne mb-6 animate-fade-up-2 text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] font-extrabold tracking-tight text-ink opacity-0'>
        Torun
        <br />
        <span className='text-accent'>Wikström</span>
      </h1>

      <p className='mb-10 max-w-[550px] animate-fade-up-3 text-[13px] leading-[1.8] text-muted opacity-0'>
        Web developer &amp; software tester. Junior QA Engineer (ISTQB
        Certified) with a development background, focused on building and
        validating reliable, well structured software systems.
      </p>

      <div className='mb-16 flex flex-wrap gap-4 animate-fade-up-4 opacity-0'>
        <a
          href='#projects'
          className='inline-flex items-center gap-1.5 rounded border border-accent bg-accent px-4 py-2 font-mono text-xs font-medium text-bg no-underline transition hover:border-accent2 hover:bg-accent2'
        >
          View Projects
        </a>
        <a
          href='#contact'
          className='inline-flex items-center gap-1.5 rounded border border-bdr bg-transparent px-4 py-2 font-mono text-xs text-ink no-underline transition hover:border-accent hover:text-accent'
        >
          Get In Touch
        </a>
      </div>

      <div className='flex animate-fade-up-5 items-center gap-6 opacity-0'>
        <a
          href='https://github.com/TorunW'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-1.5 text-xs tracking-[0.06em] text-muted no-underline transition hover:text-accent'
        >
          <span className='text-[10px]'>↗</span>GitHub
        </a>
        <a
          href='https://linkedin.com/in/torun-wikström-a77011220'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-1.5 text-xs tracking-[0.06em] text-muted no-underline transition hover:text-accent'
        >
          <span className='text-[10px]'>↗</span>LinkedIn
        </a>
        <a
          href='/cv'
          className='flex items-center gap-1.5 text-xs tracking-[0.06em] text-muted no-underline transition hover:text-accent'
        >
          <span className='text-[10px]'>↗</span>CV
        </a>
      </div>

      <div className='hero-scroll absolute right-6 bottom-8 animate-fade-up-6 text-[11px] tracking-[0.15em] text-muted uppercase opacity-0 [writing-mode:vertical-rl] md:right-10'>
        Scroll
      </div>
    </section>
  );
}
