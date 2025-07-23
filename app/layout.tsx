import './globals.css';
import type { Metadata } from 'next';
import {Sora} from "next/font/google";

const sans = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Colombo - Dashboard E-commerce',
  description: 'Dashboard moderno de e-commerce para análises e gestão',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/assets/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={sans.className}>
        {children}
      </body>
    </html>
  );
}