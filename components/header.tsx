import { Github } from 'lucide-react';

export default function header() {
  return (
    <>
      <h1 className='text-6xl font-bold text-(--color-coffee-50) mb-6 md:mb-8 lg:mb-10'>
        Torun Alenius Wikström
      </h1>
      <h3 className='text-3xl text-(--color-coffee-200 mt-8 md:mt-10 lg:mt-12 mb-3 md:mb-4)'>
        Web Developer & Software Tester
      </h3>
      <div>
        <Github />
        <button className='border'>Check out my CV</button>
      </div>
    </>
  );
}
