'use client';

import { useState } from 'react';
import { Play, BookOpen, Music, ChevronRight, Book } from 'lucide-react';
import { motion } from 'motion/react';
import ScaleTrainer from '@/components/ScaleTrainer';
import PracticeModule from '@/components/PracticeModule';
import ChordDictionary from '@/components/ChordDictionary';
import TheoryModule from '@/components/TheoryModule';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-amber-800">Violão Sertanejo Pro</h1>
          <nav className="flex space-x-4">
            <button onClick={() => setActiveTab('dashboard')} className={`px-3 py-2 rounded-md ${activeTab === 'dashboard' ? 'bg-amber-100 text-amber-900' : 'text-gray-600 hover:text-amber-800'}`}>Dashboard</button>
            <button onClick={() => setActiveTab('pratica')} className={`px-3 py-2 rounded-md ${activeTab === 'pratica' ? 'bg-amber-100 text-amber-900' : 'text-gray-600 hover:text-amber-800'}`}>Prática</button>
            <button onClick={() => setActiveTab('escalas')} className={`px-3 py-2 rounded-md ${activeTab === 'escalas' ? 'bg-amber-100 text-amber-900' : 'text-gray-600 hover:text-amber-800'}`}>Escalas</button>
            <button onClick={() => setActiveTab('dicionario')} className={`px-3 py-2 rounded-md ${activeTab === 'dicionario' ? 'bg-amber-100 text-amber-900' : 'text-gray-600 hover:text-amber-800'}`}>Dicionário</button>
            <button onClick={() => setActiveTab('teoria')} className={`px-3 py-2 rounded-md ${activeTab === 'teoria' ? 'bg-amber-100 text-amber-900' : 'text-gray-600 hover:text-amber-800'}`}>Teoria</button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <section className="bg-amber-900 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Bem-vindo ao Violão Sertanejo Pro!</h2>
              <p className="text-amber-100 mb-6">Sua jornada guiada para dominar o violão sertanejo começa aqui.</p>
              <button onClick={() => setActiveTab('pratica')} className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2">
                <Play size={20} />
                Continuar Prática
              </button>
            </section>
            
            <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <BookOpen className="text-amber-700 mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Teoria Sertaneja</h3>
                <p className="text-gray-600 text-sm mb-4">Entenda os acordes e ritmos essenciais.</p>
                <button onClick={() => setActiveTab('teoria')} className="text-amber-800 font-medium flex items-center gap-1">Ver aulas <ChevronRight size={16} /></button>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <Music className="text-amber-700 mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Treinador de Escalas</h3>
                <p className="text-gray-600 text-sm mb-4">Pratique escalas em todos os tons.</p>
                <button onClick={() => setActiveTab('escalas')} className="text-amber-800 font-medium flex items-center gap-1">Começar <ChevronRight size={16} /></button>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <Book className="text-amber-700 mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Dicionário de Acordes</h3>
                <p className="text-gray-600 text-sm mb-4">Consulte os acordes mais usados.</p>
                <button onClick={() => setActiveTab('dicionario')} className="text-amber-800 font-medium flex items-center gap-1">Consultar <ChevronRight size={16} /></button>
              </div>
            </section>
          </motion.div>
        )}
        {activeTab === 'pratica' && <PracticeModule />}
        {activeTab === 'escalas' && <ScaleTrainer />}
        {activeTab === 'dicionario' && <ChordDictionary />}
        {activeTab === 'teoria' && <TheoryModule />}
      </main>
    </div>
  );
}
