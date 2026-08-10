// Mock data
const mockData = {
    anime: [
        {
            id: 1,
            title: 'حمله به تایتان',
            image: 'https://cdn.myanimelist.net/images/anime/2/86337.jpg',
            rating: 9.0,
            episodes: 75,
            description: 'داستان در دنیایی اتفاق می‌افتد که بشریت در داخل شهرهایی محصور در دیوارهای بزرگ زندگی می‌کند'
        },
        {
            id: 2,
            title: 'شیطان کش',
            image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
            rating: 8.7,
            episodes: 26,
            description: 'تانجیرو برای نجات خواهرش که به شیطان تبدیل شده است، سفر می‌کند'
        },
        {
            id: 3,
            title: 'وان پیس',
            image: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
            rating: 8.9,
            episodes: 1085,
            description: 'داستان مونکی دی لوفی که می‌خواهد ملک الدزایر شود'
        },
        {
            id: 4,
            title: 'جوجوتسو کایزن',
            image: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
            rating: 8.6,
            episodes: 24,
            description: 'یوجی ایتادوری دانش آموز معمولی است تا زمانی که یک انگشتری شیطان را بلعد'
        }
    ],
    manga: [
        {
            id: 1,
            title: 'وان پیس',
            image: 'https://cdn.myanimelist.net/images/manga/2/253146.jpg',
            rating: 9.2,
            chapters: 1100
        },
        {
            id: 2,
            title: 'برزرک',
            image: 'https://cdn.myanimelist.net/images/manga/1/157897.jpg',
            rating: 9.4,
            chapters: 374
        }
    ]
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadAnimeGrid();
    loadMangaGrid();
    setupEventListeners();
});

// Load anime grid
function loadAnimeGrid() {
    const grid = document.getElementById('anime-grid');
    grid.innerHTML = '';
    
    mockData.anime.forEach(anime => {
        const card = createCard(anime);
        grid.appendChild(card);
    });
}

// Load manga grid
function loadMangaGrid() {
    const grid = document.getElementById('manga-grid');
    grid.innerHTML = '';
    
    mockData.manga.forEach(manga => {
        const card = createCard(manga);
        grid.appendChild(card);
    });
}

// Create card element
function createCard(data) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${data.image}" alt="${data.title}" onerror="this.src='https://via.placeholder.com/150x250?text=${data.title}'">
        <div class="card-content">
            <div class="card-title">${data.title}</div>
            <div class="card-meta">
                <span>⭐ ${data.rating}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openModal(data));
    return card;
}

// Open modal
function openModal(data) {
    const modal = document.getElementById('modal');
    const poster = document.getElementById('modal-poster');
    const title = document.getElementById('modal-title');
    const desc = document.getElementById('modal-desc');
    const stats = document.getElementById('modal-stats');
    
    poster.src = data.image;
    title.textContent = data.title;
    desc.textContent = data.description || 'توضیحات موجود نیست';
    
    let statsHTML = `<span>⭐ ${data.rating}</span>`;
    if (data.episodes) statsHTML += ` <span>${data.episodes} قسمت</span>`;
    if (data.chapters) statsHTML += ` <span>${data.chapters} فصل</span>`;
    stats.innerHTML = statsHTML;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Play anime
function playAnime() {
    alert('بزودی! سیستم پخش در حال توسعه است');
}

// Add to list
function addToList() {
    alert('برای اضافه کردن به لیست ابتدا وارد شوید');
}

// Setup event listeners
function setupEventListeners() {
    // Close modal on background click
    const modal = document.getElementById('modal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', handleSearch);
    
    // Navigation active state
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Search handler
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (!query) {
        loadAnimeGrid();
        loadMangaGrid();
        return;
    }
    
    const filteredAnime = mockData.anime.filter(item => 
        item.title.toLowerCase().includes(query)
    );
    
    const grid = document.getElementById('anime-grid');
    grid.innerHTML = '';
    
    if (filteredAnime.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">نتیجه‌ای یافت نشد</p>';
    } else {
        filteredAnime.forEach(anime => {
            grid.appendChild(createCard(anime));
        });
    }
}
