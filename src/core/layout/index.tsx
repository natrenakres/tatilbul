import type { Metadata } from 'next';
import { sans } from '@/src/core/font';

import '@/src/core/styles/globals.css';

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
    <html lang='en'>
      <body className={`${sans.variable} antialiased min-h-screen`}>
        {children}           
      </body>
    </html>    
  );
}
