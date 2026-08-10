# AnimePlus - پلتفرم حرفه‌ای پخش انیمه و مانگا

یک پلتفرم کامل و حرفه‌ای برای پخش آنلاین انیمه، خواندن مانگا و مانهوا با طراحی مدرن و پشتیبانی کامل از زبان فارسی.

## 🚀 ویژگی‌ها

### Frontend
- ✅ Next.js 14 با App Router
- ✅ TypeScript برای تایپ‌سیفتی کامل
- ✅ TailwindCSS برای استایل‌دهی
- ✅ Framer Motion برای انیمیشن‌های روان
- ✅ Zustand برای مدیریت state
- ✅ React Query برای کش کردن داده‌ها
- ✅ طراحی ریسپانسیو و RTL
- ✅ تم تاریک/روشن
- ✅ پلیر ویدیو سفارشی
- ✅ خواننده مانگا با حالت‌های مختلف

### Backend
- ✅ Express.js با TypeScript
- ✅ Prisma ORM
- ✅ PostgreSQL
- ✅ JWT Authentication
- ✅ Redis Caching
- ✅ Rate Limiting
- ✅ Security Headers (Helmet)

### Database Schema
- ✅ کاربران و احراز هویت
- ✅ انیمه‌ها و قسمت‌ها
- ✅ مانگا/مانهوا و فصل‌ها
- ✅ لیست تماشا/خواندن
- ✅ نظرات و لایک‌ها
- ✅ دوستان و نوتیفیکیشن‌ها

## 📁 ساختار پروژه

```
anime-platform/
├── packages/
│   ├── database/          # Prisma schema و migrations
│   ├── backend/           # Express.js API
│   └── frontend/          # Next.js application
├── docker-compose.yml     # Docker configuration
└── README.md
```

## 🛠️ نصب و راه‌اندازی

### پیش‌نیازها
- Node.js 18+
- PostgreSQL 14+
- Redis 7+

### 1. کلون کردن پروژه
```bash
git clone <repository-url>
cd anime-platform
```

### 2. نصب وابستگی‌ها
```bash
# نصب وابستگی‌های دیتابیس
cd packages/database
npm install

# نصب وابستگی‌های بک‌اند
cd ../backend
npm install

# نصب وابستگی‌های فرانت‌اند
cd ../frontend
npm install
```

### 3. تنظیم متغیرهای محیطی

#### Backend (.env)
```bash
cp packages/backend/.env.example packages/backend/.env
```

متغیرهای زیر را در `.env` تنظیم کنید:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/anime_platform"
REDIS_URL="redis://localhost:6379"
JWT_SECRET="your-secret-key"
```

#### Frontend (.env.local)
```bash
cp packages/frontend/.env.example packages/frontend/.env.local
```

### 4. راه‌اندازی دیتابیس
```bash
cd packages/database
npm run generate
npm run migrate
```

### 5. اجرای پروژه

#### توسعه (Development)
```bash
# ترمینال 1: Backend
cd packages/backend
npm run dev

# ترمینال 2: Frontend
cd packages/frontend
npm run dev
```

Backend روی `http://localhost:3001` و Frontend روی `http://localhost:3000` اجرا می‌شود.

## 📱 صفحات

- `/` - صفحه اصلی
- `/anime` - لیست انیمه‌ها
- `/anime/[slug]` - جزئیات انیمه
- `/watch/[id]` - پخش ویدیو
- `/manga` - لیست مانگاها
- `/manga/[slug]` - جزئیات مانگا
- `/read/[id]` - خواندن مانگا
- `/profile` - پروفایل کاربر
- `/login` - ورود
- `/register` - ثبت‌نام

## 🔌 API Endpoints

### Auth
- `POST /api/auth/register` - ثبت‌نام
- `POST /api/auth/login` - ورود
- `GET /api/auth/me` - دریافت اطلاعات کاربر

### Anime
- `GET /api/anime` - لیست انیمه‌ها
- `GET /api/anime/:id` - جزئیات انیمه
- `GET /api/anime/:id/episodes` - لیست قسمت‌ها
- `GET /api/anime/trending` - انیمه‌های ترند
- `GET /api/anime/search?q=query` - جستجو

### Manga
- `GET /api/manga` - لیست مانگاها
- `GET /api/manga/:id` - جزئیات مانگا
- `GET /api/manga/:id/chapters` - لیست فصل‌ها

### User
- `GET /api/user/profile` - پروفایل کاربر
- `GET /api/user/watchlist` - لیست تماشا
- `POST /api/user/watchlist` - افزودن به لیست

## 🎨 طراحی

### رنگ‌بندی
- Primary: `#6c5ce7` (بنفش انیمه‌ای)
- Accent: `#fd79a8` (صورتی Sakura)
- Background: `#0f0f1e` (تیره عمیق)

### فونت‌ها
- فارسی: Vazirmatn
- انگلیسی: Poppins

## 📊 تکنولوژی‌ها

| بخش | تکنولوژی |
|-----|----------|
| Frontend | Next.js 14, TypeScript, TailwindCSS |
| Backend | Express.js, TypeScript, Prisma |
| Database | PostgreSQL |
| Cache | Redis |
| Auth | JWT |
| Storage | Cloudinary/S3 |
| Hosting | Vercel/Railway |

## 🔐 امنیت

- Rate Limiting
- Helmet.js Security Headers
- CORS Protection
- XSS Prevention
- SQL Injection Prevention (Prisma)
- Input Validation (Zod)

## 📝 لایسنس

MIT License

---

برای اطلاعات بیشتر به مستندات مراجعه کنید.
