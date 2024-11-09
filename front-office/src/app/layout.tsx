import type { Metadata } from 'next';
import { petronaFontFamily } from '@/assets/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Learn.ai',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${petronaFontFamily.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
