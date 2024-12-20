import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/src/shared/ui/button';
import { Card, CardContent, CardHeader } from '@/src/shared/ui/card';
import ShowcaseImage from '@/src/core/assets/showcase.svg';
import Imagine from '@/src/core/assets/imagine.svg';
import ChatBot from '@/src/core/assets/chat_bot.svg';
import Explore from '@/src/core/assets/explore.svg';
import { TheHeader } from '@/src/shared/components/the-header';
import { TheFooter } from '@/src/shared/components/the-footer';

export async function HomeScreen() {
  return (
    <>
      <TheHeader />
      <section className='h-[250px] md:h-[400px] bg-primary text-primary-foreground relative showcase'>
        <div className='mx-auto max-w-7xl px-2 py-4 grid overflow-visible md:grid-cols-[55%_45%] gap-[30px]'>
          <div className='showcase-text'>
            <h1 className='text-[20px] md:text-[40px] lg:text-[50px]'>Your AI Holiday Assistant!</h1>
            <p className='text-sm md:text-lg lg:text-xl'>
              Tatilbul helps you discover your dream holiday with ease! Our
              AI-powered system finds the best hotels and vacation options
              tailored to your preferences in just one step. Stay up-to-date
              with real-time data and plan your perfect getaway effortlessly!
            </p>
            <div className='flex gap-4 mt-4'>
              <Link href='/chat'>
                <Button className='bg-foreground hover:bg-foreground'>
                  Start
                </Button>
              </Link>
              <Link href='/faq'>
                <Button
                  className='bg-transparent hover:bg-primary border-white hover:scale-95 hover:text-primary-foreground'
                  variant={'outline'}
                >
                  Read More
                </Button>
              </Link>
              
            </div>
          </div>
          <div className='hidden md:block relative top-[60px] h-[350px] md:w-[300px] md:p-[20px] lg:w-[400px] lg:p-[40px] z-50 justify-end'>
            <Image src={ShowcaseImage} alt='travel_booking' />
          </div>
        </div>
      </section>

      <section className='pt-16 lg:pt-24'>
        <div className='mx-auto max-w-7xl px-4 py-6 '>
          <h3 className='max-w-7xl m-auto text-sm md:text-lg'>
            Finding the perfect vacation spot, even if you’ve been there before,
            can sometimes feel overwhelming in today’s fast-paced world. That’s
            why we’ve created an AI-powered app to take the hassle out of
            planning. All you need to do is share your dreams and describe what
            you’d like to do—our app will handle the rest. You can simply focus
            on enjoying your vacation!
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-3 text-center gap-4 mt-4'>
            <Card>
              <CardHeader>
                <Image src={Imagine} alt='imagine' />
              </CardHeader>
              <CardContent>
                <h3>Imagine</h3>
                <p className='text-secondary'>Country, city or state</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image src={ChatBot} alt='Chat with bot' />
              </CardHeader>
              <CardContent>
                <h3>Chat with AI</h3>
                <p className='text-secondary'>
                  I want to go Italy with my kids.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image src={Explore} alt='explore' />
              </CardHeader>
              <CardContent>
                <h3>Start Holiday!</h3>
                <p className='text-secondary'>Explore your destination</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <TheFooter />
    </>
  );
}
