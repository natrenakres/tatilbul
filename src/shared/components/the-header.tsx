'use client';
import { useRouter } from 'next/navigation';
import { destroySession } from '../auth/destroySession';
import Link from 'next/link';
import { useAuth } from '../context/authContext';
import { Button } from '../ui/button';

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
      <div className='mx-auto max-w-7xl px-4 py-6 overflow-auto flex justify-between'>
        <h1 className='text-primary-foreground font-sans font-normal my-1 leading-3 text-4xl'>Tatilbul.</h1>
        <nav>
          <ul className='flex items-center gap-4'>
            {isAuthenticated && (
              <>
                <li>
                  <Link className='text-primary-foreground hover:border-b-2 hover:border-primary-foreground' href='/profile'>Profile</Link>
                </li>
                <li>
                  <Button className='bg-foreground hover:bg-foreground' onClick={handleLogout}>Sign out</Button>
                </li>
              </>
            )}
            {!isAuthenticated && (
              <>
                <li>
                  <Link className='text-primary-foreground hover:border-b-2 hover:border-primary-foreground' href='/login'>Login</Link>
                </li>
                <li>
                  <Link className='text-primary-foreground hover:border-b-2 hover:border-primary-foreground' href='/register'>Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
