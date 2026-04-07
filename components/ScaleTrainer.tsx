'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

const scales = [
  { 
    name: 'Maior', 
    notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    phrasingTips: 'Use slides e hammer-ons para conectar as notas de forma suave, característica do sertanejo romântico.',
    licks: ['C-D-E-G', 'E-F-G-A-G-E'],
    improvisationTips: 'Explore a nota de repouso (tônica) no final das frases para dar sensação de conclusão.',
    improvisationLicks: ['G-E-D-C', 'A-G-E-C']
  },
  { 
    name: 'Menor', 
    notes: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
    phrasingTips: 'Foque em bends curtos e vibratos expressivos para dar um tom mais melancólico e dramático.',
    licks: ['C-Eb-F-G', 'G-Ab-Bb-C'],
    improvisationTips: 'Use a nota sensível (sétima menor) para criar tensão antes de resolver na tônica.',
    improvisationLicks: ['Bb-Ab-G-F', 'Eb-F-G-Bb']
  },
  { 
    name: 'Pentatônica', 
    notes: ['C', 'D', 'E', 'G', 'A'],
    phrasingTips: 'Ideal para solos rápidos e improvisações. Use double-stops para um som mais encorpado.',
    licks: ['C-D-E-G-A', 'A-G-E-D-C'],
    improvisationTips: 'Alterne entre notas da escala e notas de passagem cromáticas para um som mais moderno.',
    improvisationLicks: ['E-G-A-C-D', 'D-C-A-G-E']
  },
];

export default function ScaleTrainer() {
  const [selectedScale, setSelectedScale] = useState(scales[0]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
      <h3 className="text-xl font-bold text-amber-900">Treinador de Escalas</h3>
      <div className="flex gap-2">
        {scales.map((scale) => (
          <button 
            key={scale.name} 
            onClick={() => setSelectedScale(scale)}
            className={`px-4 py-2 rounded-full text-sm ${selectedScale.name === scale.name ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {scale.name}
          </button>
        ))}
      </div>
      
      <div className="flex gap-2">
        {selectedScale.notes.map((note, index) => (
          <div key={index} className="w-12 h-12 flex items-center justify-center bg-amber-50 border border-amber-200 rounded-lg font-mono font-bold text-amber-900">
            {note}
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-amber-950">Dicas de Fraseado</h4>
          <p className="text-sm text-gray-600">{selectedScale.phrasingTips}</p>
        </div>
        <div>
          <h4 className="font-semibold text-amber-950">Exemplos de Licks</h4>
          <div className="flex gap-2">
            {selectedScale.licks.map((lick, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded-md text-sm font-mono text-gray-700">{lick}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-amber-950">Dicas de Improviso</h4>
          <p className="text-sm text-gray-600">{selectedScale.improvisationTips}</p>
        </div>
        <div>
          <h4 className="font-semibold text-amber-950">Licks de Improviso</h4>
          <div className="flex gap-2">
            {selectedScale.improvisationLicks.map((lick, index) => (
              <span key={index} className="bg-amber-100 px-3 py-1 rounded-md text-sm font-mono text-amber-800">{lick}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
