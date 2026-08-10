// داده‌های نمونه بر اساس MyAnimeList
const mockData = {
    anime: [
        {
            id: 1,
            title: "Frieren: Beyond Journey's End",
            title_fa: "فریرن: فراسوی پایان سفر",
            image: "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
            score: 9.12,
            episodes: 28,
            status: "در حال پخش",
            type: "TV",
            description: "بعد از شکست دادن پادشاه شیاطین، الهه جادو فریرن و همراهانش به آرامی به زندگی عادی باز می‌گردند. اما برای فریرن که یک الف است، زمان به شکل متفاوتی می‌گذرد..."
        },
        {
            id: 2,
            title: "Solo Leveling",
            title_fa: "تنها سطح‌دهی شده",
            image: "https://cdn.myanimelist.net/images/anime/1906/140710l.jpg",
            score: 8.35,
            episodes: 12,
            status: "پایان یافته",
            type: "TV",
            description: "در دنیایی که شکارچیان با قدرت‌های ماوراء طبیعی برای مبارزه با هیولاها ظاهر می‌شوند، سونگ جین-وو ضعیف‌ترین شکارچی رتبه E است..."
        },
        {
            id: 3,
            title: "Demon Slayer: Hashira Training Arc",
            title_fa: "شیطان کش: کمان آموزش هاشیرا",
            image: "https://cdn.myanimelist.net/images/anime/1716/142016l.jpg",
            score: 7.85,
            episodes: 8,
            status: "پایان یافته",
            type: "TV",
            description: "تانجیرو و همراهانش برای آماده‌سازی در برابر نبرد نهایی با موزان کیبوتسوجی، تحت آموزش سخت‌ترین شمشیرزنان یعنی هاشیرا قرار می‌گیرند."
        },
        {
            id: 4,
            title: "Mushoku Tensei II",
            title_fa: "بی‌کاری تناسخ یافته فصل ۲",
            image: "https://cdn.myanimelist.net/images/anime/1028/138758l.jpg",
            score: 8.65,
            episodes: 12,
            status: "پایان یافته",
            type: "TV",
            description: "رودیوس گریورات به سفر خود در دنیای جدید ادامه می‌دهد. او با چالش‌های جدیدی روبرو می‌شود و باید با گذشته خود کنار بیاید."
        },
        {
            id: 5,
            title: "The Apothecary Diaries",
            title_fa: "خاطرات داروساز",
            image: "https://cdn.myanimelist.net/images/anime/1708/138033l.jpg",
            score: 8.72,
            episodes: 24,
            status: "پایان یافته",
            type: "TV",
            description: "مائوماو، دختر جوانی که در محله خوش‌گذرانی بزرگ شده، ربوده و به عنوان خدمتکار به کاخ امپراتوری فروخته می‌شود. او با دانش داروسازی خود اسرار کاخ را فاش می‌کند."
        },
        {
            id: 6,
            title: "Kaiju No. 8",
            title_fa: "هیولای شماره ۸",
            image: "https://cdn.myanimelist.net/images/anime/1456/142016l.jpg",
            score: 8.45,
            episodes: 12,
            status: "در حال پخش",
            type: "TV",
            description: "کافکا هیبیا رویای پیوستن به نیروی دفاع را دارد، اما پس از تبدیل شدن به یک هیولا، باید هویت خود را پنهان کند و همزمان با همکارانش بجنگد."
        }
    ],
    manga: [
        {
            id: 101,
            title: "One Piece",
            title_fa: "وان پیس",
            image: "https://cdn.myanimelist.net/images/manga/2/253146l.jpg",
            score: 9.21,
            chapters: 1100,
            status: "در حال انتشار",
            type: "Manga",
            description: "مانکی دی لوفی، پسر جوانی که بدنش خاصیت لاستیکی پیدا کرده، به دنبال یافتن گنج افسانه‌ای وان پیس و تبدیل شدن به پادشاه دزدان دریایی است."
        },
        {
            id: 102,
            title: "Berserk",
            title_fa: "برزرک",
            image: "https://cdn.myanimelist.net/images/manga/1/157897l.jpg",
            score: 9.45,
            chapters: 374,
            status: "در حال انتشار",
            type: "Manga",
            description: "گاتس، شمشیرزن بزرگ، در دنیایی تاریک و خشن به مبارزه با شیاطین و سرنوشت شوم خود ادامه می‌دهد. داستانی حماسی از انتقام و دوستی."
        },
        {
            id: 103,
            title: "Jujutsu Kaisen",
            title_fa: "جوجوتسو کایسن",
            image: "https://cdn.myanimelist.net/images/manga/3/210341l.jpg",
            score: 8.65,
            chapters: 250,
            status: "در حال انتشار",
            type: "Manga",
            description: "یوجی ایتادوری دانش‌آموز دبیرستانی است که برای نجات دوستانش انگشت نفرین‌شده سوکونا را می‌بلعد و حالا باید به عنوان میزبان او با جادوگران جوجوتسو همکاری کند."
        }
    ],
    manhwa: [
        {
            id: 201,
            title: "Solo Leveling",
            title_fa: "تنها سطح‌دهی شده",
            image: "https://cdn.myanimelist.net/images/manga/3/222295l.jpg",
            score: 8.75,
            chapters: 179,
            status: "پایان یافته",
            type: "Manhwa",
            description: "سونگ جین-وو، ضعیف‌ترین شکارچی جهان، پس از یک حادثه مرگبار در سیاهچال، سیستم منحصر به فردی دریافت می‌کند که به او اجازه می‌دهد بدون محدودیت سطح خود را افزایش دهد."
        },
        {
            id: 202,
            title: "The Beginning After The End",
            title_fa: "آغاز پس از پایان",
            image: "https://cdn.myanimelist.net/images/manga/1/250905l.jpg",
            score: 8.92,
            chapters: 160,
            status: "در حال انتشار",
            type: "Manhwa",
            description: "پادشاه آرتور، قوی‌ترین جنگجوی دنیای خود، پس از مرگ در بدن نوزادی در دنیایی جدید متولد می‌شود. او باید با حفظ خاطرات گذشته، راه جدیدی برای زندگی پیدا کند."
        },
        {
            id: 203,
            title: "Omniscient Reader's Viewpoint",
            title_fa: "دیدگاه خواننده همه‌دان",
            image: "https://cdn.myanimelist.net/images/manga/2/252449l.jpg",
            score: 9.05,
            chapters: 150,
            status: "در حال انتشار",
            type: "Manhwa",
            description: "کیم دوکجا تنها کسی است که تا پایان رمان وب 'سه روش بقا' را خوانده است. وقتی داستان به واقعیت تبدیل می‌شود، او تنها کسی است که می‌داند چه اتفاقی خواهد افتاد."
        },
        {
            id: 204,
            title: "Tower of God",
            title_fa: "برج خدا",
            image: "https://cdn.myanimelist.net/images/manga/3/198651l.jpg",
            score: 8.45,
            chapters: 550,
            status: "در حال انتشار",
            type: "Manhwa",
            description: "بیست و پنجم Bam وارد برج مرموزی می‌شود تا دوستش ریچل را پیدا کند. در هر طبقه از برج، او باید آزمایش‌های مرگباری را پشت سر بگذارد."
        }
    ]
};

