'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Avatar from '@/components/atoms/Avatar';
import {
  LayoutDashboard,
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Filter,
  Eye
} from 'lucide-react';

const navigationItems = [
  { icon: Eye, label: 'Overview', active: true },
  { icon: BarChart3, label: 'Summary' },
  { icon: Filter, label: 'Custom view' },
  { icon: Package, label: 'Products' },
  { icon: ShoppingCart, label: 'Orders' },
  { icon: Users, label: 'Customers' }
];

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      className="w-70 bg-gray-900 text-white p-6 flex flex-col h-screen"
    >
      <div className="mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-gray-900 font-bold text-sm">C</span>
          </div>
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
            className={cn(
              'w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200',
              item.active 
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
          <span className="font-medium">Settings</span>
        </motion.button>
        
        <motion.button
          whileHover={{ x: 4 }}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
        >
          <HelpCircle className="w-5 h-5" />
          <span className="font-medium">Help</span>
        </motion.button>
        
        <motion.button
          whileHover={{ x: 4 }}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Log out</span>
        </motion.button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;