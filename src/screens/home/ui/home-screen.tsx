import Image from 'next/image';
import ShowcaseImage from '../assets/showcase.svg';
import { Button } from '@/src/shared/ui/button';

export async function HomeScreen() {
  return (
    <>
      <section className='h-[400px] bg-primary text-primary-foreground relative showcase'>
        <div className='mx-auto max-w-7xl px-4 py-6 grid overflow-visible grid-cols-[55%_45%] gap-[30px]'>
          <div className='showcase-text'>
            <h1 className='text-[40px]'>Your AI Holiday Assistant!</h1>
            <p className='mt-[20px]'>
              Tatilbul helps you discover your dream holiday with ease! Our
              AI-powered system finds the best hotels and vacation options
              tailored to your preferences in just one step. Stay up-to-date
              with real-time data and plan your perfect getaway effortlessly!
            </p>
            <Button
              className='bg-transparent hover:bg-primary border-white hover:scale-95 hover:text-primary-foreground mt-4'
              variant={'outline'}
            >
              Read More
            </Button>
          </div>
          <div className='relative top-[60px] h-[350px] w-[400px] p-[40px] z-50 justify-end'>
            <Image src={ShowcaseImage} alt='travel_booking' />
          </div>
        </div>
      </section>

      <section className='pt-[120px]'>
        <div className='container'>
          <h3 className='stats-heading text-center my-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            numquam, aperiam dolorum doloribus magnam saepe ipsum, sapiente
            natus molestiae minus commodi blanditiis consequatur accusamus
            perferendis rem veritatis voluptatibus illum inventore.
          </h3>
          <div className='grid grid-3 text-center my-4'>
            <div>
              <i className='fas fa-server fa-3x'></i>
              <h3>10,349,504</h3>
              <p className='text-secondary'>Deployments</p>
            </div>
            <div>
              <i className='fas fa-upload fa-3x'></i>
              <h3>987 TB</h3>
              <p className='text-secondary'>Published</p>
            </div>
            <div>
              <i className='fas fa-project-diagram fa-3x'></i>
              <h3>2, 343, 265</h3>
              <p className='text-secondary'>Project</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
