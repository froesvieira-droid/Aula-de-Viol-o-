'use client';

import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const exercises = [
  { title: 'Ritmo Sertanejo Básico', description: 'Pratique o ritmo de guarânia.' },
  { title: 'Acordes de Sol Maior', description: 'Transição entre G, C e D.' },
  { title: 'Dedilhado Sertanejo', description: 'Padrão de dedilhado para baladas.' },
];

export default function PracticeModule() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-amber-900">Exercícios Práticos</h3>
      {exercises.map((exercise, index) => (
        <motion.div 
          key={index}
          whileHover={{ scale: 1.02 }}
          className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between"
        >
          <div>
            <h4 className="font-semibold">{exercise.title}</h4>
            <p className="text-sm text-gray-600">{exercise.description}</p>
          </div>
          <button className="p-2 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200">
            <Play size={20} />
          </button>
        </motion.div>
      ))}
    </div>
  );
}
