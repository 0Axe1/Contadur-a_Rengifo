import React from 'react';
import { Header } from '../components/Header';
import { DAILY_STATS, PAYMENT_METHODS, TOP_PRODUCTS } from '../constants';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { Calendar, Clock, TrendingUp, TrendingDown, Info, ArrowUpRight, Package, Download, FileText, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const hourlyData = [
  { hour: '08:00', value: 420 },
  { hour: '10:00', value: 650 },
  { hour: '12:00', value: 1100 },
  { hour: '14:00', value: 1450 },
  { hour: '16:00', value: 980 },
  { hour: '18:00', value: 720 },
  { hour: '20:00', value: 450 },
];

export function DailyReports() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col overflow-hidden"
    >
      <Header title="Rendimiento de Ventas Diarias" />
      
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        <div className="mb-8">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-2">Informe de Ventas de Hoy</h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-500">
            <p className="flex items-center gap-1.5 text-sm font-medium">
              <Calendar className="size-4" /> 24 de Octubre, 2023
            </p>
            <p className="flex items-center gap-1.5 text-sm font-medium">
              <Clock className="size-4" /> Última actualización hace 2 min
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 text-slate-700 hover:bg-slate-50 transition-colors">
            <Download className="size-4" /> Exportar PDF
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-sm">
            <FileText className="size-4" /> Enviar por Correo
          </button>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <FileText className="size-40" />
          </div>
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="size-5 text-emerald-400" />
              Resumen Ejecutivo del Día
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Ingresos Brutos</p>
                <p className="text-3xl font-black">$12,450.00</p>
                <p className="text-emerald-400 text-xs font-bold mt-2 flex items-center gap-1">
                  <TrendingUp className="size-3" /> +12% vs ayer
                </p>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Impuestos Estimados (IVA)</p>
                <p className="text-3xl font-black">$2,365.50</p>
                <p className="text-slate-400 text-xs font-bold mt-2">Calculado al 19%</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Margen Operativo</p>
                <p className="text-3xl font-black">30.2%</p>
                <p className="text-emerald-400 text-xs font-bold mt-2 flex items-center gap-1">
                  <ArrowUpRight className="size-3" /> Dentro del objetivo
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-slate-900">Ventas por Hora</h3>
              <select className="bg-slate-100 border-none rounded-lg text-xs font-bold py-1.5 px-3 outline-none">
                <option>Hoy</option>
                <option>Ayer</option>
              </select>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="hour" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 10 }} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                  />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="value" fill="#2094f3" radius={[4, 4, 0, 0]} barSize={40}>
                    {hourlyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.hour === '14:00' ? '#2094f3' : '#dbeafe'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-8">Métodos de Pago</h3>
            <div className="space-y-6">
              {PAYMENT_METHODS.map((method) => (
                <div key={method.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-700">{method.name}</span>
                    <span className="text-sm font-bold text-slate-900">{method.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${method.percentage}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={cn("h-full rounded-full", method.color)} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="xl:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900">Productos Más Vendidos</h3>
              <button className="text-primary text-sm font-bold hover:underline">Ver Todo</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-slate-400 text-[10px] uppercase tracking-wider font-bold border-b border-slate-100">
                  <tr>
                    <th className="pb-4">Nombre del Producto</th>
                    <th className="pb-4">Categoría</th>
                    <th className="pb-4">Ventas</th>
                    <th className="pb-4">Ingresos</th>
                    <th className="pb-4 text-right">Tendencia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {TOP_PRODUCTS.map((product) => (
                    <tr key={product.name} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded bg-slate-100 flex items-center justify-center text-slate-400">
                            <Package className="size-5" />
                          </div>
                          <span className="text-sm font-semibold text-slate-900">{product.name}</span>
                        </div>
                      </td>
                      <td className="py-4 text-sm text-slate-500">{product.category}</td>
                      <td className="py-4 text-sm font-bold text-slate-900">{product.sales}</td>
                      <td className="py-4 text-sm font-bold text-slate-900">{product.revenue}</td>
                      <td className="py-4 text-right">
                        {product.trend === 'up' ? (
                          <TrendingUp className="size-4 text-emerald-500 ml-auto" />
                        ) : (
                          <TrendingDown className="size-4 text-rose-500 ml-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-primary p-6 rounded-xl relative overflow-hidden flex flex-col justify-between text-white shadow-lg shadow-primary/20">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <TrendingUp className="size-32 scale-150" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Meta de Beneficio Diario</h3>
              <p className="text-white/70 text-sm">Objetivo: $5,000.00</p>
            </div>
            <div className="mt-8">
              <div className="flex items-end justify-between mb-2">
                <span className="text-3xl font-black">$3,735.00</span>
                <span className="text-sm font-bold">74.7%</span>
              </div>
              <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '74.7%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="bg-white h-full rounded-full" 
                />
              </div>
            </div>
            <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="flex items-start gap-3">
                <Info className="size-4 shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">
                  Estás a $1,265.00 de tu meta diaria. El rendimiento ha subido un 8% en comparación con ayer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
