import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/src/shared/ui/button';
import { Card, CardContent, CardHeader } from '@/src/shared/ui/card';
import ShowcaseImage from "@/src/core/assets/showcase.svg";
import Imagine from "@/src/core/assets/imagine.svg";
import ChatBot from "@/src/core/assets/chat_bot.svg";
import Explore from "@/src/core/assets/explore.svg";
import { TheHeader } from '@/src/shared/components/the-header';
import { TheFooter } from '@/src/shared/components/the-footer';

export async function HomeScreen() {
  return (
    <>
      <TheHeader />
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
            <div className='flex gap-4 mt-4'>
              <Button
                className='bg-transparent hover:bg-primary border-white hover:scale-95 hover:text-primary-foreground'
                variant={'outline'}
              >
                Read More
              </Button>
                <Link href="/chat">
                  <Button className='bg-foreground hover:bg-foreground'>
                    Start
                  </Button>
                </Link>
            </div>
          </div>
          <div className='relative top-[60px] h-[350px] w-[400px] p-[40px] z-50 justify-end'>
            <Image src={ShowcaseImage} alt='travel_booking' />
          </div>
        </div>
      </section>

      <section className='pt-[100px]'>
        <div className='mx-auto max-w-7xl px-4 py-6 '>
          <h3 className='max-w-7xl m-auto'>
            Tatil yapcak yer bulmak daha önce gitseniz bile bazen günümüz temposunda cok zor oldugunu biliyoruz. Bu yüzden siz sadece ne yapmak istediginizi hayallerinizi yazin gerisini yapay zeka destekli uygulamamiz halletsin. Size tatilin tadini cikarmak kalsin.
          </h3>
          <div className='grid grid-cols-3  text-center gap-4 mt-4'>
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
                <p className='text-secondary'>I want to go Italy with my kids.</p>
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
