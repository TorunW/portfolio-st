import Nav from '../components/nav';
import Header from '../components/header';
import About from '../components/about';
import Stats from '../components/stats';
import Projects from '../components/projects';
import Stack from '../components/stack';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className='relative'>
      <Nav />
      <Header />
      <About id='about' />
      <Stats />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}
