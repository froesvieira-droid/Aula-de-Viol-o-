'use client';

import { motion } from 'motion/react';

const theoryTopics = [
  { title: 'Acordes Básicos', description: 'Entenda a formação dos acordes maiores e menores.' },
  { title: 'Ritmos Sertanejos', description: 'Domine a Guarânia e o Pagode Sertanejo.' },
  { title: 'Campo Harmônico', description: 'Como construir progressões musicais.' },
];

export default function TheoryModule() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h3 className="text-2xl font-bold text-amber-900">Teoria Musical Sertaneja</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {theoryTopics.map((topic, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="text-lg font-semibold mb-2 text-amber-950">{topic.title}</h4>
            <p className="text-sm text-gray-600">{topic.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
