import React from 'react';
import { Header } from '../components/Header';
import { INVENTORY } from '../constants';
import { motion } from 'motion/react';
import { Filter, Download, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

export function Inventory() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex-1 flex flex-col overflow-hidden"
    >
      <Header title="Gestión de Inventario" />
      
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Artículos Totales</p>
            <h3 className="text-2xl font-bold mt-1 text-slate-900">1,240</h3>
            <p className="text-xs text-emerald-500 font-medium mt-1">↑ 2.5% desde el mes pasado</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Stock Bajo</p>
            <h3 className="text-2xl font-bold mt-1 text-amber-600">12</h3>
            <p className="text-xs text-amber-500 font-medium mt-1">Requiere atención</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Sin Stock</p>
            <h3 className="text-2xl font-bold mt-1 text-red-600">3</h3>
            <p className="text-xs text-red-500 font-medium mt-1">Reponer inmediatamente</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Valor Total</p>
            <h3 className="text-2xl font-bold mt-1 text-slate-900">$42.8k</h3>
            <p className="text-xs text-slate-400 mt-1">En 12 categorías</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button className="text-sm font-bold text-primary border-b-2 border-primary pb-4 -mb-4 pt-1">Todos los Artículos</button>
              <button className="text-sm font-medium text-slate-500 hover:text-slate-700 pb-4 -mb-4 pt-1">Stock Bajo</button>
              <button className="text-sm font-medium text-slate-500 hover:text-slate-700 pb-4 -mb-4 pt-1">Categorías</button>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
                <Filter className="size-4" />
              </button>
              <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
                <Download className="size-4" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">SKU</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Nombre del Artículo</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Categoría</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Nivel de Stock</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Precio Unitario</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Reorden</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {INVENTORY.map((item) => (
                  <tr key={item.sku} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono font-medium text-slate-600">{item.sku}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{item.category}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className={cn("text-sm font-bold", 
                          item.status === 'STOCK BAJO' ? 'text-amber-600' : 
                          item.status === 'SIN STOCK' ? 'text-red-600' : 'text-slate-900'
                        )}>{item.stock}</span>
                        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={cn("h-full transition-all", 
                              item.status === 'STOCK BAJO' ? 'bg-amber-500' : 
                              item.status === 'SIN STOCK' ? 'bg-red-500' : 'bg-emerald-500'
                            )} 
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{item.price}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{item.reorder}</td>
                    <td className="px-6 py-4">
                      <span className={cn("px-2 py-1 text-[10px] font-bold uppercase rounded-full",
                        item.status === 'EN STOCK' ? 'bg-emerald-100 text-emerald-700' :
                        item.status === 'STOCK BAJO' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      )}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary hover:bg-primary/10 px-3 py-1 rounded text-xs font-bold transition-colors">Actualizar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
            <p className="text-xs text-slate-500">Mostrando 1-5 de 1,240 artículos</p>
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50">
                <ChevronLeft className="size-4" />
              </button>
              <button className="px-3 py-1 text-sm font-bold bg-primary text-white rounded-lg">1</button>
              <button className="px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg">2</button>
              <button className="px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg">3</button>
              <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50">
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
