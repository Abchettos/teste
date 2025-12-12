import React, { useState } from 'react';
import { Newspaper, User } from 'lucide-react';
import ArgumentCard from './components/ArgumentCard';
import CustomGenerator from './components/CustomGenerator';
import { PREDEFINED_ARGUMENTS } from './constants';

const App: React.FC = () => {
  const [customerName, setCustomerName] = useState('');

  return (
    <div className="min-h-screen pb-12">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Newspaper size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                  Painel de Reversão
                </h1>
                <p className="text-sm text-slate-500 font-medium">
                  Argumentação rápida para retenção
                </p>
              </div>
            </div>
            
            {/* Customer Name Input - Sticky/Always visible */}
            <div className="w-full md:w-96 relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Nome do cliente..."
                className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all shadow-sm"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* Predefined Arguments Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-800">Argumentos Rápidos</h2>
            <span className="text-xs font-semibold px-2.5 py-1 bg-slate-200 text-slate-600 rounded-full">
              {PREDEFINED_ARGUMENTS.length} opções
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PREDEFINED_ARGUMENTS.map((arg) => (
              <ArgumentCard
                key={arg.id}
                title={arg.title}
                template={arg.template}
                customerName={customerName}
              />
            ))}
          </div>
        </section>

        {/* Custom AI Generator Section */}
        <section>
           <CustomGenerator customerName={customerName} />
        </section>

      </main>
    </div>
  );
};

export default App;