import Link from 'next/link';
import { Button } from '../ui/button';
import Logo from '@/src/core/assets/logo.svg';
import Image from 'next/image';
import auth from '../auth/auth';

export async function TheHeader() {
  const user = await auth.getUser();

  return (
    <header className='bg-primary text-primary-foreground'>
      <nav className='mx-auto max-w-7xl px-2 md:px-2 lg:px-0'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <Link href='/'>
              <Image className='h-12 w-12' src={Logo} alt='Tatilbul.' />
            </Link>
            <div className='md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                {user && (
                  <>
                    <Link
                      className='text-primary-foreground hover:border-b-2 hover:border-primary-foreground'
                      href='/chat'
                    >
                      Chat
                    </Link>
                    <Link
                      className='text-primary-foreground hover:border-b-2 hover:border-primary-foreground'
                      href='/hotels'
                    >
                      My Hotels
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className='ml-auto'>
            <div className='flex items-center gap-4'>
              {!user && (
                <>
                  <Link
                    className='text-primary-foreground hover:border-b-2 hover:border-primary-foreground'
                    href='/login'
                  >
                    Login
                  </Link>
                  <Link
                    className='text-primary-foreground hover:border-b-2 hover:border-primary-foreground'
                    href='/register'
                  >
                    Register
                  </Link>
                </>
              )}

              {user && (
                <>
                  <Link className='hidden md:block' href='/profile'>
                    <strong>Hi, {user.name || user.email}</strong>
                  </Link>
                  <form action={auth.destroySession}>
                    <Button className='bg-foreground hover:bg-foreground h-8 px-2'>
                      Sign out
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
