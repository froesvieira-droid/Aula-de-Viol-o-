'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

const scales = [
  { name: 'Maior', notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'] },
  { name: 'Menor', notes: ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'] },
  { name: 'Pentatônica', notes: ['C', 'D', 'E', 'G', 'A'] },
];

export default function ScaleTrainer() {
  const [selectedScale, setSelectedScale] = useState(scales[0]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-xl font-bold mb-4 text-amber-900">Treinador de Escalas</h3>
      <div className="flex gap-2 mb-6">
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
    </motion.div>
  );
}
