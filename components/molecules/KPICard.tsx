'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { KPIData } from '@/types/dashboard';
import { DollarSign, Users, ShoppingCart, TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  data: KPIData;
  index: number;
}

const iconMap = {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp
};

const KPICard = ({ data, index }: KPICardProps) => {
  const Icon = iconMap[data.icon as keyof typeof iconMap] || TrendingUp;
  const isPositive = data.changeType === 'increase';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative p-6 rounded-2xl border border-gray-800 bg-gray-900 text-white shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <div className="p-2 rounded-lg bg-gray-800">
              <Icon className="w-4 h-4 text-gray-300" />
            </div>
            <span className="text-sm font-medium text-gray-300">
              {data.title}
            </span>
          </div>
          
          <div className="space-y-2">
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="text-2xl font-bold"
            >
              {data.value}
            </motion.div>
            
            {/* Mini progress bar for visual representation */}
            <div className="mt-2 mb-1">
              <div className="h-1 rounded-full overflow-hidden bg-gray-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(Math.abs(data.change) * 5, 100)}%` }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.8 }}
                  className={cn(
                    'h-full rounded-full',
                    isPositive ? 'bg-green-400' : 'bg-red-400'
                  )}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className={cn(
                'flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium',
                isPositive 
                  ? 'bg-green-900/20 text-green-400' 
                  : 'bg-red-900/20 text-red-400'
              )}>
                {isPositive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span>{Math.abs(data.change)}%</span>
              </div>
              <span className="text-xs text-gray-400">
                {data.period}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default KPICard;