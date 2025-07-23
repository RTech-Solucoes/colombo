'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Avatar from '@/components/atoms/Avatar';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Settings,
  LogOut,
  Truck
} from 'lucide-react';

const navigationItems = [
  { icon: LayoutDashboard, label: 'Visão Geral', key: 'overview' },
  { icon: Package, label: 'Produtos', key: 'products' },
  { icon: ShoppingCart, label: 'Pedidos', key: 'orders' },
  { icon: Truck, label: 'Transportadoras', key: 'transporters' }
];

interface SidebarProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
}

const Sidebar = ({ activeScreen, setActiveScreen }: SidebarProps) => {
  return (
    <motion.aside
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      className="w-70 bg-gray-900 text-white p-6 flex flex-col h-screen"
    >
      <div className="mb-8">
        <div className="flex items-center space-x-3">
          <img 
            src="/assets/logo.svg" 
            alt="Logo" 
            className="w-8 h-8"
          />
          <span className="text-xl font-bold">Colombo</span>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {navigationItems.map((item, index) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 4 }}
            onClick={() => setActiveScreen(item.key)}
            className={cn(
              'w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200',
              activeScreen === item.key
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </motion.button>
        ))}
      </nav>

      <div className="space-y-4 border-t border-gray-800 pt-6">
        <motion.button
          whileHover={{ x: 4 }}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
        >
          <Settings className="w-5 h-5" />
          <span className="font-medium">Configurações</span>
        </motion.button>
        
        <motion.button
          whileHover={{ x: 4 }}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sair</span>
        </motion.button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;