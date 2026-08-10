import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'انیمه پلاس | AnimePlus - پخش آنلاین انیمه، مانگا و مانهوا',
  description: 'بزرگترین مرجع پخش آنلاین انیمه با زیرنویس فارسی و دوبله. خواندن مانگا و مانهوا با بالاترین کیفیت. جامعه‌ای بزرگ از علاقه‌مندان به انیمه.',
  keywords: ['انیمه', 'مانگا', 'مانهوا', 'پخش آنلاین', 'زیرنویس فارسی', 'دوبله فارسی', 'Anime', 'Manga', 'Manhwa'],
  authors: [{ name: 'AnimePlus Team' }],
  creator: 'AnimePlus',
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://animeplus.ir',
    title: 'انیمه پلاس | AnimePlus',
    description: 'بزرگترین مرجع پخش آنلاین انیمه با زیرنویس فارسی و دوبله',
    siteName: 'AnimePlus',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AnimePlus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'انیمه پلاس | AnimePlus',
    description: 'بزرگترین مرجع پخش آنلاین انیمه با زیرنویس فارسی و دوبله',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className={`${vazirmatn.className} antialiased min-h-screen bg-background`}>
        {children}
      </body>
    </html>
  )
}
