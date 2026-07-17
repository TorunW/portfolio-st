import Link from 'next/link';
import FadeIn from './fade-in';

type Project = {
  title: string;
  category: string;
  categoryTone: 'accent' | 'danger';
  description: string;
  tags: string[];
  meta: string[];
  href: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

const projects: Project[] = [
  {
    title: 'TicTacToe – Testing Playground',
    category: 'QA / Testing',
    categoryTone: 'danger',
    description:
      'Built a TicTacToe web app with Next.js to practice structured software testing — requirements, test cases, white/black box techniques, and Playwright automation in progress.',
    tags: ['Next.js', 'Playwright', 'Manual Testing', 'ISTQB'],
    meta: ['✅ Test lifecycle', '⚡ Automation in progress'],
    href: '/tictactoe-testing',
    secondaryHref: 'https://github.com/TorunW/TicTacToe',
    secondaryLabel: 'GitHub',
  },
  {
    title: 'Tempesta Bookmark Manager',
    category: 'Open Source',
    categoryTone: 'accent',
    description:
      'Contributed testing to an open-source Rust bookmark manager — happy-path coverage for core features, and ongoing work to realign tests after a major refactor.',
    tags: ['Rust', 'Testing', 'Open Source'],
    meta: ['⎇ Fork with tests'],
    href: 'https://github.com/TorunW/tempesta',
  },
  {
    title: 'NGO Organisation Website',
    category: 'Web Dev',
    categoryTone: 'accent',
    description:
      'Migrated a full-stack NGO site from WordPress to Next.js and MySQL. Added Stripe donations, membership flows, an admin dashboard, and post-deploy workflow testing.',
    tags: ['Next.js', 'MySQL', 'Stripe', 'Testing'],
    meta: ['🌐 Live site'],
    href: 'https://www.juedische-stimme.de/',
  },
  {
    title: 'Pixense Mobile Application',
    category: 'Mobile',
    categoryTone: 'accent',
    description:
      'React Native Expo app with AI image generation (DALL·E 3) and Imagga tagging. Shipped to Google Play; demo available on Appetize.',
    tags: ['React Native', 'Expo', 'OpenAI', 'Imagga'],
    meta: ['📱 Mobile', '↗ Appetize demo'],
    href: 'https://github.com/TorunW/pixense/',
    secondaryHref: 'https://appetize.io/app/b_pszrvccbsdwxq4cxq6n2x5477e',
    secondaryLabel: 'Appetize',
  },
];

function CategoryBadge({
  label,
  tone,
}: {
  label: string;
  tone: 'accent' | 'danger';
}) {
  const classes =
    tone === 'danger'
      ? 'bg-danger/10 text-danger border-danger/20'
      : 'bg-accent/10 text-accent border-accent/20';

  return (
    <span
      className={`rounded-[2px] border px-2.5 py-0.5 text-[10px] tracking-[0.15em] uppercase ${classes}`}
    >
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section
      id='projects'
      className='relative z-10 border-t border-bdr px-6 py-20 md:px-10'
    >
      <FadeIn>
        <div className='mb-12 flex items-baseline gap-4'>
          <span className='text-[11px] tracking-[0.1em] text-accent'>03</span>
          <h2 className='font-syne text-[clamp(1.8rem,4vw,2.8rem)] leading-none font-bold tracking-tight text-ink'>
            Projects
          </h2>
          <div className='mb-1.5 h-px flex-1 bg-bdr'></div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className='grid grid-cols-1 gap-px overflow-hidden rounded-[6px] border border-bdr bg-bdr md:grid-cols-2'>
          {projects.map((project) => {
            const isInternal = project.href.startsWith('/');
            const CardTag = isInternal ? Link : 'a';
            const cardProps = isInternal
              ? { href: project.href }
              : {
                  href: project.href,
                  target: '_blank' as const,
                  rel: 'noopener noreferrer',
                };

            return (
              <div
                key={project.title}
                className='project-card relative flex flex-col gap-4 bg-surface p-8 transition-colors hover:bg-surface2'
              >
                <CardTag
                  {...cardProps}
                  className='flex flex-col gap-4 text-inherit no-underline'
                >
                  <div className='flex items-start justify-between'>
                    <CategoryBadge
                      label={project.category}
                      tone={project.categoryTone}
                    />
                    <span className='text-xl text-muted'>↗</span>
                  </div>
                  <div className='font-syne text-xl leading-tight font-bold tracking-tight text-ink'>
                    {project.title}
                  </div>
                  <p className='flex-1 text-[12px] leading-[1.8] text-muted'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-1.5'>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className='rounded-[2px] border border-bdr px-2 py-0.5 text-[10px] text-muted'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardTag>

                <div className='flex flex-wrap items-center gap-4 border-t border-bdr pt-4 text-[11px] text-muted'>
                  {project.meta.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                  {project.secondaryHref && (
                    <a
                      href={project.secondaryHref}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-accent no-underline transition hover:text-accent2'
                    >
                      {project.secondaryLabel} ↗
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
