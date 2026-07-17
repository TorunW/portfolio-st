import FadeIn from './fade-in';

export default function Stats() {
  return (
    <section id='stats' className='relative z-10 border-t border-bdr px-6 py-20 md:px-10'>
      <FadeIn>
        <div className='mb-12 flex items-baseline gap-4'>
          <span className='text-[11px] tracking-[0.1em] text-accent'>02</span>
          <h2 className='font-syne text-[clamp(1.8rem,4vw,2.8rem)] leading-none font-bold tracking-tight text-ink'>
            Open Source
          </h2>
          <div className='mb-1.5 h-px flex-1 bg-bdr'></div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='https://github-readme-stats.vercel.app/api?username=TorunW&show_icons=true&theme=dark&hide_border=true&bg_color=111115&title_color=F4A229&icon_color=F4A229&text_color=ECEAE0&count_private=true'
            alt='GitHub Stats for TorunW'
            loading='lazy'
            className='w-full rounded-[6px] border border-bdr brightness-90 saturate-[0.85] transition-all hover:brightness-100 hover:saturate-100'
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='https://github-readme-stats.vercel.app/api/top-langs/?username=TorunW&layout=compact&theme=dark&hide_border=true&bg_color=111115&title_color=F4A229&text_color=ECEAE0'
            alt='Top languages for TorunW'
            loading='lazy'
            className='w-full rounded-[6px] border border-bdr brightness-90 saturate-[0.85] transition-all hover:brightness-100 hover:saturate-100'
          />
        </div>
      </FadeIn>
    </section>
  );
}
