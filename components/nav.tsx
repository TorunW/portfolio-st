import Link from 'next/link';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#stats', label: 'Open Source' },
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <nav className='fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-bdr bg-bg/85 px-6 py-5 backdrop-blur-md md:px-10'>
      <Link
        href='/'
        className='font-syne text-lg font-extrabold tracking-tight text-accent no-underline'
      >
        TW<span className='text-ink'>.</span>
      </Link>

      <ul className='hidden list-none gap-8 md:flex'>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className='text-xs tracking-widest text-muted uppercase no-underline transition-colors hover:text-ink'
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className='flex items-center gap-3'>
        <a
          href='https://github.com/TorunW'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-1.5 rounded border border-bdr bg-transparent px-4 py-2 font-mono text-xs text-ink no-underline transition hover:border-accent hover:text-accent'
        >
          GitHub
        </a>
        <Link
          href='/cv'
          className='inline-flex items-center gap-1.5 rounded border border-accent bg-accent px-4 py-2 font-mono text-xs font-medium text-bg no-underline transition hover:border-accent2 hover:bg-accent2'
        >
          ↓ Resume
        </Link>
      </div>
    </nav>
  );
}
