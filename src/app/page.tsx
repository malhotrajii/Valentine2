'use client';

import Hero from '@/components/Hero';
import TimeCounter from '@/components/TimeCounter';
import TulipCatcher from '@/components/TulipCatcher';
import { useState, useRef } from 'react';

export default function Home() {
  const [gameCompleted, setGameCompleted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <main className="min-h-screen">
      <Hero />
      <TimeCounter />
      
      <TulipCatcher 
        onComplete={() => setGameCompleted(true)} 
        gameCompleted={gameCompleted} 
      />

      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* Music Button */}
      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "12px 16px",
          borderRadius: "50px",
          background: "#ff4d6d",
          color: "white",
          border: "none",
          fontSize: "18px",
          cursor: "pointer",
          zIndex: 999,
        }}
      >
        🎵
      </button>
    </main>
  );
}
