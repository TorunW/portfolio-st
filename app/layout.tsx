import type { Metadata } from 'next';
import { JetBrains_Mono, Syne } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const syne = Syne({
  variable: '--font-syne-family',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'Torun Wikström - Portfolio',
  description:
    'Junior QA Engineer | ISTQB Certified | Background in Web Development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-nighteye='disabled' suppressHydrationWarning>
      <body
        className={`${syne.variable} ${jetbrainsMono.variable} bg-bg text-ink font-mono text-sm leading-relaxed antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
