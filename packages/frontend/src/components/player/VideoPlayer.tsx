'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Volume2, VolumeX, Settings, Maximize, Minimize, Play, Pause } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  poster?: string;
  title?: string;
  episodeNumber?: number;
  nextEpisode?: () => void;
  prevEpisode?: () => void;
  onClose?: () => void;
}

export default function VideoPlayer({
  videoUrl,
  poster,
  title,
  episodeNumber,
  nextEpisode,
  prevEpisode,
  onClose,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleTimeUpdate = (e: React.TimeEvent<HTMLVideoElement>) => {
    setCurrentTime(e.currentTarget.currentTime);
    setDuration(e.currentTarget.duration);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const changePlaybackRate = () => {
    const rates = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
    const currentIndex = rates.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % rates.length;
    setPlaybackRate(rates[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-primary/50 rounded-lg transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Video Container */}
      <div 
        className="relative w-full h-full"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          src={videoUrl}
          poster={poster}
          className="w-full h-full object-contain"
          autoPlay={isPlaying}
          muted={isMuted}
          playbackRate={playbackRate}
          onTimeUpdate={handleTimeUpdate}
          onClick={togglePlay}
        />

        {/* Controls Overlay */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6"
            >
              {/* Progress Bar */}
              <div className="mb-4">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={(e) => setCurrentTime(parseFloat(e.target.value))}
                  className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-white/70 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-4">
                  {/* Play/Pause */}
                  <button
                    onClick={togglePlay}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white" />
                    )}
                  </button>

                  {/* Previous Episode */}
                  {prevEpisode && (
                    <button
                      onClick={prevEpisode}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors hidden sm:block"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  )}

                  {/* Next Episode */}
                  {nextEpisode && (
                    <button
                      onClick={nextEpisode}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors hidden sm:block"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                  )}

                  {/* Volume */}
                  <button
                    onClick={toggleMute}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-6 h-6 text-white" />
                    ) : (
                      <Volume2 className="w-6 h-6 text-white" />
                    )}
                  </button>

                  {/* Playback Speed */}
                  <button
                    onClick={changePlaybackRate}
                    className="px-3 py-1 text-sm bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-white"
                  >
                    {playbackRate}x
                  </button>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                  {/* Episode Info */}
                  {title && (
                    <div className="hidden md:block text-white text-sm">
                      <span className="font-semibold">{title}</span>
                      {episodeNumber && <span className="text-white/70"> - قسمت {episodeNumber}</span>}
                    </div>
                  )}

                  {/* Settings */}
                  <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                    <Settings className="w-6 h-6 text-white" />
                  </button>

                  {/* Fullscreen */}
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    {isFullscreen ? (
                      <Minimize className="w-6 h-6 text-white" />
                    ) : (
                      <Maximize className="w-6 h-6 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Center Play Button (when paused) */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center shadow-glow-lg"
            >
              <Play className="w-10 h-10 text-white fill-white ml-1" />
            </motion.div>
          </button>
        )}
      </div>
    </div>
  );
}
