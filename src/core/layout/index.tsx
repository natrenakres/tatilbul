import type { Metadata } from 'next';
import { sans } from '@/src/core/font';

import '@/src/core/styles/globals.css';
import { TheHeader } from '@/src/shared/components/the-header';
import { AuthWrapper } from '@/src/shared/components/auth-wrapper';
import { TheFooter } from '@/src/shared/components/the-footer';

export const metadata: Metadata = {
  title: 'Tatilbul | Your AI assitant for perfect holiday!',
  description:
    'Tatilbul is a AI assitant for searching a perfect holiday in internet.',
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthWrapper>
      <html lang='en'>
        <body className={`${sans.variable} antialiased`}>
          <TheHeader />
          {children}   
          <TheFooter />       
        </body>
      </html>
    </AuthWrapper>
  );
}
