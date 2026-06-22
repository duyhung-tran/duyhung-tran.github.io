'use client';

import { useRef, useState } from 'react';

export default function HearThisButton() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (!isPlaying) {
        audio.currentTime = 0;
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.error('Audio failed:', err);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="text-[var(--main-colour)] text-md font-medium hover:underline hover:cursor-pointer"
      >
        {isPlaying ? 'Pause' : 'Hear this'}
      </button>

      <audio
        ref={audioRef}
        src="/hi.m4a"
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      />
    </>
  );
}