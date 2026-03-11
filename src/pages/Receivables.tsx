import React from 'react';
import { Header } from '../components/Header';
import { motion } from 'motion/react';
import { RECEIVABLES } from '../constants';
import { Search, Filter, Download, Calendar, AlertCircle, CheckCircle2, MoreHorizontal } from 'lucide-react';

export function Receivables() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 flex flex-col overflow-hidden"
    >
      <Header title="Cuentas por Cobrar" />
      
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Seguimiento de Pagos</h1>
            <p className="text-sm text-slate-500">Monitorea las facturas pendientes y vencidas de tus clientes.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
              <Download className="size-4" /> Exportar Reporte
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total por Cobrar</p>
            <h3 className="text-2xl font-black text-slate-900 mt-1">$7,590.00</h3>
            <p className="text-xs text-slate-500 mt-2">12 clientes con deuda</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm bg-red-50/30">
            <p className="text-xs font-bold text-red-400 uppercase tracking-wider">Total Vencido</p>
            <h3 className="text-2xl font-black text-red-600 mt-1">$5,900.00</h3>
            <div className="flex items-center gap-1 mt-2 text-red-500">
              <AlertCircle className="size-3" />
              <span className="text-xs font-bold">Requiere seguimiento urgente</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-sm bg-emerald-50/30">
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Recuperado (Mes)</p>
            <h3 className="text-2xl font-black text-emerald-600 mt-1">$12,400.00</h3>
            <div className="flex items-center gap-1 mt-2 text-emerald-500">
              <CheckCircle2 className="size-3" />
              <span className="text-xs font-bold">+20% vs mes anterior</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar por cliente..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Cliente</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Monto</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Fecha Vencimiento</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Mora</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {RECEIVABLES.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-slate-900">{item.customer}</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-900">{item.amount}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="size-3.5" />
                        {item.dueDate}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {item.daysOverdue > 0 ? (
                        <span className="text-xs font-bold text-red-500">{item.daysOverdue} días</span>
                      ) : (
                        <span className="text-xs text-slate-400">Al día</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                        item.status === 'VENCIDO' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary hover:bg-primary/10 px-3 py-1 rounded text-xs font-bold transition-colors">
                        Cobrar
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
