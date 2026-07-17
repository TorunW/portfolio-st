import Link from 'next/link';
import FadeIn from './fade-in';

const contacts = [
  {
    href: 'https://github.com/TorunW',
    label: 'github.com/TorunW',
    icon: '⎇',
    external: true,
  },
  {
    href: 'https://linkedin.com/in/torun-wikström-a77011220',
    label: 'linkedin.com/in/torun-wikström',
    icon: 'in',
    external: true,
    boldIcon: true,
  },
  {
    href: '/cv',
    label: 'Download Resume',
    icon: '↓',
    external: false,
  },
];

export default function Contact() {
  return (
    <section
      id='contact'
      className='relative z-10 border-t border-bdr px-6 py-20 md:px-10'
    >
      <FadeIn>
        <div className='mb-12 flex items-baseline gap-4'>
          <span className='text-[11px] tracking-[0.1em] text-accent'>05</span>
          <h2 className='font-syne text-[clamp(1.8rem,4vw,2.8rem)] leading-none font-bold tracking-tight text-ink'>
            Contact
          </h2>
          <div className='mb-1.5 h-px flex-1 bg-bdr'></div>
        </div>
      </FadeIn>

      <div className='grid grid-cols-1 items-start gap-16 md:grid-cols-2'>
        <FadeIn>
          <p className='font-syne mb-6 text-[clamp(2rem,5vw,3.5rem)] leading-none font-extrabold tracking-tight text-ink'>
            Let&apos;s build
            <br />
            something
            <br />
            <span className='text-accent'>worth shipping.</span>
          </p>
          <p className='max-w-xs text-[12px] leading-[1.9] text-muted'>
            Open to QA roles, full-time opportunities, and collaborations where
            testing and development meet.
          </p>
        </FadeIn>

        <FadeIn>
          <div className='flex flex-col gap-4'>
            {contacts.map((item) => {
              const className =
                'flex justify-between items-center px-5 py-4 border border-bdr rounded-[6px] no-underline text-muted text-[12px] transition hover:border-accent hover:text-accent hover:bg-accent/[0.04]';

              const inner = (
                <>
                  <div className='flex items-center gap-3'>
                    <span className={item.boldIcon ? 'text-xs font-bold' : ''}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <span>→</span>
                </>
              );

              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={className}
                  >
                    {inner}
                  </a>
                );
              }

              return (
                <Link key={item.href} href={item.href} className={className}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
