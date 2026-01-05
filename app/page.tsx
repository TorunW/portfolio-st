import Header from '../components/header';

export default function Home() {
  return (
    <div className='bg-[url(/background.png)] bg-no-repeat bg-cover'>
      <div className='bg-linear-to-t from-(--color-background) from-60% to-(--transparent) h-screen flex items-center justify-center'>
        <div className='h-screen overflow-scroll p-8'>
          <Header />

          <h2 className='text-4xl font-bold'>Projects</h2>
          <div>
            iimage
            <h3 className='text-3xl text-(--color-coffee-200)'>
              name of project
            </h3>
            <p className='text-base'>
              lorem ipsum.... rust, tictactoe, judische stimme, react app
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
