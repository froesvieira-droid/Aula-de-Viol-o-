'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';

const chords = [
  { name: 'G', type: 'Maior', diagram: '320003', notes: ['G', 'B', 'D', 'G', 'B', 'G'], song: 'Boate Azul', snippetUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { name: 'C', type: 'Maior', diagram: 'x32010', notes: ['x', 'C', 'E', 'G', 'C', 'E'], song: 'Evidências', snippetUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { name: 'D', type: 'Maior', diagram: 'xx0232', notes: ['x', 'x', 'D', 'A', 'D', 'F#'], song: 'Fio de Cabelo', snippetUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { name: 'Am', type: 'Menor', diagram: 'x02210', notes: ['x', 'A', 'E', 'A', 'C', 'E'], song: 'Pense em Mim', snippetUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
  { name: 'Em', type: 'Menor', diagram: '022000', notes: ['E', 'B', 'E', 'G', 'B', 'E'], song: 'Telefone Mudo', snippetUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
  { name: 'D7', type: 'Sétima', diagram: 'xx0212', notes: ['x', 'x', 'D', 'A', 'C', 'F#'], song: 'Ainda Ontem Chorei de Saudade', snippetUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
];

const ChordDiagram = ({ diagram, notes }: { diagram: string, notes: string[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const strings = diagram.split('');
  
  return (
    <div className="w-24 h-32 relative">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        {/* Strings */}
        {[0, 20, 40, 60, 80, 100].map((x, i) => (
          <line 
            key={x} x1={x} y1="20" x2={x} y2="100" 
            stroke={hoveredIndex === i ? "#d97706" : "gray"} 
            strokeWidth={hoveredIndex === i ? "3" : "1"} 
          />
        ))}
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
              {dotY && (
                <circle 
                  cx={x} cy={dotY} r="7" fill="black" 
                  className="cursor-pointer hover:fill-amber-700"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              )}
            </g>
          );
        })}
      </svg>
      {hoveredIndex !== null && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
          <div className="bg-amber-900 text-white px-2 py-1 rounded text-sm font-bold">
            {notes[hoveredIndex]}
          </div>
        </div>
      )}
    </div>
  );
};

export default function ChordDictionary() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (index: number, url: string) => {
    if (playingIndex === index) {
      audioRef.current?.pause();
      setPlayingIndex(null);
    } else {
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play();
      }
      setPlayingIndex(index);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-amber-900">Dicionário de Acordes Sertanejos</h3>
      <audio ref={audioRef} onEnded={() => setPlayingIndex(null)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {chords.map((chord, index) => (
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
              <ChordDiagram diagram={chord.diagram} notes={chord.notes} />
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Exemplo:</span> {chord.song}
              </p>
              <button 
                onClick={() => togglePlay(index, chord.snippetUrl)}
                className="p-2 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200"
              >
                {playingIndex === index ? <Pause size={20} /> : <Play size={20} />}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
