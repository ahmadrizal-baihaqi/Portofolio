import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipForward, Music } from 'lucide-react';

export default function BgmPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef(null);

  // 3 Verified Working Audio Tracks
  const playlist = [
    {
      id: 1,
      title: 'BGM Track 1 - Aeris - Pure Dream',
      url: '/Aeris - Pure Dream.mp3'
    },
    {
      id: 2,
      title: 'BGM Track 2 - Relaxing Melody',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
    },
    {
      id: 3,
      title: 'BGM Track 3 - Smooth Ambient',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
    }
  ];

  const currentTrack = playlist[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25; // Smooth 25% volume
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Playback error:', err);
          setIsPlaying(false);
        });
      }
    }
  };

  const nextTrack = (e) => {
    e.stopPropagation();
    const nextIdx = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIdx);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = playlist[nextIdx].url;
      audioRef.current.load();
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Next track playback error:', err);
        });
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-5 left-5 z-40">
      {/* Audio Element HTML5 */}
      <audio
        ref={audioRef}
        src={currentTrack.url}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={(e) => {
          console.warn('Audio error:', e);
          setIsPlaying(false);
        }}
      />

      {/* Mini Floating Control Widget */}
      <div 
        className="relative group"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full left-0 mb-2 px-3 py-1.5 bg-slate-900 text-white text-[11px] font-semibold rounded-xl shadow-xl whitespace-nowrap border border-slate-700 flex items-center gap-1.5 animate-in fade-in duration-150">
            <Music className="w-3 h-3 text-blue-400" />
            <span>{currentTrack.title} ({currentTrackIndex + 1}/3)</span>
          </div>
        )}

        <div className="bg-white/95 backdrop-blur-md px-3 py-2 rounded-full border border-slate-200/90 shadow-lg flex items-center gap-2 text-xs">
          
          {/* Mini Play / Pause Button */}
          <button
            onClick={togglePlay}
            className="w-7 h-7 rounded-full bg-slate-900 hover:bg-blue-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            title={isPlaying ? 'Jeda Musik' : 'Putar Musik'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>

          {/* Equalizer / Track Info Mini Badge */}
          <div className="flex items-center gap-1.5 cursor-pointer px-1" onClick={togglePlay}>
            <div className="flex items-end gap-[2px] h-3">
              <span className={`w-0.5 bg-blue-600 rounded-full transition-all ${isPlaying ? 'h-3 animate-bounce' : 'h-1'}`} />
              <span className={`w-0.5 bg-blue-500 rounded-full transition-all ${isPlaying ? 'h-2.5 animate-bounce [animation-delay:0.15s]' : 'h-2'}`} />
              <span className={`w-0.5 bg-blue-600 rounded-full transition-all ${isPlaying ? 'h-3 animate-bounce [animation-delay:0.3s]' : 'h-1'}`} />
            </div>

            <span className="font-bold text-slate-800 text-[11px]">
              BGM {currentTrackIndex + 1}
            </span>
          </div>

          {/* Next Track Switcher Button */}
          <button
            onClick={nextTrack}
            className="p-1 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            title="Ganti Lagu BGM"
          >
            <SkipForward className="w-3.5 h-3.5" />
          </button>

          {/* Mute Button: ONLY SHOWN WHEN PLAYING */}
          {isPlaying && (
            <button
              onClick={toggleMute}
              className="p-1 text-slate-500 hover:text-slate-900 rounded-full transition-colors cursor-pointer"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-500" /> : <Volume2 className="w-3.5 h-3.5 text-blue-600" />}
            </button>
          )}

        </div>
      </div>
    </div>
  );
}
