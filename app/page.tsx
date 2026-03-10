import Header from '../components/header';
import Projects from '../components/projects';
import About from '../components/about';

export default function Home() {
  return (
    <div className='bg-[url(/background.png)] bg-no-repeat bg-cover'>
      <div className='bg-linear-to-t from-(--color-background) from-60% to-(--transparent) h-screen flex items-center justify-center'>
        <div className='h-screen overflow-scroll p-8'>
          <Header />
          <Projects />
          <About id='about' />
        </div>
      </div>
    </div>
  );
}
