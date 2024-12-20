import auth from '@/src/shared/auth/auth';
import LoginForm from './login-form';
import { redirect } from 'next/navigation';


export async function LoginScreen() {  
  const user = await auth.getUser();

  if(user) {
    return redirect('/chat');
  }



  return (
    <main className='mx-auto max-w-7xl min-h-screen px-4 py-6 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-center'>
        <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mt-20'>
          <LoginForm />          
        </div>
      </div>
    </main>
  );
}
