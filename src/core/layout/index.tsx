import type { Metadata } from 'next';
import { sans } from '@/src/core/font';

import "@/src/core/styles/globals.css";
import { TheHeader } from '@/src/shared/ui/the-header';
import { AuthWrapper } from '@/src/shared/ui/auth-wrapper';

export const metadata: Metadata = {
  title: 'Tatilbil | Your AI assitant for perfect holiday!',
  description:
    'Tatilbul is a AI assitant for searching a perfect holiday in internet.',
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${sans.variable} antialiased`}
      >
        <AuthWrapper>
          <TheHeader />
          <main className='mx-auto max-w-7xl px-4 py-6'>
            <hr style={{ border: 'solid 2px red'}} />
            {children}
          </main>
        </AuthWrapper>
      </body>
    </html>
  );
}
