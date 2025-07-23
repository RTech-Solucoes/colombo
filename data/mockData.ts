import { KPIData, Product, TransporterPerformance, SalesData, CategoryData, Order } from '@/types/dashboard';

export const kpiData: KPIData[] = [
  {
    id: '1',
    title: 'Vendas Totais',
    value: 'R$ 9.328,55',
    change: 15.6,
    changeType: 'increase',
    period: 'esta semana',
    icon: 'DollarSign'
  },
  {
    id: '2',
    title: 'Visitantes',
    value: '12.302',
    change: 12.7,
    changeType: 'increase',
    period: 'esta semana',
    icon: 'Users'
  },
  {
    id: '3',
    title: 'Pedidos',
    value: '963',
    change: -2.1,
    changeType: 'decrease',
    period: 'esta semana',
    icon: 'ShoppingCart'
  },
  {
    id: '4',
    title: 'Taxa de Conversão',
    value: '7,8%',
    change: 3.2,
    changeType: 'increase',
    period: 'este mês',
    icon: 'TrendingUp'
  }
];

export const topProducts: Product[] = [
  { id: '1', name: 'Fones de Ouvido Sem Fio', sales: 1420, stock: 45, category: 'Eletrônicos' },
  { id: '2', name: 'Relógio Inteligente', sales: 1280, stock: 23, category: 'Eletrônicos' },
  { id: '3', name: 'Suporte para Notebook', sales: 980, stock: 8, category: 'Acessórios' },
  { id: '4', name: 'Cabo USB-C', sales: 850, stock: 156, category: 'Acessórios' },
  { id: '5', name: 'Alto-falante Bluetooth', sales: 720, stock: 67, category: 'Eletrônicos' },
  { id: '6', name: 'Mouse Sem Fio', sales: 650, stock: 12, category: 'Eletrônicos' },
  { id: '7', name: 'Teclado Mecânico', sales: 580, stock: 34, category: 'Acessórios' },
  { id: '8', name: 'Webcam HD', sales: 520, stock: 28, category: 'Eletrônicos' },
  { id: '9', name: 'Capa para Celular', sales: 430, stock: 15, category: 'Acessórios' },
  { id: '10', name: 'Base de Carregamento', sales: 320, stock: 9, category: 'Eletrônicos' }
];

export const lowStockProducts: Product[] = [
  { id: '3', name: 'Suporte para Notebook', sales: 980, stock: 8, category: 'Acessórios' },
  { id: '6', name: 'Mouse Sem Fio', sales: 650, stock: 12, category: 'Eletrônicos' },
  { id: '7', name: 'Capa para Celular', sales: 430, stock: 15, category: 'Acessórios' },
  { id: '8', name: 'Base de Carregamento', sales: 320, stock: 9, category: 'Eletrônicos' }
];

export const transporterData: TransporterPerformance[] = [
  { id: '1', name: 'Entrega Rápida', onTimeRate: 94.2, totalDeliveries: 1240, avgDeliveryTime: 2.1, rating: 4.8 },
  { id: '2', name: 'Express Logística', onTimeRate: 89.7, totalDeliveries: 890, avgDeliveryTime: 2.8, rating: 4.5 },
  { id: '3', name: 'Correios Rápidos', onTimeRate: 76.3, totalDeliveries: 1560, avgDeliveryTime: 3.2, rating: 3.9 },
  { id: '4', name: 'Transporte Ágil', onTimeRate: 68.1, totalDeliveries: 670, avgDeliveryTime: 4.1, rating: 3.2 }
];

export const salesData: SalesData[] = [
  { date: '28 Feb', earnings: 32, costs: 28 },
  { date: '04 Thu', earnings: 38, costs: 32 },
  { date: '06 Fri', earnings: 45, costs: 35 },
  { date: '08 Sat', earnings: 42, costs: 38 },
  { date: '07 Sun', earnings: 55, costs: 42 },
  { date: '09 Mon', earnings: 48, costs: 40 },
  { date: '10 Tue', earnings: 52, costs: 45 },
  { date: '11 Wed', earnings: 38, costs: 32 },
  { date: '12 Thu', earnings: 44, costs: 38 },
  { date: '13 Fri', earnings: 58, costs: 48 },
  { date: '14 Sat', earnings: 46, costs: 42 },
  { date: '15 Sun', earnings: 52, costs: 44 },
  { date: '16 Mon', earnings: 48, costs: 40 },
  { date: '17 Tue', earnings: 55, costs: 45 }
];

export const categoryData: CategoryData[] = [
  { name: 'Eletrônicos', value: 6200, percentage: 68 },
  { name: 'Acessórios', value: 2100, percentage: 23 },
  { name: 'Roupas', value: 800, percentage: 9 }
];

export const pendingOrders: Order[] = [
  { id: 'ORD-001', customer: 'John Smith', status: 'pendente', total: 299.99, date: '2024-01-15' },
  { id: 'ORD-002', customer: 'Sarah Johnson', status: 'processando', total: 159.50, date: '2024-01-15' },
  { id: 'ORD-003', customer: 'Mike Davis', status: 'pendente', total: 89.99, date: '2024-01-14' },
  { id: 'ORD-004', customer: 'Emily Brown', status: 'processando', total: 249.99, date: '2024-01-14' }
];