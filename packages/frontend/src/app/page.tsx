'use client';

import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import Providers from '@components/ui/Providers';

export default function Home() {
  // Sample data for demonstration (will be replaced with API calls)
  const trendingAnime = [
    {
      id: '1',
      title: 'حمله به تایتان',
      coverImage: 'https://cdn.myanimelist.net/images/anime/2/86337.jpg',
      rating: 9.0,
      episodes: 75,
      type: 'TV',
    },
    {
      id: '2',
      title: 'شیطان کش',
      coverImage: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
      rating: 8.7,
      episodes: 26,
      type: 'TV',
    },
    {
      id: '3',
      title: 'وان پیس',
      coverImage: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
      rating: 8.9,
      currentEpisode: 1085,
      type: 'TV',
    },
    {
      id: '4',
      title: 'جوجوتسو کایزن',
      coverImage: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
      rating: 8.6,
      episodes: 24,
      type: 'TV',
    },
    {
      id: '5',
      title: 'قاتل شیاطین',
      coverImage: 'https://cdn.myanimelist.net/images/anime/1764/142016.jpg',
      rating: 8.5,
      episodes: 12,
      type: 'TV',
    },
    {
      id: '6',
      title: 'بلک کلور',
      coverImage: 'https://cdn.myanimelist.net/images/anime/9/86336.jpg',
      rating: 8.2,
      episodes: 170,
      type: 'TV',
    },
  ];

  const latestEpisodes = [
    {
      id: '7',
      title: 'دانجن غذا',
      coverImage: 'https://cdn.myanimelist.net/images/anime/1456/140060.jpg',
      rating: 8.4,
      currentEpisode: 12,
    },
    {
      id: '8',
      title: 'سولو لولینگ',
      coverImage: 'https://cdn.myanimelist.net/images/anime/1668/140066.jpg',
      rating: 8.3,
      currentEpisode: 8,
    },
    {
      id: '9',
      title: 'متالیک رود',
      coverImage: 'https://cdn.myanimelist.net/images/anime/1948/140068.jpg',
      rating: 8.1,
      currentEpisode: 6,
    },
    {
      id: '10',
      title: 'کلاس نخبگان',
      coverImage: 'https://cdn.myanimelist.net/images/anime/1063/139611.jpg',
      rating: 8.0,
      currentEpisode: 10,
    },
    {
      id: '11',
      title: 'فیری تیل',
      coverImage: 'https://cdn.myanimelist.net/images/anime/1449/139612.jpg',
      rating: 7.9,
      currentEpisode: 15,
    },
    {
      id: '12',
      title: 'وان پانچ من',
      coverImage: 'https://cdn.myanimelist.net/images/anime/1790/139613.jpg',
      rating: 8.8,
      currentEpisode: 4,
    },
  ];

  const popularManga = [
    {
      id: 'm1',
      title: 'وان پیس',
      coverImage: 'https://cdn.myanimelist.net/images/manga/2/253146.jpg',
      rating: 9.2,
      chapters: 1100,
      type: 'Manga',
    },
    {
      id: 'm2',
      title: 'برزرک',
      coverImage: 'https://cdn.myanimelist.net/images/manga/1/157897.jpg',
      rating: 9.4,
      chapters: 374,
      type: 'Manga',
    },
    {
      id: 'm3',
      title: 'سولو لولینگ',
      coverImage: 'https://cdn.myanimelist.net/images/manga/3/222295.jpg',
      rating: 8.9,
      chapters: 179,
      type: 'Manhwa',
    },
    {
      id: 'm4',
      title: 'شروع دوباره زندگی در دنیای دیگر',
      coverImage: 'https://cdn.myanimelist.net/images/manga/1/157898.jpg',
      rating: 8.5,
      chapters: 80,
      type: 'Manga',
    },
    {
      id: 'm5',
      title: 'نانو ماشین',
      coverImage: 'https://cdn.myanimelist.net/images/manga/2/222296.jpg',
      rating: 8.7,
      chapters: 150,
      type: 'Manhwa',
    },
    {
      id: 'm6',
      title: 'تاسوکی هانا ساکو',
      coverImage: 'https://cdn.myanimelist.net/images/manga/3/157899.jpg',
      rating: 8.3,
      chapters: 60,
      type: 'Manga',
    },
  ];

  return (
    <Providers>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://cdn.myanimelist.net/images/anime/2/86337.jpg')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
            </div>

            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary">پیشنهاد ویژه فصل</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 leading-tight">
                  حمله به تایتان
                </h1>

                <div className="flex items-center gap-4 mb-6 text-text-secondary">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent fill-accent" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="font-semibold">9.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>75 قسمت</span>
                  </div>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">پایان یافته</span>
                </div>

                <p className="text-lg text-text-secondary mb-8 line-clamp-3 leading-relaxed">
                  داستان در دنیایی اتفاق می‌افتد که بشریت در داخل شهرهایی محصور در دیوارهای بزرگ زندگی می‌کند تا از تایتان‌ها، موجوداتی غول‌پیکر که انسان‌ها را می‌خورند، در امان بمانند...
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="/anime/1" className="btn-primary inline-flex items-center gap-2">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    تماشا کنید
                  </a>
                  <a href="/anime/1" className="btn-secondary inline-flex items-center gap-2">
                    اطلاعات بیشتر
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Trending Anime Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary">انیمه‌های ترند</h2>
                </div>
                <a href="/anime" className="text-primary hover:text-accent transition-colors duration-200 font-medium flex items-center gap-2">
                  مشاهده همه
                  <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {trendingAnime.map((anime, index) => (
                  <div key={anime.id} className="anime-card group">
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <img
                        src={anime.coverImage}
                        alt={anime.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-lg">
                        <svg className="w-4 h-4 text-accent fill-accent" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-sm font-semibold text-white">{anime.rating}</span>
                      </div>
                      {anime.type && (
                        <div className="absolute top-2 left-2 px-2 py-1 bg-primary/90 backdrop-blur-sm rounded-lg">
                          <span className="text-xs font-medium text-white">{anime.type}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                        {anime.title}
                      </h3>
                      <div className="text-sm text-text-muted">
                        {anime.episodes ? `${anime.episodes} قسمت` : 'در حال پخش'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Latest Episodes Section */}
          <section className="py-12 md:py-16 bg-background-card/30">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary">جدیدترین قسمت‌ها</h2>
                </div>
                <a href="/anime/new" className="text-primary hover:text-accent transition-colors duration-200 font-medium flex items-center gap-2">
                  مشاهده همه
                  <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {latestEpisodes.map((anime, index) => (
                  <div key={anime.id} className="anime-card group">
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <img
                        src={anime.coverImage}
                        alt={anime.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-lg">
                        <svg className="w-4 h-4 text-accent fill-accent" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-sm font-semibold text-white">{anime.rating}</span>
                      </div>
                      {anime.currentEpisode && (
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-accent/90 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-medium text-white">قسمت {anime.currentEpisode}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                        {anime.title}
                      </h3>
                      <div className="text-sm text-text-muted">در حال پخش</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Popular Manga Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary">محبوب‌ترین مانگاها</h2>
                </div>
                <a href="/manga" className="text-primary hover:text-accent transition-colors duration-200 font-medium flex items-center gap-2">
                  مشاهده همه
                  <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {popularManga.map((manga, index) => (
                  <div key={manga.id} className="anime-card group">
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <img
                        src={manga.coverImage}
                        alt={manga.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-lg">
                        <svg className="w-4 h-4 text-accent fill-accent" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-sm font-semibold text-white">{manga.rating}</span>
                      </div>
                      {manga.type && (
                        <div className="absolute top-2 left-2 px-2 py-1 bg-accent/90 backdrop-blur-sm rounded-lg">
                          <span className="text-xs font-medium text-white">{manga.type}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                        {manga.title}
                      </h3>
                      <div className="text-sm text-text-muted">{manga.chapters} فصل</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </Providers>
  );
}
