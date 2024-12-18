import { TheFooter } from '@/src/shared/components/the-footer';
import { TheHeader } from '@/src/shared/components/the-header';
import { ReactNode } from 'react';

export function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TheHeader />
      <main className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
        {children}
      </main>
      <TheFooter />
    </>
  );
}
