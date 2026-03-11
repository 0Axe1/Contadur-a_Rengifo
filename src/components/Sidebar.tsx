import React from 'react';
import { NavLink } from 'react-router-dom';
import { Rocket, LogOut, ChevronDown, Building2, User, RefreshCw } from 'lucide-react';
import { NAV_ITEMS, REPORT_ITEMS } from '../constants';
import { cn } from '../lib/utils';

interface SidebarProps {
  selectedAccount: any;
  onSwitchAccount: () => void;
}

export function Sidebar({ selectedAccount, onSwitchAccount }: SidebarProps) {
  return (
    <aside className="w-64 flex flex-col border-r border-slate-200 bg-white shrink-0">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
            <Rocket className="size-6" />
          </div>
          <div>
            <h1 className="text-base font-bold leading-none text-slate-900">Nexus ERP</h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">Suite Empresarial</p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
          <div className="flex items-center gap-3 mb-2">
            <div className={cn("size-8 rounded-lg flex items-center justify-center text-white shrink-0", selectedAccount.color)}>
              {selectedAccount.type === 'Empresa' ? <Building2 className="size-4" /> : <User className="size-4" />}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-slate-900 truncate">{selectedAccount.name}</p>
              <p className="text-[10px] text-slate-500 truncate">{selectedAccount.taxId}</p>
            </div>
          </div>
          <button 
            onClick={onSwitchAccount}
            className="w-full py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-center gap-1.5"
          >
            <RefreshCw className="size-3" /> Cambiar Cliente
          </button>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto py-4">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }: { isActive: boolean }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group",
              isActive 
                ? "bg-primary/10 text-primary font-bold" 
                : "text-slate-600 hover:bg-slate-50"
            )}
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn("size-[22px]", isActive ? "fill-primary/20" : "")} />
                <span className="text-sm">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}

        <div className="pt-6 pb-2 px-3">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Informes y Sistema</p>
        </div>

        {REPORT_ITEMS.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }: { isActive: boolean }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group",
              isActive 
                ? "bg-primary/10 text-primary font-bold" 
                : "text-slate-600 hover:bg-slate-50"
            )}
          >
            <item.icon className="size-[22px]" />
            <span className="text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center gap-3 px-2">
          <div className="size-9 rounded-full bg-slate-200 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/admin/100/100" 
              alt="Admin" 
              className="size-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-xs font-bold text-slate-900 truncate">Alex Rivera</p>
            <p className="text-[10px] text-slate-500 truncate">Administrador</p>
          </div>
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <LogOut className="size-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
