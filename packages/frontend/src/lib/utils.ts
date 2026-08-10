import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours > 0) {
    return `${hours} ساعت و ${mins} دقیقه`;
  }
  return `${mins} دقیقه`;
}

export function getSeasonName(season: string): string {
  const seasons: Record<string, string> = {
    WINTER: 'زمستان',
    SPRING: 'بهار',
    SUMMER: 'تابستان',
    FALL: 'پاییز',
  };
  return seasons[season] || season;
}

export function getStatusName(status: string): string {
  const statuses: Record<string, string> = {
    RELEASING: 'در حال پخش',
    FINISHED: 'پایان یافته',
    NOT_YET_RELEASED: 'هنوز منتشر نشده',
    CANCELLED: 'لغو شده',
    HIATUS: 'توقف موقت',
  };
  return statuses[status] || status;
}

export function getListStatusName(status: string): string {
  const listStatuses: Record<string, string> = {
    WATCHING: 'در حال تماشا',
    COMPLETED: 'تماشا شده',
    PLAN_TO_WATCH: 'برنامه برای تماشا',
    ON_HOLD: 'متوقف شده',
    DROPPED: 'رها شده',
    READING: 'در حال خواندن',
    PLAN_TO_READ: 'برنامه برای خواندن',
  };
  return listStatuses[status] || status;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\u0600-\u06FF-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
