import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  selectedAccount: any;
  onSwitchAccount: () => void;
}

export function Layout({ selectedAccount, onSwitchAccount }: LayoutProps) {
  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden font-sans">
      <Sidebar selectedAccount={selectedAccount} onSwitchAccount={onSwitchAccount} />
      <div className="flex-1 flex flex-col min-w-0">
        <Outlet context={{ selectedAccount }} />
      </div>
    </div>
  );
}
