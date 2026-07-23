import type { Metadata, Viewport } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Emil Molina.',
  description: 'Portfolio of Emil Jonathan C. Molina, AI engineer and software developer.',
  applicationName: 'Emil Molina.',
  manifest: '/manifest.json',
  metadataBase: new URL('https://ag0nkz.github.io'),
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Emil Molina.',
  },
  openGraph: {
    title: 'Emil Molina.',
    description: 'Aspiring AI Engineer & Software Developer portfolio.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}