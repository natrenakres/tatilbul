import type { Metadata } from 'next';
import { geistSans, geistMono } from '@/src/core/font';

import "@/src/core/styles/globals.css";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className='mx-auto max-w-7xl px-4 py-6'>
          <header>
            <nav>
              <ul>
                <li>
                  <a href='/profile'>Profile</a>
                </li>
              </ul>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