// المان‌های DOM
const animeGrid = document.getElementById('anime-grid');
const mangaGrid = document.getElementById('manga-grid');
const manhwaGrid = document.getElementById('manhwa-grid');
const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal-close');
const searchInput = document.getElementById('search-input');

// ایجاد کارت
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    card.onclick = () => openModal(item);
    
    card.innerHTML = `
        <div class="card-image">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="card-overlay">
                <div class="play-btn">▶</div>
            </div>
        </div>
        <div class="card-info">
            <h3 class="card-title">${item.title_fa || item.title}</h3>
            <div class="card-meta">
                <span class="rating">★ ${item.score}</span>
                <span class="type-badge">${item.type}</span>
            </div>
        </div>
    `;
    
    return card;
}

// بارگذاری محتوا
function loadContent() {
    // انیمه‌ها
    if (animeGrid) {
        animeGrid.innerHTML = '';
        mockData.anime.forEach(anime => {
            animeGrid.appendChild(createCard(anime));
        });
    }
    
    // مانگا‌ها
    if (mangaGrid) {
        mangaGrid.innerHTML = '';
        mockData.manga.forEach(manga => {
            mangaGrid.appendChild(createCard(manga));
        });
    }
    
    // مانهواها
    if (manhwaGrid) {
        manhwaGrid.innerHTML = '';
        mockData.manhwa.forEach(manhwa => {
            manhwaGrid.appendChild(createCard(manhwa));
        });
    }
}

// باز کردن مودال
function openModal(item) {
    const modalPoster = document.getElementById('modal-poster');
    const modalTitle = document.getElementById('modal-title');
    const modalStats = document.getElementById('modal-stats');
    const modalDesc = document.getElementById('modal-desc');
    
    modalPoster.src = item.image;
    modalTitle.textContent = item.title_fa || item.title;
    
    let statsHtml = `
        <div class="stat-item">★ ${item.score}</div>
        <div class="stat-item">${item.type === 'TV' ? 'قسمت‌ها' : 'فصل‌ها'}: ${item.episodes || item.chapters}</div>
        <div class="stat-item">${item.status}</div>
        <div class="stat-item">${item.type}</div>
    `;
    
    modalStats.innerHTML = statsHtml;
    modalDesc.textContent = item.description;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// بستن مودال
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// جستجو
function searchItems(query) {
    const allItems = [...mockData.anime, ...mockData.manga, ...mockData.manhwa];
    const filtered = allItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        (item.title_fa && item.title_fa.includes(query))
    );
    
    // پاک کردن همه گریدها
    if (animeGrid) animeGrid.innerHTML = '';
    if (mangaGrid) mangaGrid.innerHTML = '';
    if (manhwaGrid) manhwaGrid.innerHTML = '';
    
    // نمایش نتایج
    filtered.forEach(item => {
        const card = createCard(item);
        if (item.type === 'TV') {
            animeGrid?.appendChild(card);
        } else if (item.type === 'Manga') {
            mangaGrid?.appendChild(card);
        } else {
            manhwaGrid?.appendChild(card);
        }
    });
}

// رویدادها
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchItems(e.target.value);
    });
}

// بارگذاری اولیه
document.addEventListener('DOMContentLoaded', loadContent);

// API واقعی MyAnimeList (غیرفعال - نیاز به کلید دارد)
/*
async function fetchFromMyAnimeList() {
    const clientId = 'YOUR_CLIENT_ID'; // کلید خود را اینجا قرار دهید
    
    try {
        const response = await fetch('https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=10', {
            headers: {
                'X-MAL-CLIENT-ID': clientId
            }
        });
        
        const data = await response.json();
        console.log('MyAnimeList Data:', data);
        // پردازش داده‌ها و به‌روزرسانی UI
    } catch (error) {
        console.error('Error fetching from MyAnimeList:', error);
    }
}
*/
