import { Github } from 'lucide-react';

export default function header() {
  return (
    <>
      <h1 className='text-6xl font-bold text-(--color-coffee-50)'>
        Torun Alenius Wikström
      </h1>
      <h3 className='text-3xl text-(--color-coffee-200)'>
        Web Developer & Software Tester
      </h3>
      <div>
        <Github />
        <button className='border'>Check out my CV</button>
      </div>
    </>
  );
}
