'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Play } from 'lucide-react';

interface AnimeCardProps {
  id: string;
  title: string;
  coverImage: string;
  rating: number;
  episodes?: number;
  currentEpisode?: number;
  type?: string;
}

export default function AnimeCard({ 
  id, 
  title, 
  coverImage, 
  rating,
  episodes,
  currentEpisode,
  type 
}: AnimeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="anime-card group"
    >
      {/* Image Container */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button */}
        <Link href={`/anime/${id}`} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center shadow-glow"
          >
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </motion.div>
        </Link>

        {/* Rating Badge */}
        <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-lg">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span className="text-sm font-semibold text-white">{rating}</span>
        </div>

        {/* Type Badge */}
        {type && (
          <div className="absolute top-2 left-2 px-2 py-1 bg-primary/90 backdrop-blur-sm rounded-lg">
            <span className="text-xs font-medium text-white">{type}</span>
          </div>
        )}

        {/* Episode Info */}
        {currentEpisode && (
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-accent/90 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs font-medium text-white">
              قسمت {currentEpisode}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <Link href={`/anime/${id}`}>
          <h3 className="font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between text-sm text-text-muted">
          {episodes && (
            <span>{episodes} قسمت</span>
          )}
          {currentEpisode && !episodes && (
            <span>در حال پخش</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
