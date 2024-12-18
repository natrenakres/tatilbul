import auth from "@/src/shared/auth/auth"
import { RegisterForm } from "./register-form"
import { redirect } from "next/navigation";



export async function RegisterScreen() {
    const user = await auth.getUser();

    if(user) {
      redirect('/chat');
    }
  
  return (
    <main className='mx-auto max-w-7xl h-[80vh] px-4 py-6 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-center'>
        <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mt-20'>
          <RegisterForm />
        </div>
      </div>
    </main>
  )
}
