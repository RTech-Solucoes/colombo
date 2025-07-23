'use client';

import { Inter } from 'next/font/google';
import Sidebar from '@/components/organisms/Sidebar';
import Header from '@/components/organisms/Header';
import Dashboard from '@/components/organisms/Dashboard';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${inter.className} flex h-screen bg-gray-50`}>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}