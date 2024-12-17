import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';
import { createSessionClient } from '../config/appwrite';
import { Models } from 'node-appwrite';
import { redirect } from 'next/navigation';


interface Auth {
  user: Models.User<Models.Preferences> | undefined | null;
  sessionCookie: RequestCookie | undefined | null;
  getUser: () => Promise<Models.User<Models.Preferences> | null>;  
  destroySession: () => void
}



const auth: Auth = {
  user: null,
  sessionCookie: undefined,

  getUser: async () => {    
    'use server';
    auth.sessionCookie = (await cookies()).get('appwrite-session');

    if (!auth.sessionCookie) {
      auth.user = null;
      auth.sessionCookie = null;
      return auth.user;
    }

    try {
      const { account } = await createSessionClient(auth.sessionCookie?.value);
      auth.user = await account.get();
    } catch (error: unknown) {
      console.error('not authenticatre', error);
      auth.user = null;
      auth.sessionCookie = null;
    }

    return auth.user;
  },  
  destroySession: async () => {  
    'use server';  
    auth.sessionCookie = (await cookies()).get('appwrite-session');

    if (!auth.sessionCookie) {
      auth.user = null;
      redirect('/login');
    }

    try {
      const { account } = await createSessionClient(auth.sessionCookie.value);

      // Delete session
      await account.deleteSession('current');

      // Clear session cookie
      (await cookies()).delete('appwrite-session');      
    } catch (error: unknown) {
      console.log('cannot destroy session', error);      
    }

    auth.sessionCookie = null;
    auth.user = null;
    redirect('/login');
  },
};

export default auth;
