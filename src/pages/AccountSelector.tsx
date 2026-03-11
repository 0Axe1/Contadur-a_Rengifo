import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLIENT_ACCOUNTS } from '../constants';
import { Plus, Search, Building2, User, ArrowRight, X, Check } from 'lucide-react';
import { cn } from '../lib/utils';

interface AccountSelectorProps {
  onSelect: (account: any) => void;
}

export function AccountSelector({ onSelect }: AccountSelectorProps) {
  const [isCreating, setIsCreating] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newAccount, setNewAccount] = useState({ name: '', taxId: '', type: 'Empresa' });

  const filteredAccounts = CLIENT_ACCOUNTS.filter(acc => 
    acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    acc.taxId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would save this to a database
    const account = {
      id: `acc-${Date.now()}`,
      ...newAccount,
      color: 'bg-slate-500'
    };
    onSelect(account);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Nexus ERP</h1>
          <p className="text-slate-500 text-lg">Selecciona la cuenta del cliente que deseas gestionar hoy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
              <input 
                type="text"
                placeholder="Buscar por nombre o identificación fiscal..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredAccounts.map((account) => (
                <motion.button
                  key={account.id}
                  whileHover={{ y: -4, shadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelect(account)}
                  className="bg-white p-6 rounded-2xl border border-slate-200 text-left transition-all group relative overflow-hidden"
                >
                  <div className={cn("absolute top-0 right-0 w-2 h-full", account.color)} />
                  <div className="flex items-start justify-between mb-4">
                    <div className={cn("p-3 rounded-xl text-white", account.color)}>
                      {account.type === 'Empresa' ? <Building2 className="size-6" /> : <User className="size-6" />}
                    </div>
                    <ArrowRight className="size-5 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1 truncate">{account.name}</h3>
                  <p className="text-sm text-slate-500 font-medium">{account.taxId}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      {account.type}
                    </span>
                  </div>
                </motion.button>
              ))}

              <motion.button
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsCreating(true)}
                className="bg-slate-100 p-6 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center gap-3 text-slate-500 hover:bg-slate-200 hover:border-slate-400 transition-all group"
              >
                <div className="size-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Plus className="size-6 text-slate-400" />
                </div>
                <span className="font-bold text-sm">Crear Nueva Cuenta</span>
              </motion.button>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="bg-slate-900 rounded-3xl p-8 text-white h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Building2 className="size-40" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4">Resumen Global</h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Total Clientes</p>
                    <p className="text-3xl font-black">{CLIENT_ACCOUNTS.length}</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Actividad Reciente</p>
                    <p className="text-sm leading-relaxed text-slate-300">
                      Has gestionado 12 cuentas en los últimos 7 días. Tu cliente más activo es Comercializadora del Norte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isCreating && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCreating(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">Nueva Cuenta</h2>
                  <button 
                    onClick={() => setIsCreating(false)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X className="size-5 text-slate-400" />
                  </button>
                </div>

                <form onSubmit={handleCreate} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Nombre del Cliente / Empresa</label>
                    <input 
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                      placeholder="Ej: Inversiones ABC S.A.S"
                      value={newAccount.name}
                      onChange={(e) => setNewAccount({...newAccount, name: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Identificación Fiscal (NIT/CC)</label>
                    <input 
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                      placeholder="Ej: 900.123.456-1"
                      value={newAccount.taxId}
                      onChange={(e) => setNewAccount({...newAccount, taxId: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tipo de Cuenta</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setNewAccount({...newAccount, type: 'Empresa'})}
                        className={cn(
                          "py-3 rounded-xl border font-bold text-sm transition-all flex items-center justify-center gap-2",
                          newAccount.type === 'Empresa' 
                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                            : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                        )}
                      >
                        <Building2 className="size-4" /> Empresa
                      </button>
                      <button
                        type="button"
                        onClick={() => setNewAccount({...newAccount, type: 'Persona Natural'})}
                        className={cn(
                          "py-3 rounded-xl border font-bold text-sm transition-all flex items-center justify-center gap-2",
                          newAccount.type === 'Persona Natural' 
                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                            : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                        )}
                      >
                        <User className="size-4" /> Persona
                      </button>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-2"
                  >
                    <Check className="size-5" /> Crear y Seleccionar
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
