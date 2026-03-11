import { 
  LayoutDashboard, 
  ReceiptEuro, 
  ShoppingCart, 
  Package, 
  Users, 
  Truck, 
  Wallet, 
  BarChart3, 
  Settings, 
  LogOut,
  Search,
  Bell,
  Plus,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Clock,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Banknote,
  Smartphone,
  Info,
  CheckCircle2,
  Package2,
  Monitor,
  Keyboard,
  MousePointer2,
  ArrowUpRight
} from 'lucide-react';

export const CLIENT_ACCOUNTS = [
  { id: 'acc-1', name: 'Comercializadora del Norte', taxId: 'NIT 900.123.456-1', type: 'Empresa', color: 'bg-blue-500' },
  { id: 'acc-2', name: 'Inversiones Rivera S.A.S', taxId: 'NIT 800.987.654-2', type: 'Empresa', color: 'bg-emerald-500' },
  { id: 'acc-3', name: 'Juan Pérez - Consultoría', taxId: 'CC 1.020.345.678', type: 'Persona Natural', color: 'bg-amber-500' },
];

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Panel de Control', icon: LayoutDashboard, path: '/' },
  { id: 'sales', label: 'Ventas', icon: ReceiptEuro, path: '/sales' },
  { id: 'purchases', label: 'Compras', icon: ShoppingCart, path: '/purchases' },
  { id: 'inventory', label: 'Inventario', icon: Package, path: '/inventory' },
  { id: 'customers', label: 'Clientes', icon: Users, path: '/customers' },
  { id: 'suppliers', label: 'Proveedores', icon: Truck, path: '/suppliers' },
  { id: 'receivable', label: 'Cuentas por Cobrar', icon: Wallet, path: '/receivable' },
  { id: 'payable', label: 'Cuentas por Pagar', icon: Banknote, path: '/payable' },
];

export const REPORT_ITEMS = [
  { id: 'daily-reports', label: 'Informes Diarios', icon: BarChart3, path: '/daily-reports' },
  { id: 'settings', label: 'Configuración', icon: Settings, path: '/settings' },
];

export const DASHBOARD_STATS = [
  { label: 'Ventas (Hoy)', value: '$4,250.00', trend: '+12.5%', trendType: 'up', icon: TrendingUp, color: 'text-emerald-500', bgColor: 'bg-emerald-500/10' },
  { label: 'Cuentas por Cobrar', value: '$15,400.00', trend: '8 facturas vencidas', trendType: 'warning', icon: Wallet, color: 'text-purple-500', bgColor: 'bg-purple-500/10' },
  { label: 'Cuentas por Pagar', value: '$2,500.00', trend: 'Próximo vencimiento: 2 días', trendType: 'neutral', icon: Banknote, color: 'text-blue-500', bgColor: 'bg-blue-500/10' },
  { label: 'Disponibilidad de Caja', value: '$42,800.00', trend: 'Saldo operativo', trendType: 'neutral', icon: CreditCard, color: 'text-slate-500', bgColor: 'bg-slate-500/10' },
];

export const STOCK_ALERTS = [
  { id: 1, name: 'Mouse Inalámbrico G-Pro', stock: '2 unidades', icon: MousePointer2, status: 'Reponer' },
  { id: 2, name: 'Monitor LG UltraWide 34"', stock: '5 unidades', icon: Monitor, status: 'Reponer' },
  { id: 3, name: 'Teclado Mecánico', stock: '4 unidades', icon: Keyboard, status: 'Reponer' },
];

export const RECENT_TRANSACTIONS = [
  { id: 1, date: '24 Oct, 2023', type: 'Venta', entity: 'Acme Corp Ltd.', amount: '$1,240.00', status: 'COMPLETADO' },
  { id: 2, date: '24 Oct, 2023', type: 'Compra', entity: 'Tech Supplies Inc.', amount: '$850.00', status: 'ENVIADO' },
  { id: 3, date: '23 Oct, 2023', type: 'Venta', entity: 'John Doe', amount: '$45.00', status: 'PENDIENTE' },
  { id: 4, date: '23 Oct, 2023', type: 'Venta', entity: 'Global Retail', amount: '$3,100.00', status: 'COMPLETADO' },
];

export const CUSTOMERS = [
  { id: 1, name: 'John Doe', initials: 'JD', company: 'Acme Corporation', email: 'john.doe@acme.com', phone: '+1 (555) 012-3456', orders: 24, status: 'Activo' },
  { id: 2, name: 'Jane Smith', initials: 'JS', company: 'Global Tech Solutions', email: 'jane.smith@globaltech.io', phone: '+1 (555) 987-6543', orders: 12, status: 'Activo' },
  { id: 3, name: 'Robert Brown', initials: 'RB', company: 'Startup Inc.', email: 'robert@startup.biz', phone: '+44 20 7123 4567', orders: 3, status: 'Pendiente' },
  { id: 4, name: 'Emily White', initials: 'EW', company: 'Retail Masters', email: 'emily.w@retailmasters.com', phone: '+1 (555) 234-5678', orders: 45, status: 'Activo' },
  { id: 5, name: 'Michael Scott', initials: 'MS', company: 'Dunder Mifflin', email: 'michael.scott@dunder.com', phone: '+1 (555) 000-0001', orders: 0, status: 'Inactivo' },
];

