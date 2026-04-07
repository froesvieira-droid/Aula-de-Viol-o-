'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';

const exercises = [
  { 
    title: 'Ritmo Sertanejo Básico', 
    description: 'Pratique o ritmo de guarânia.', 
    snippetUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' // Placeholder
  },
  { 
    title: 'Ritmo Sertanejo Avançado', 
    description: 'Pratique variações do ritmo de guarânia.', 
    snippetUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' // Placeholder
  },
  { 
    title: 'Acordes de Sol Maior', 
    description: 'Transição entre G, C e D.', 
    snippetUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' // Placeholder
  },
  { 
    title: 'Dedilhado Sertanejo', 
    description: 'Padrão de dedilhado para baladas.', 
    snippetUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' // Placeholder
  },
];

export default function PracticeModule() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (index: number, url: string) => {
    if (playingIndex === index) {
      audioRef.current?.pause();
      setPlayingIndex(null);
    } else {
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.load();
        audioRef.current.play().catch(e => console.error("Error playing audio:", e));
      }
      setPlayingIndex(index);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-amber-900">Exercícios Práticos</h3>
      <audio ref={audioRef} onEnded={() => setPlayingIndex(null)} />
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
          <button 
            onClick={() => togglePlay(index, exercise.snippetUrl)}
            className="p-2 bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200"
          >
            {playingIndex === index ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </motion.div>
      ))}
    </div>
  );
}
