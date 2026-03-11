import React from 'react';
import { Header } from '../components/Header';
import { CUSTOMERS } from '../constants';
import { motion } from 'motion/react';
import { MoreHorizontal, Download, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function Customers() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex-1 flex flex-col overflow-hidden"
    >
      <Header title="CRM / Clientes" />
      
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        <div className="flex flex-wrap justify-between items-end gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Directorio de Clientes</h1>
            <p className="text-slate-500">Gestiona las relaciones con los clientes, realiza un seguimiento del historial de pedidos y monitorea las métricas de compromiso.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 text-slate-700 hover:bg-slate-50 transition-colors">
              <Download className="size-4" /> Exportar CSV
            </button>
            <button className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 text-slate-700 hover:bg-slate-50 transition-colors">
              <Filter className="size-4" /> Filtros
            </button>
          </div>
        </div>

        <div className="border-b border-slate-200">
          <div className="flex gap-8">
            <button className="border-b-2 border-primary text-primary px-1 pb-4 text-sm font-bold">Todos los Clientes</button>
            <button className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 px-1 pb-4 text-sm font-semibold transition-colors">Clientes Activos</button>
            <button className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 px-1 pb-4 text-sm font-semibold transition-colors">Prospectos Pendientes</button>
            <button className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 px-1 pb-4 text-sm font-semibold transition-colors">Inactivos</button>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Nombre de Contacto</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Empresa</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Correo Electrónico</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Teléfono</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Pedidos Totales</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {CUSTOMERS.map((customer) => (
                  <tr key={customer.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "size-9 rounded-full flex items-center justify-center font-bold text-xs",
                          customer.initials === 'JD' ? 'bg-primary/10 text-primary' :
                          customer.initials === 'JS' ? 'bg-purple-100 text-purple-600' :
                          customer.initials === 'RB' ? 'bg-orange-100 text-orange-600' :
                          customer.initials === 'EW' ? 'bg-blue-100 text-blue-600' :
                          'bg-slate-100 text-slate-600'
                        )}>
                          {customer.initials}
                        </div>
                        <span className="text-sm font-semibold text-slate-900">{customer.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{customer.company}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{customer.email}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{customer.phone}</td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 text-center">{customer.orders}</td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                        customer.status === 'Active' ? 'bg-emerald-100 text-emerald-800' :
                        customer.status === 'Pending' ? 'bg-amber-100 text-amber-800' :
                        'bg-slate-100 text-slate-800'
                      )}>
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 group-hover:text-slate-600 transition-colors">
                        <MoreHorizontal className="size-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100">
            <p className="text-sm text-slate-500">Mostrando 5 de 1,240 clientes</p>
            <div className="flex gap-2">
              <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 disabled:opacity-50">
                <ChevronLeft className="size-5" />
              </button>
              <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50">
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
