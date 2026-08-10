'use client';

import { motion } from 'framer-motion';
import AnimeCard from './AnimeCard';

interface SectionProps {
  title: string;
  animes: Array<{
    id: string;
    title: string;
    coverImage: string;
    rating: number;
    episodes?: number;
    currentEpisode?: number;
    type?: string;
  }>;
  viewAllLink?: string;
}

export default function ContentSection({ title, animes, viewAllLink }: SectionProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">{title}</h2>
          </div>
          
          {viewAllLink && (
            <motion.a
              href={viewAllLink}
              whileHover={{ x: -5 }}
              className="text-primary hover:text-accent transition-colors duration-200 font-medium flex items-center gap-2"
            >
              مشاهده همه
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          )}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {animes.map((anime, index) => (
            <motion.div
              key={anime.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AnimeCard {...anime} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
