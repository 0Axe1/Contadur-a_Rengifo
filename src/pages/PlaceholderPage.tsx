import React from 'react';
import { Header } from '../components/Header';
import { motion } from 'motion/react';

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col overflow-hidden"
    >
      <Header title={title} />
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <div className="size-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto text-slate-400">
            <div className="animate-pulse size-12 bg-slate-200 rounded-lg"></div>
          </div>
          <h2 className="text-xl font-bold text-slate-900">Módulo de {title}</h2>
          <p className="text-slate-500 max-w-md mx-auto">
            Este módulo está siendo actualizado actualmente con las últimas funciones empresariales. 
            Por favor, vuelve pronto para disfrutar de la experiencia completa.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
