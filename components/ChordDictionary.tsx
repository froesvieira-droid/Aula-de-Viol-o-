'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

const chords = [
  { name: 'G', type: 'Maior', diagram: '320003', song: 'Boate Azul' },
  { name: 'C', type: 'Maior', diagram: 'x32010', song: 'Evidências' },
  { name: 'D', type: 'Maior', diagram: 'xx0232', song: 'Fio de Cabelo' },
  { name: 'Am', type: 'Menor', diagram: 'x02210', song: 'Pense em Mim' },
  { name: 'Em', type: 'Menor', diagram: '022000', song: 'Telefone Mudo' },
  { name: 'D7', type: 'Sétima', diagram: 'xx0212', song: 'Ainda Ontem Chorei de Saudade' },
];

const ChordDiagram = ({ diagram }: { diagram: string }) => {
  const strings = diagram.split('');
  
  return (
    <div className="w-24 h-32 relative">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        {/* Strings */}
        {[0, 20, 40, 60, 80, 100].map(x => <line key={x} x1={x} y1="20" x2={x} y2="100" stroke="gray" strokeWidth="1" />)}
        {/* Frets */}
        {[20, 40, 60, 80, 100].map(y => <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="gray" strokeWidth="1" />)}
        
        {/* Dots and labels */}
        {strings.map((fret, i) => {
          const x = i * 20;
          const label = fret === 'x' ? 'x' : fret === '0' ? 'o' : '';
          const fretNum = parseInt(fret);
          const dotY = !isNaN(fretNum) && fretNum > 0 ? 20 + (fretNum - 0.5) * 20 : null;
          
          return (
            <g key={i}>
              <text x={x} y="15" fontSize="12" textAnchor="middle" fill="black">{label}</text>
              {dotY && <circle cx={x} cy={dotY} r="6" fill="black" />}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default function ChordDictionary() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-amber-900">Dicionário de Acordes Sertanejos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {chords.map((chord) => (
          <motion.div 
            key={chord.name}
            whileHover={{ y: -5 }}
            className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-2xl font-bold text-amber-950">{chord.name}</h4>
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">{chord.type}</span>
              </div>
              <ChordDiagram diagram={chord.diagram} />
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">Exemplo:</span> {chord.song}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
