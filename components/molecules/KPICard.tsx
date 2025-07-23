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
      className={cn(
        'relative p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300',
        index === 0 && 'bg-gray-900 text-white border-gray-800'
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <div className={cn(
              'p-2 rounded-lg',
              index === 0 ? 'bg-gray-800' : 'bg-gray-50'
            )}>
              <Icon className={cn(
                'w-4 h-4',
                index === 0 ? 'text-gray-300' : 'text-gray-600'
              )} />
            </div>
            <span className={cn(
              'text-sm font-medium',
              index === 0 ? 'text-gray-300' : 'text-gray-600'
            )}>
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
            
            <div className="flex items-center space-x-2">
              <div className={cn(
                'flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium',
                isPositive 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700',
                index === 0 && isPositive && 'bg-green-900/20 text-green-400',
                index === 0 && !isPositive && 'bg-red-900/20 text-red-400'
              )}>
                {isPositive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span>{Math.abs(data.change)}%</span>
              </div>
              <span className={cn(
                'text-xs',
                index === 0 ? 'text-gray-400' : 'text-gray-500'
              )}>
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