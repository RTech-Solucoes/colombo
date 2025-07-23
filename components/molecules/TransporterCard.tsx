'use client';

import { motion } from 'framer-motion';
import { TransporterPerformance } from '@/types/dashboard';
import Badge from '@/components/atoms/Badge';
import { Truck, Clock, Star } from 'lucide-react';

interface TransporterCardProps {
  transporter: TransporterPerformance;
  index: number;
}

const TransporterCard = ({ transporter, index }: TransporterCardProps) => {
  const getPerformanceVariant = (rate: number) => {
    if (rate >= 90) return 'success';
    if (rate >= 80) return 'warning';
    return 'danger';
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ x: 4 }}
      className="p-4 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
            <Truck className="w-4 h-4 text-gray-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{transporter.name}</h4>
            <div className="flex items-center space-x-1 mt-1">
              {getRatingStars(transporter.rating)}
              <span className="text-sm text-gray-500 ml-1">
                ({transporter.rating})
              </span>
            </div>
          </div>
        </div>
        
        <Badge variant={getPerformanceVariant(transporter.onTimeRate)}>
          {transporter.onTimeRate}%
        </Badge>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="flex items-center space-x-1 text-gray-500">
            <Clock className="w-3 h-3" />
            <span>Tempo Médio</span>
          </div>
          <div className="font-medium text-gray-900 mt-1">
            {transporter.avgDeliveryTime} dias
          </div>
        </div>
        
        <div>
          <div className="text-gray-500">Entregas</div>
          <div className="font-medium text-gray-900 mt-1">
            {transporter.totalDeliveries.toLocaleString()}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TransporterCard;