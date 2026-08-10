'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    anime: [
      { label: 'انیمه‌ها', href: '/anime' },
      { label: 'جدیدترین‌ها', href: '/anime/new' },
      { label: 'محبوب‌ترین‌ها', href: '/anime/popular' },
      { label: 'برنامه پخش', href: '/schedule' },
    ],
    manga: [
      { label: 'مانگا', href: '/manga' },
      { label: 'مانهوا', href: '/manhwa' },
      { label: 'مانهوا چینی', href: '/manhua' },
      { label: 'جدیدترین فصل‌ها', href: '/manga/latest' },
    ],
    support: [
      { label: 'درباره ما', href: '/about' },
      { label: 'تماس با ما', href: '/contact' },
      { label: 'سوالات متداول', href: '/faq' },
      { label: 'قوانین و مقررات', href: '/terms' },
    ],
    legal: [
      { label: 'حریم خصوصی', href: '/privacy' },
      { label: 'DMCA', href: '/dmca' },
      { label: 'سلب مسئولیت', href: '/disclaimer' },
    ],
  };

  const socialLinks = [
    { name: 'Discord', href: '#' },
    { name: 'Telegram', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
  ];

  return (
    <footer className="bg-background-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center"
              >
                <span className="text-white font-bold text-xl">A</span>
              </motion.div>
              <span className="text-xl font-bold gradient-text">انیمه پلاس</span>
            </Link>
            
            <p className="text-text-secondary mb-6 leading-relaxed">
              بزرگترین مرجع پخش آنلاین انیمه با زیرنویس فارسی و دوبله. 
              جامعه‌ای بزرگ از علاقه‌مندان به انیمه، مانگا و مانهوا.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background hover:bg-primary/20 rounded-lg 
                           flex items-center justify-center text-text-secondary 
                           hover:text-primary transition-all duration-200"
                >
                  {social.name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Anime Links */}
          <div>
            <h3 className="font-bold text-text-primary mb-4">انیمه</h3>
            <ul className="space-y-2">
              {footerLinks.anime.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Manga Links */}
          <div>
            <h3 className="font-bold text-text-primary mb-4">مانگا</h3>
            <ul className="space-y-2">
              {footerLinks.manga.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold text-text-primary mb-4">پشتیبانی</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-text-primary mb-4">قانونی</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} انیمه پلاس. تمامی حقوق محفوظ است.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <Link href="/terms" className="hover:text-primary transition-colors">
              شرایط استفاده
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              حریم خصوصی
            </Link>
            <Link href="/dmca" className="hover:text-primary transition-colors">
              DMCA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
