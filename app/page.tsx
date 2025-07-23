'use client';

import {useState} from 'react';
import Sidebar from '@/components/organisms/Sidebar';
import Dashboard from '@/components/organisms/Dashboard';
import ProductsScreen from '@/components/organisms/ProductsScreen';
import OrdersScreen from '@/components/organisms/OrdersScreen';
import TransportersScreen from '@/components/organisms/TransportersScreen';


export default function Home() {
  const [activeScreen, setActiveScreen] = useState('overview');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'products':
        return <ProductsScreen />;
      case 'orders':
        return <OrdersScreen />;
      case 'transporters':
        return <TransportersScreen />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      <main className="flex-1 overflow-y-auto">
        {renderScreen()}
      </main>
    </div>
  );
}