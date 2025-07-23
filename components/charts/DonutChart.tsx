'use client';

import { motion } from 'framer-motion';
import { CategoryData } from '@/types/dashboard';

interface DonutChartProps {
  data: CategoryData[];
  size?: number;
}

const DonutChart = ({ data, size = 160 }: DonutChartProps) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = size / 2 - 20;
  const innerRadius = radius * 0.6;
  const center = size / 2;

  const colors = ['#1f2937', '#6b7280', '#d1d5db'];
  
  let currentAngle = -90;
  
  const createPath = (percentage: number, startAngle: number) => {
    const angle = (percentage / 100) * 360;
    const endAngle = startAngle + angle;
    
    const x1 = center + radius * Math.cos((startAngle * Math.PI) / 180);
    const y1 = center + radius * Math.sin((startAngle * Math.PI) / 180);
    const x2 = center + radius * Math.cos((endAngle * Math.PI) / 180);
    const y2 = center + radius * Math.sin((endAngle * Math.PI) / 180);
    
    const x3 = center + innerRadius * Math.cos((endAngle * Math.PI) / 180);
    const y3 = center + innerRadius * Math.sin((endAngle * Math.PI) / 180);
    const x4 = center + innerRadius * Math.cos((startAngle * Math.PI) / 180);
    const y4 = center + innerRadius * Math.sin((startAngle * Math.PI) / 180);
    
    const largeArc = angle > 180 ? 1 : 0;
    
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`;
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Top Categories</h3>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="relative">
          <svg width={size} height={size}>
            {data.map((item, index) => {
              const path = createPath(item.percentage, currentAngle);
              const angle = currentAngle;
              currentAngle += (item.percentage / 100) * 360;
              
              return (
                <motion.path
                  key={item.name}
                  d={path}
                  fill={colors[index]}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                />
              );
            })}
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                ${(total / 1000).toFixed(1)}k
              </div>
              <div className="text-sm text-gray-500">Total</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          {data.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="flex items-center space-x-3"
            >
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[index] }}
              />
              <div className="flex-1">
                <div className="font-medium text-gray-900">{item.name}</div>
                <div className="text-sm text-gray-500">{item.percentage}%</div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">
                  ${(item.value / 1000).toFixed(1)}k
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;