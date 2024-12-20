import { Alert, AlertTitle, AlertDescription } from '@/src/shared/ui/alert';
import Link from 'next/link';
import { LuCheck } from 'react-icons/lu';

export function LoginSuccess() {
  return (
    <main className='mx-auto max-w-7xl min-h-screen px-4 py-6 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-center'>
        <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mt-20'>          
          <Alert>
            <LuCheck className='h-4 w-4' />
            <AlertTitle>Your Login is success!</AlertTitle>
            <AlertDescription>
              To start please <Link href='/chat'>click</Link>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </main>
  );
}
