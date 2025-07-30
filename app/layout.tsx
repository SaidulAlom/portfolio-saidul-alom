import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-saidul-alom.netlify.app'),
  title: 'Saidul Alom - Full Stack Developer',
  description: 'Full Stack Developer | AI/ML Enthusiast | B.Tech CSE 2025. Passionate about turning ideas into web solutions.',
  keywords: 'Full Stack Developer, AI/ML, React, Next.js, TypeScript, Portfolio',
  authors: [{ name: 'Saidul Alom' }],
  openGraph: {
    title: 'Saidul Alom - Full Stack Developer',
    description: 'Full Stack Developer | AI/ML Enthusiast | B.Tech CSE 2025',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}