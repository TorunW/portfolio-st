import FadeIn from './fade-in';

const stack = [
  {
    title: 'Frontend',
    items: [
      'React / Next.js',
      'TypeScript / JavaScript',
      'React Native / Expo',
      'CSS / Tailwind',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'MySQL',
      'REST APIs',
      'Stripe',
    ],
  },
  {
    title: 'Testing & QA',
    items: [
      'ISTQB Foundation',
      'Playwright',
      'Manual test design',
      'White / black box',
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      'Git / GitHub',
      'Google Play release',
      'Vercel',
      'Linux / Bash',
    ],
  },
];

export default function Stack() {
  return (
    <section id='stack' className='relative z-10 border-t border-bdr px-6 py-20 md:px-10'>
      <FadeIn>
        <div className='mb-12 flex items-baseline gap-4'>
          <span className='text-[11px] tracking-[0.1em] text-accent'>04</span>
          <h2 className='font-syne text-[clamp(1.8rem,4vw,2.8rem)] leading-none font-bold tracking-tight text-ink'>
            Tech Stack
          </h2>
          <div className='mb-1.5 h-px flex-1 bg-bdr'></div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
          {stack.map((column) => (
            <div key={column.title}>
              <h4 className='mb-4 border-b border-bdr pb-2 text-[10px] tracking-[0.15em] text-accent uppercase'>
                {column.title}
              </h4>
              <div className='flex flex-col gap-2.5'>
                {column.items.map((item) => (
                  <div
                    key={item}
                    className='flex items-center gap-3 text-[12px] text-muted'
                  >
                    <span className='h-1 w-1 shrink-0 rounded-full bg-accent'></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
