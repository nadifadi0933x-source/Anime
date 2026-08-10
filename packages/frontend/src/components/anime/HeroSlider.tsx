'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Star, Calendar } from 'lucide-react';

interface Anime {
  id: string;
  title: string;
  coverImage: string;
  rating: number;
  episodes?: number;
  status: string;
}

interface HeroSliderProps {
  animes: Anime[];
}

export default function HeroSlider({ animes }: HeroSliderProps) {
  const featuredAnime = animes[0];

  return (
    <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={featuredAnime.coverImage}
          alt={featuredAnime.title}
          fill
          priority
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">پیشنهاد ویژه فصل</span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 leading-tight">
            {featuredAnime.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-6 text-text-secondary">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="font-semibold">{featuredAnime.rating}</span>
            </div>
            {featuredAnime.episodes && (
              <>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{featuredAnime.episodes} قسمت</span>
                </div>
              </>
            )}
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
              {featuredAnime.status}
            </span>
          </div>

          {/* Description */}
          <p className="text-lg text-text-secondary mb-8 line-clamp-3 leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/anime/${featuredAnime.id}`}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              تماشا کنید
            </Link>
            <Link
              href={`/anime/${featuredAnime.id}`}
              className="btn-secondary inline-flex items-center gap-2"
            >
              اطلاعات بیشتر
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