export const INVENTORY = [
  { sku: 'WH-00124', name: 'Rodamiento Industrial 45mm', category: 'Ferretería', stock: 452, price: '$12.40', reorder: 100, status: 'EN STOCK', level: 75 },
  { sku: 'WH-00288', name: 'Batería de Polímero de Litio 12V', category: 'Electrónica', stock: 15, price: '$85.00', reorder: 20, status: 'STOCK BAJO', level: 15 },
  { sku: 'WH-00512', name: 'Manguera Hidráulica 10ft', category: 'Neumática', stock: 88, price: '$42.50', reorder: 30, status: 'EN STOCK', level: 60 },
  { sku: 'WH-00341', name: 'Carrete de Cable de Cobre 50m', category: 'Materia Prima', stock: 0, price: '$120.00', reorder: 10, status: 'SIN STOCK', level: 0 },
  { sku: 'WH-00923', name: 'Pernos de Acero M8 (Pack de 100)', category: 'Ferretería', stock: 1120, price: '$5.99', reorder: 200, status: 'EN STOCK', level: 95 },
];

export const DAILY_STATS = [
  { label: 'Ingresos Totales', value: '$12,450.00', trend: '+12%', type: 'up' },
  { label: 'Beneficio Neto', value: '$3,735.00', trend: '+8.4%', type: 'up' },
  { label: 'Pedidos Totales', value: '142', trend: '+5.2%', type: 'up' },
  { label: 'Valor Promedio de Pedido', value: '$87.68', trend: '-2.1%', type: 'down' },
];

export const PAYMENT_METHODS = [
  { name: 'Tarjeta de Crédito', percentage: 65, color: 'bg-primary' },
  { name: 'Efectivo', percentage: 20, color: 'bg-emerald-500' },
  { name: 'Pago Móvil', percentage: 15, color: 'bg-amber-500' },
];

export const SUPPLIERS = [
  { id: 1, name: 'Tech Supplies Inc.', contact: 'Mark Wilson', email: 'orders@techsupplies.com', phone: '+1 (555) 111-2222', category: 'Electrónica', status: 'Activo' },
  { id: 2, name: 'Global Logistics', contact: 'Sarah Jenkins', email: 'sarah@globallogistics.com', phone: '+1 (555) 333-4444', category: 'Transporte', status: 'Activo' },
  { id: 3, name: 'Industrial Parts Co.', contact: 'David Chen', email: 'd.chen@industrialparts.com', phone: '+1 (555) 555-6666', category: 'Ferretería', status: 'Inactivo' },
];

export const RECEIVABLES = [
  { id: 1, customer: 'Acme Corporation', amount: '$1,240.00', dueDate: '2023-11-15', status: 'PENDIENTE', daysOverdue: 0 },
  { id: 2, customer: 'Global Tech Solutions', amount: '$3,100.00', dueDate: '2023-10-20', status: 'VENCIDO', daysOverdue: 15 },
  { id: 3, customer: 'Startup Inc.', amount: '$450.00', dueDate: '2023-11-01', status: 'PENDIENTE', daysOverdue: 0 },
  { id: 4, customer: 'Retail Masters', amount: '$2,800.00', dueDate: '2023-09-30', status: 'VENCIDO', daysOverdue: 35 },
];

export const PAYABLES = [
  { id: 1, supplier: 'Tech Supplies Inc.', amount: '$850.00', dueDate: '2023-11-10', status: 'PENDIENTE', daysOverdue: 0 },
  { id: 2, supplier: 'Global Logistics', amount: '$1,200.00', dueDate: '2023-10-25', status: 'VENCIDO', daysOverdue: 10 },
  { id: 3, supplier: 'Industrial Parts Co.', amount: '$450.00', dueDate: '2023-11-05', status: 'PENDIENTE', daysOverdue: 0 },
];

export const SALES_DATA = [
  { id: 'INV-001', customer: 'Acme Corp', date: '2023-10-24', amount: '$1,240.00', status: 'Pagado', items: 5 },
  { id: 'INV-002', customer: 'John Doe', date: '2023-10-24', amount: '$45.00', status: 'Pendiente', items: 2 },
  { id: 'INV-003', customer: 'Global Retail', date: '2023-10-23', amount: '$3,100.00', status: 'Pagado', items: 12 },
  { id: 'INV-004', customer: 'Startup Inc', date: '2023-10-22', amount: '$850.00', status: 'Cancelado', items: 3 },
];

export const PURCHASES_DATA = [
  { id: 'PO-001', supplier: 'Tech Supplies Inc.', date: '2023-10-24', amount: '$850.00', status: 'Recibido', items: 10 },
  { id: 'PO-002', supplier: 'Global Logistics', date: '2023-10-23', amount: '$1,200.00', status: 'Pendiente', items: 1 },
  { id: 'PO-003', supplier: 'Industrial Parts Co.', date: '2023-10-21', amount: '$450.00', status: 'En Camino', items: 150 },
];

export const TOP_PRODUCTS = [
  { name: 'Mouse Inalámbrico G-Pro', category: 'Electrónica', sales: 124, revenue: '$12,400.00', trend: 'up' },
  { name: 'Monitor LG UltraWide 34"', category: 'Electrónica', sales: 85, revenue: '$34,000.00', trend: 'up' },
  { name: 'Teclado Mecánico RGB', category: 'Electrónica', sales: 64, revenue: '$6,400.00', trend: 'down' },
  { name: 'Silla Ergonómica Pro', category: 'Muebles', sales: 42, revenue: '$14,700.00', trend: 'up' },
];
