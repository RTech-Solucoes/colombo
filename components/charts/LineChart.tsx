'use client';

import { motion } from 'framer-motion';
import { SalesData } from '@/types/dashboard';
import {TrendingUp} from "lucide-react";

interface LineChartProps {
  data: SalesData[];
  height?: number;
}

const LineChart = ({ data, height = 300 }: LineChartProps) => {
  const maxEarnings = Math.max(...data.map(d => d.earnings));
  const maxCosts = Math.max(...data.map(d => d.costs));
  const maxValue = Math.max(maxEarnings, maxCosts);
  const minValue = Math.min(...data.map(d => Math.min(d.earnings, d.costs)));
  
  const padding = 40;
  const chartHeight = height - 60;

  const getX = (index: number, width: number) => padding + (index * (width - padding * 2)) / (data.length - 1);
  const getY = (value: number) => chartHeight - ((value - minValue) / (maxValue - minValue)) * (chartHeight - padding) + padding;

  const createPaths = (width: number) => {
    const earningsPath = data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i, width)} ${getY(d.earnings)}`).join(' ');
    const costsPath = data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i, width)} ${getY(d.costs)}`).join(' ');
    const earningsArea = `${earningsPath} L ${getX(data.length - 1, width)} ${chartHeight} L ${getX(0, width)} ${chartHeight} Z`;
    return { earningsPath, costsPath, earningsArea };
  };

  const chartWidth = 800; // viewBox width
  const { earningsPath, costsPath, earningsArea } = createPaths(chartWidth);

  return (
    <div className="w-full">
      <div className="flex items-center justify-start mb-6">
        <TrendingUp className="mr-2"/>
        <h3 className="text-lg font-semibold text-gray-900">Performance de vendas</h3>
        <div className="flex items-center space-x-4 text-sm ml-auto">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Ganhos</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-600">Despesas</span>
          </div>
        </div>
      </div>
      
      <div className="relative w-full">
        <svg width="100%" height={height} className="overflow-visible" viewBox={`0 0 800 ${height}`}>
          <defs>
            <linearGradient id="earningsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>

          <motion.path
            d={earningsArea}
            fill="url(#earningsGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.path
            d={earningsPath}
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <motion.path
            d={costsPath}
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          />

          {data.map((d, i) => (
            <motion.g key={i}>
              <motion.circle
                cx={getX(i, chartWidth)}
                cy={getY(d.earnings)}
                r="4"
                fill="#10b981"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 + i * 0.05 }}
                whileHover={{ scale: 1.5 }}
              />
              <motion.circle
                cx={getX(i, chartWidth)}
                cy={getY(d.costs)}
                r="3"
                fill="#ef4444"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8 + i * 0.05 }}
                whileHover={{ scale: 1.5 }}
              />
            </motion.g>
          ))}

          {data.map((d, i) => (
            <text
              key={i}
              x={getX(i, chartWidth)}
              y={height - 10}
              textAnchor="middle"
              className="text-xs fill-gray-500"
            >
              {d.date.split(' ')[0]}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default LineChart;