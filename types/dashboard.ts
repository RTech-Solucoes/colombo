export interface KPIData {
  id: string;
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  period: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  sales: number;
  stock: number;
  category: string;
  image?: string;
}

export interface TransporterPerformance {
  id: string;
  name: string;
  onTimeRate: number;
  totalDeliveries: number;
  avgDeliveryTime: number;
  rating: number;
}

export interface SalesData {
  date: string;
  earnings: number;
  costs: number;
}

export interface CategoryData {
  name: string;
  value: number;
  percentage: number;
}

export interface Order {
  id: string;
  customer: string;
  status: 'pendente' | 'processando' | 'enviado' | 'entregue';
  total: number;
  date: string;
}