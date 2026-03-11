import React from 'react';
import { Header } from '../components/Header';
import { motion } from 'motion/react';
import { SALES_DATA } from '../constants';
import { Search, Plus, Filter, Download, FileText, MoreHorizontal, TrendingUp } from 'lucide-react';

export function Sales() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 flex flex-col overflow-hidden"
    >
      <Header title="Registro de Ventas" />
      
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Ventas y Facturación</h1>
            <p className="text-sm text-slate-500">Gestiona tus facturas y transacciones de venta.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
              <Download className="size-4" /> Exportar
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-sm">
              <Plus className="size-4" /> Nueva Venta
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Facturado (Mes)</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">$24,500.00</h3>
            <div className="flex items-center gap-1 mt-2 text-emerald-500">
              <TrendingUp className="size-3" />
              <span className="text-xs font-bold">+15% vs mes anterior</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pendiente de Cobro</p>
            <h3 className="text-2xl font-black text-amber-600 mt-1">$4,250.00</h3>
            <p className="text-xs text-slate-500 mt-2">8 facturas pendientes</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ventas Hoy</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">$1,240.00</h3>
            <p className="text-xs text-slate-500 mt-2">12 transacciones</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar por factura o cliente..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50">
                <Filter className="size-3.5" /> Filtros
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Factura</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Cliente</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Fecha</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Artículos</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {SALES_DATA.map((sale) => (
                  <tr key={sale.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 bg-slate-100 rounded flex items-center justify-center text-slate-500">
                          <FileText className="size-4" />
                        </div>
                        <span className="text-sm font-bold text-slate-900">{sale.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">{sale.customer}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{sale.date}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{sale.items}</td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-900">{sale.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                        sale.status === 'Pagado' ? 'bg-emerald-100 text-emerald-600' : 
                        sale.status === 'Pendiente' ? 'bg-amber-100 text-amber-600' : 
                        'bg-red-100 text-red-600'
                      }`}>
                        {sale.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreHorizontal className="size-4" />
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
