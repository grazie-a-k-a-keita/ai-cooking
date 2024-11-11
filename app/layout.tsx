import './globals.css';

import { Noto_Sans_JP } from 'next/font/google';
import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
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
    <html lang='ja' suppressHydrationWarning>
      <body className={cn(notoSansJp.className, 'min-h-dvh bg-muted/10')}>
        <ThemeProvider attribute='class' defaultTheme='system' disableTransitionOnChange enableSystem>
          <Header />
          <main className='container'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
