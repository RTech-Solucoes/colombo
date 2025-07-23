'use client';

import { motion } from 'framer-motion';
import { TransporterPerformance } from '@/types/dashboard';
import { Truck, Star, Clock, CheckCircle } from 'lucide-react';

interface TransporterPerformanceChartProps {
  data: TransporterPerformance[];
}

const TransporterPerformanceChart = ({ data }: TransporterPerformanceChartProps) => {
  const getPerformanceColor = (rate: number) => {
    if (rate >= 90) return { bg: 'bg-green-500', text: 'text-green-600', bgLight: 'bg-green-50' };
    if (rate >= 80) return { bg: 'bg-yellow-500', text: 'text-yellow-600', bgLight: 'bg-yellow-50' };
    return { bg: 'bg-red-500', text: 'text-red-600', bgLight: 'bg-red-50' };
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

  const avgOnTimeRate = data.reduce((sum, t) => sum + t.onTimeRate, 0) / data.length;
  const avgRating = data.reduce((sum, t) => sum + t.rating, 0) / data.length;
  const totalDeliveries = data.reduce((sum, t) => sum + t.totalDeliveries, 0);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Truck className="w-5 h-5 mr-2" />
          Desempenho das Transportadoras
        </h3>
      </div>

      {/* Visual Performance Cards */}
      <div className="rounded-lg overflow-hidden">
        {data.map((transporter, index) => {
          const performanceColor = getPerformanceColor(transporter.onTimeRate);
          const performancePercentage = transporter.onTimeRate;
          
          return (
            <motion.div
              key={transporter.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className={`pb-4 ${index > 0 && "border-gray-300 border-t-2 pt-4"}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Truck className="w-4 h-4 text-gray-900 font-semibold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-black">{transporter.name}</h4>
                  </div>
                </div>
                
                {/* Performance Badge */}
                <div className="flex flex-col items-end gap-2">
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${performanceColor.text} ${performanceColor.bgLight}`}>
                    {transporter.onTimeRate}%
                  </div>
                  <div className="flex items-center justify-end text-xs text-black font-semibold mb-1">
                    <span>Taxa de Entrega no Prazo</span>
                  </div>
                </div>
              </div>

              {/* Performance Bar */}
              <div className="mb-3">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${performancePercentage}%` }}
                    transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
                    className={`h-full ${performanceColor.bg} rounded-full`}
                  />
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="flex justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-3 h-3 text-black" />
                  <span className="text-black font-semibold">{transporter.avgDeliveryTime} dias</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-black" />
                  <span className="text-black font-semibold">{transporter.totalDeliveries.toLocaleString()} entregas</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TransporterPerformanceChart;