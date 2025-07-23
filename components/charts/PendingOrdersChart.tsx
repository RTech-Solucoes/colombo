'use client';

import { motion } from 'framer-motion';
import { Order } from '@/types/dashboard';
import { Clock, DollarSign, ShoppingCart, User } from 'lucide-react';
import Badge from '@/components/atoms/Badge';

interface PendingOrdersChartProps {
  data: Order[];
}

const PendingOrdersChart = ({ data }: PendingOrdersChartProps) => {
  const pendingCount = data.filter(order => order.status === 'pendente').length;
  const processingCount = data.filter(order => order.status === 'processando').length;
  const totalValue = data.reduce((sum, order) => sum + order.total, 0);
  const avgOrderValue = totalValue / data.length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pendente':
        return { bg: 'bg-yellow-500', text: 'text-yellow-600', bgLight: 'bg-yellow-50', border: 'border-yellow-200' };
      case 'processando':
        return { bg: 'bg-blue-500', text: 'text-blue-600', bgLight: 'bg-blue-50', border: 'border-blue-200' };
      default:
        return { bg: 'bg-gray-500', text: 'text-gray-600', bgLight: 'bg-gray-50', border: 'border-gray-200' };
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Pedidos Pendentes
        </h3>
        <Badge variant="warning">{data.length} pendentes</Badge>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-4 bg-gray-100 gap-3 mb-6 rounded-lg overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="p-4 text-center"
        >
          <div className="text-2xl font-bold text-yellow-600">{pendingCount}</div>
          <div className="text-xs text-yellow-500">Aguardando</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="border-l-2 border-gray-200 p-4 text-center"
        >
          <div className="text-2xl font-bold text-blue-600">{processingCount}</div>
          <div className="text-xs text-blue-500">Processando</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="border-l-2 border-gray-200 p-3 text-center"
        >
          <div className="flex items-center justify-center mb-1">
            <DollarSign className="w-4 h-4 text-green-600 mr-1" />
            <span className="text-lg font-bold text-green-600">
              R$ {totalValue.toFixed(0)}
            </span>
          </div>
          <div className="text-xs text-green-500">Valor Total</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="p-3 border-l-2 border-gray-200 text-center"
        >
          <div className="flex items-center justify-center mb-1">
            <ShoppingCart className="w-4 h-4 text-purple-600 mr-1" />
            <span className="text-lg font-bold text-purple-600">
              R$ {avgOrderValue.toFixed(0)}
            </span>
          </div>
          <div className="text-xs text-purple-500">Ticket Médio</div>
        </motion.div>
      </div>

      {/* Visual Order Cards */}
      <div className="space-y-2 overflow-y-auto">
        {data.map((order, index) => {
          const statusColor = getStatusColor(order.status);
          const orderValue = order.total;
          const valuePercentage = (orderValue / Math.max(...data.map(o => o.total))) * 100;
          
          return (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className={`flex items-center justify-between ${index > 0 && "border-t-2 border-gray-300 pt-4"}`}
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                {/* Order Icon */}
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 text-gray-900" />
                </div>
                
                {/* Order Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900 truncate">
                      {order.id}
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      R$ {order.total.toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500 truncate max-w-[100px]">
                        {order.customer}
                      </span>
                    </div>
                    
                    {/* Value Bar */}
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${valuePercentage}%` }}
                          transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
                          className={`h-full ${statusColor.bg} rounded-full`}
                        />
                      </div>
                      <Badge variant={order.status === 'pendente' ? 'warning' : 'info'} size="sm">
                        {order.status === 'pendente' ? 'pendente' : 'processando'}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PendingOrdersChart;