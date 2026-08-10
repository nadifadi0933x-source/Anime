'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Bookmark, ZoomIn, ZoomOut, Sun } from 'lucide-react';

interface MangaReaderProps {
  mangaId: string;
  chapterNumber: number;
  pages: string[];
  title: string;
  nextChapter?: () => void;
  prevChapter?: () => void;
}

type ReadingMode = 'vertical' | 'single' | 'double' | 'rtl';

export default function MangaReader({
  mangaId,
  chapterNumber,
  pages,
  title,
  nextChapter,
  prevChapter,
}: MangaReaderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [readingMode, setReadingMode] = useState<ReadingMode>('vertical');
  const [brightness, setBrightness] = useState(100);
  const [showControls, setShowControls] = useState(true);
  const [zoom, setZoom] = useState(1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToPrevPage();
      } else if (e.key === 'ArrowLeft') {
        goToNextPage();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, pages.length]);

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else if (nextChapter) {
      nextChapter();
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (prevChapter) {
      prevChapter();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const changeBrightness = (delta: number) => {
    setBrightness(Math.max(50, Math.min(150, brightness + delta)));
  };

  const changeZoom = (delta: number) => {
    setZoom(Math.max(0.5, Math.min(2, zoom + delta)));
  };

  const progress = ((currentPage + 1) / pages.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: showControls ? 0 : -100 }}
        className="fixed top-0 left-0 right-0 z-40 glass-dark border-b border-border"
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href={`/manga/${mangaId}`}
            className="text-text-primary hover:text-primary transition-colors font-medium"
          >
            {title}
          </Link>

          <div className="flex items-center gap-2 md:gap-4">
            <span className="text-text-secondary text-sm hidden sm:block">
              فصل {chapterNumber}
            </span>

            {/* Reading Mode */}
            <select
              value={readingMode}
              onChange={(e) => setReadingMode(e.target.value as ReadingMode)}
              className="px-3 py-1 bg-background-card border border-border rounded-lg text-sm text-text-primary"
            >
              <option value="vertical">عمودی</option>
              <option value="single">تک صفحه</option>
              <option value="double">دو صفحه</option>
              <option value="rtl">RTL</option>
            </select>

            {/* Brightness */}
            <button
              onClick={() => changeBrightness(-10)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Sun className="w-5 h-5 text-text-secondary" />
            </button>

            {/* Zoom */}
            <button
              onClick={() => changeZoom(-0.1)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ZoomOut className="w-5 h-5 text-text-secondary" />
            </button>
            <button
              onClick={() => changeZoom(0.1)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ZoomIn className="w-5 h-5 text-text-secondary" />
            </button>

            {/* Bookmark */}
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Bookmark className="w-5 h-5 text-text-secondary" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Pages Container */}
      <div
        className="pt-16 pb-20"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {readingMode === 'vertical' ? (
          // Vertical Scroll Mode (Webtoon style)
          <div className="max-w-3xl mx-auto">
            {pages.map((page, index) => (
              <Image
                key={index}
                src={page}
                alt={`صفحه ${index + 1}`}
                width={800}
                height={1200}
                className="w-full"
                style={{
                  filter: `brightness(${brightness}%)`,
                  transform: `scale(${zoom})`,
                }}
              />
            ))}
          </div>
        ) : (
          // Single/Double Page Mode
          <div className="max-w-5xl mx-auto px-4">
            <div className="relative aspect-[3/4] flex items-center justify-center">
              <Image
                src={pages[currentPage]}
                alt={`صفحه ${currentPage + 1}`}
                fill
                className="object-contain"
                style={{
                  filter: `brightness(${brightness}%)`,
                  transform: `scale(${zoom})`,
                }}
              />

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 0 && !prevChapter}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-primary/80 rounded-full transition-colors disabled:opacity-30"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={goToNextPage}
                disabled={currentPage === pages.length - 1 && !nextChapter}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-primary/80 rounded-full transition-colors disabled:opacity-30"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Progress Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: showControls ? 0 : 100 }}
        className="fixed bottom-0 left-0 right-0 z-40 glass-dark border-t border-border"
      >
        <div className="container mx-auto px-4 py-3">
          {/* Progress Slider */}
          <input
            type="range"
            min="0"
            max={pages.length - 1}
            value={currentPage}
            onChange={(e) => setCurrentPage(parseInt(e.target.value))}
            className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-primary mb-2"
          />

          <div className="flex items-center justify-between text-sm text-text-secondary">
            <span>صفحه {currentPage + 1} از {pages.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>

          {/* Chapter Navigation */}
          <div className="flex items-center justify-center gap-4 mt-3">
            {prevChapter ? (
              <button
                onClick={prevChapter}
                className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg text-primary transition-colors"
              >
                فصل قبلی
              </button>
            ) : (
              <span className="px-4 py-2 text-text-muted">اولین فصل</span>
            )}

            <Link
              href={`/manga/${mangaId}`}
              className="px-4 py-2 bg-background-card hover:bg-primary/20 rounded-lg text-text-primary transition-colors"
            >
              فهرست فصل‌ها
            </Link>

            {nextChapter ? (
              <button
                onClick={nextChapter}
                className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg text-primary transition-colors"
              >
                فصل بعدی
              </button>
            ) : (
              <span className="px-4 py-2 text-text-muted">آخرین فصل</span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
