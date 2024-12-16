'use client';
import { useRouter } from 'next/navigation';
import { destroySession } from '../auth/destroySession';
import Link from 'next/link';
import { useAuth } from '../context/authContext';
import { Button } from '../ui/button';
import Logo from "@/src/core/assets/logo.svg";
import Image from 'next/image';

export function TheHeader() {
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  async function handleLogout() {
    const { success, error } = await destroySession();

    if (success) {
      setIsAuthenticated(false);
      router.push('/login');
    } else {
      console.log(error);
    }
  }

  return (
    <header className='bg-primary text-primary-foreground'>
        <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image className="h-12 w-12" src={Logo} alt="Tatilbul." />
            </Link>
            <div className="md:block">
              <div className="ml-10 flex items-baseline space-x-4">
              {
                isAuthenticated && (
                  <>
                    <Link className='text-primary-foreground hover:border-b-2 hover:border-primary-foreground' href='/chat'>Chat</Link>
                    <Link className='text-primary-foreground hover:border-b-2 hover:border-primary-foreground' href='/profile'>Profile</Link>
                  </>
                  )
              }
              </div>
            </div>
          </div>          
          <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6 gap-4">              
            {
              !isAuthenticated && (
                <>
                  <Link className='text-primary-foreground hover:border-b-2 hover:border-primary-foreground' href='/login'>Login</Link>              
                  <Link className='text-primary-foreground hover:border-b-2 hover:border-primary-foreground' href='/register'>Register</Link>
                </>              
            )}
              
              {isAuthenticated && <Button className='bg-foreground hover:bg-foreground' onClick={handleLogout}>Sign out</Button>}
            </div>
          </div>
        </div>
        </nav>              
    </header>
  );
}
