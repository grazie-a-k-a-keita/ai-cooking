import './globals.css';

import { Noto_Sans_JP } from 'next/font/google';
import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Cooking',
  description: 'AIと共に今日の夕飯を考えるアプリ',
};

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(notoSansJp.className, 'min-h-dvh bg-muted/10')}>
        <Header />
        <main className='container'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
