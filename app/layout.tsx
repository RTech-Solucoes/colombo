import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Colombo - E-commerce Dashboard',
  description: 'Modern e-commerce dashboard for analytics and management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: 'Sora, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}