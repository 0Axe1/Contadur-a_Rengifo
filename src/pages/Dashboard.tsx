import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Header } from '../components/Header';
import { DASHBOARD_STATS, STOCK_ALERTS, RECENT_TRANSACTIONS } from '../constants';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';
import { 
  MoreHorizontal, 
  Plus, 
  FileText, 
  AlertTriangle, 
  Clock, 
  TrendingUp, 
  CreditCard, 
  Wallet 
} from 'lucide-react';
import { cn } from '../lib/utils';

const data = [
  { name: 'Mon', sales: 4000, purchases: 2400 },
  { name: 'Tue', sales: 3000, purchases: 1398 },
  { name: 'Wed', sales: 2000, purchases: 9800 },
  { name: 'Thu', sales: 2780, purchases: 3908 },
  { name: 'Fri', sales: 1890, purchases: 4800 },
  { name: 'Sat', sales: 2390, purchases: 3800 },
  { name: 'Sun', sales: 3490, purchases: 4300 },
];

export function Dashboard() {
  const { selectedAccount } = useOutletContext<{ selectedAccount: any }>();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 flex flex-col overflow-hidden"
    >
      <Header title={`Panel Financiero - ${selectedAccount.name}`} />
      
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Resumen Contable</h2>
            <p className="text-slate-500">Estado financiero y operativo actualizado al instante.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
              <Plus className="size-4" /> Nueva Factura
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-sm">
              <FileText className="size-4" /> Generar Reporte
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DASHBOARD_STATS.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                  <h3 className="text-2xl font-black mt-1 text-slate-900">{stat.value}</h3>
                </div>
                <div className={cn("p-2 rounded-lg", stat.bgColor, stat.color)}>
                  <stat.icon className="size-5" />
                </div>
              </div>
              <p className={cn("text-xs mt-4 font-bold flex items-center gap-1", 
                stat.trendType === 'up' ? 'text-emerald-600' : 
                stat.trendType === 'warning' ? 'text-amber-600' : 'text-slate-500'
              )}>
                {stat.trend}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="font-bold text-slate-900">Flujo de Caja</h4>
                <p className="text-xs text-slate-500">Comparativa de ingresos y egresos semanales</p>
              </div>
              <select className="text-xs font-bold border-slate-200 bg-slate-50 rounded-lg focus:ring-primary py-1.5 px-3 outline-none">
                <option>Esta Semana</option>
                <option>Mes Pasado</option>
              </select>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                  />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="sales" name="Ingresos" fill="#2094f3" radius={[4, 4, 0, 0]} barSize={24} />
                  <Bar dataKey="purchases" name="Egresos" fill="#e2e8f0" radius={[4, 4, 0, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
            <h4 className="font-bold text-slate-900 mb-6">Alertas de Gestión</h4>
            <div className="space-y-4 flex-1">
              <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="size-5 text-amber-500 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-amber-900">Stock Crítico</p>
                    <p className="text-xs text-amber-700 mt-1">12 artículos por debajo del mínimo. Se recomienda reponer.</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                <div className="flex items-start gap-3">
                  <Clock className="size-5 text-red-500 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-red-900">Pagos Vencidos</p>
                    <p className="text-xs text-red-700 mt-1">8 facturas de clientes han superado la fecha límite.</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                <div className="flex items-start gap-3">
                  <TrendingUp className="size-5 text-emerald-500 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-emerald-900">Meta Diaria</p>
                    <p className="text-xs text-emerald-700 mt-1">Has alcanzado el 85% de tu meta de ventas hoy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-slate-900">Últimos Movimientos</h4>
              <p className="text-xs text-slate-500">Registro de las transacciones más recientes</p>
            </div>
            <button className="text-primary text-sm font-bold hover:underline">Ver Todo</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-wider font-bold">
                  <th className="px-6 py-4">Fecha</th>
                  <th className="px-6 py-4">Concepto</th>
                  <th className="px-6 py-4">Entidad</th>
                  <th className="px-6 py-4">Monto</th>
                  <th className="px-6 py-4">Estado</th>
                  <th className="px-6 py-4 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {RECENT_TRANSACTIONS.map((tx) => (
                  <tr key={tx.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">{tx.date}</td>
                    <td className={cn("px-6 py-4 text-sm font-bold", 
                      tx.type === 'Venta' ? 'text-emerald-600' : 'text-blue-600'
                    )}>{tx.type}</td>
                    <td className="px-6 py-4 text-sm text-slate-900 font-bold">{tx.entity}</td>
                    <td className="px-6 py-4 text-sm font-black text-slate-900">{tx.amount}</td>
                    <td className="px-6 py-4">
                      <span className={cn("px-2 py-1 text-[10px] font-black rounded-full uppercase",
                        tx.status === 'COMPLETADO' ? 'bg-emerald-100 text-emerald-700' :
                        tx.status === 'ENVIADO' ? 'bg-blue-100 text-blue-700' :
                        'bg-amber-100 text-amber-700'
                      )}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 group-hover:text-primary transition-colors">
                        <MoreHorizontal className="size-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
