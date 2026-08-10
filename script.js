// User authentication state
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let userWatchList = JSON.parse(localStorage.getItem('userWatchList')) || [];

// Mock data
const mockData = {
    anime: [
        {
            id: 1,
            title: 'حمله به تایتان',
            image: 'https://cdn.myanimelist.net/images/anime/2/86337.jpg',
            rating: 9.0,
            episodes: 75,
            description: 'داستان در دنیایی اتفاق می‌افتد که بشریت در داخل شهرهایی محصور در دیوارهای بزرگ زندگی می‌کند',
            videoUrl: 'https://www.youtube.com/embed/l5FzSXE5uQw'
        },
        {
            id: 2,
            title: 'شیطان کش',
            image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
            rating: 8.7,
            episodes: 26,
            description: 'تانجیرو برای نجات خواهرش که به شیطان تبدیل شده است، سفر می‌کند',
            videoUrl: 'https://www.youtube.com/embed/MTw4yg3XyEo'
        },
        {
            id: 3,
            title: 'وان پیس',
            image: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
            rating: 8.9,
            episodes: 1085,
            description: 'داستان مونکی دی لوفی که می‌خواهد ملک الدزایر شود',
            videoUrl: 'https://www.youtube.com/embed/Dj6gYkLR3Ck'
        },
        {
            id: 4,
            title: 'جوجوتسو کایزن',
            image: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
            rating: 8.6,
            episodes: 24,
            description: 'یوجی ایتادوری دانش آموز معمولی است تا زمانی که یک انگشتری شیطان را بلعد',
            videoUrl: 'https://www.youtube.com/embed/teEHi8F6GJ0'
        },
        {
            id: 5,
            title: 'قاتل شیاطین',
            image: 'https://cdn.myanimelist.net/images/anime/1764/142016.jpg',
            rating: 8.5,
            episodes: 12,
            description: 'انتقام و رزم را ترکیب کنید تا خود را از یک تصحیح فطری نجات دهید',
            videoUrl: 'https://www.youtube.com/embed/3bqK_r1V9nc'
        },
        {
            id: 6,
            title: 'بلک کلور',
            image: 'https://cdn.myanimelist.net/images/anime/9/86336.jpg',
            rating: 8.2,
            episodes: 170,
            description: 'دو نوجوان که می‌خواهند بهترین جادوگر شوند',
            videoUrl: 'https://www.youtube.com/embed/7L01MNJAKkQ'
        }
    ],
    manga: [
        {
            id: 1,
            title: 'وان پیس',
            image: 'https://cdn.myanimelist.net/images/manga/2/253146.jpg',
            rating: 9.2,
            chapters: 1100,
            description: 'بزرگترین مانگا جهان'
        },
        {
            id: 2,
            title: 'برزرک',
            image: 'https://cdn.myanimelist.net/images/manga/1/157897.jpg',
            rating: 9.4,
            chapters: 374,
            description: 'یک اثر شاهکار از خشونت و درام'
        },
        {
            id: 3,
            title: 'سولو لولینگ',
            image: 'https://cdn.myanimelist.net/images/manga/3/222295.jpg',
            rating: 8.9,
            chapters: 179,
            description: 'تنها گردی و قدرت غیر عادی'
        },
        {
            id: 4,
            title: 'شروع دوباره زندگی',
            image: 'https://cdn.myanimelist.net/images/manga/1/157898.jpg',
            rating: 8.5,
            chapters: 80,
            description: 'یک جهان جدید، یک شانس جدید'
        }
    ]
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadAnimeGrid();
    loadMangaGrid();
    setupEventListeners();
    updateUserDisplay();
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
    
    // Store current item for play button
    window.currentItem = data;
    
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
function playAnime(data) {
    if (!currentUser) {
        showToast('لطفاً ابتدا وارد شوید', 'error');
        openLoginModal();
        return;
    }
    
    const watchSection = document.getElementById('watch');
    const videoFrame = document.getElementById('main-video');
    
    videoFrame.src = data.videoUrl;
    watchSection.style.display = 'block';
    window.scrollTo({ top: watchSection.offsetTop - 100, behavior: 'smooth' });
    
    addToWatchList(data);
    showToast(`${data.title} در حال پخش است`, 'success');
}

// Play selected anime
function playSelectedAnime() {
    if (window.currentItem) {
        playAnime(window.currentItem);
        closeModal();
    }
}

// Change episode
function changeEpisode() {
    const select = document.getElementById('episode-select');
    const episode = parseInt(select.value) + 1;
    showToast(`قسمت ${episode} بارگذاری شد`, 'success');
}

// Add to list
function addToList() {
    if (!currentUser) {
        showToast('لطفاً ابتدا وارد شوید', 'error');
        openLoginModal();
        return;
    }
    
    if (window.currentItem) {
        addToWatchList(window.currentItem);
    }
}

// Add to watch list
function addToWatchList(data) {
    if (!userWatchList.find(item => item.id === data.id)) {
        userWatchList.push({
            id: data.id,
            title: data.title,
            image: data.image,
            addedDate: new Date().toISOString()
        });
        localStorage.setItem('userWatchList', JSON.stringify(userWatchList));
        showToast(`${data.title} به لیست تماشا اضافه شد`, 'success');
    } else {
        showToast(`${data.title} در حال حاضر در لیست تماشا است`, 'success');
    }
}

// Authentication functions
function openLoginModal() {
    document.getElementById('login-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
    document.getElementById('login-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openRegisterModal() {
    document.getElementById('register-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeRegisterModal() {
    document.getElementById('register-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function switchToRegister() {
    closeLoginModal();
    openRegisterModal();
}

function switchToLogin() {
    closeRegisterModal();
    openLoginModal();
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        showToast('لطفاً تمام فیلدها را پر کنید', 'error');
        return;
    }
    
    // Simulate login (in real app, send to backend)
    currentUser = {
        id: Math.random().toString(36).substr(2, 9),
        name: email.split('@')[0],
        email: email,
        avatar: `https://ui-avatars.com/api/?name=${email}&background=random`
    };
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserDisplay();
    closeLoginModal();
    showToast(`خوش آمدید ${currentUser.name}!`, 'success');
    
    // Clear form
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
}

function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;
    
    if (!name || !email || !password || !confirm) {
        showToast('لطفاً تمام فیلدها را پر کنید', 'error');
        return;
    }
    
    if (password !== confirm) {
        showToast('رمز عبور و تأیید آن مطابقت ندارند', 'error');
        return;
    }
    
    if (password.length < 6) {
        showToast('رمز عبور باید حداقل 6 کاراکتر باشد', 'error');
        return;
    }
    
    // Simulate register (in real app, send to backend)
    currentUser = {
        id: Math.random().toString(36).substr(2, 9),
        name: name,
        email: email,
        avatar: `https://ui-avatars.com/api/?name=${name}&background=random`
    };
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserDisplay();
    closeRegisterModal();
    showToast(`خوش آمدید ${name}! ثبت نام شما با موفقیت انجام شد`, 'success');
    
    // Clear form
    document.getElementById('register-name').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';
    document.getElementById('register-confirm').value = '';
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    userWatchList = [];
    localStorage.removeItem('userWatchList');
    updateUserDisplay();
    toggleUserMenu();
    showToast('از حساب خود خارج شدید', 'success');
}

function updateUserDisplay() {
    const userNameEl = document.getElementById('user-name');
    const userMenuContent = document.getElementById('user-menu-content');
    
    if (currentUser) {
        userNameEl.textContent = currentUser.name;
        userMenuContent.innerHTML = `
            <div class="user-info" style="padding: 0.75rem 1.5rem; border-bottom: 1px solid var(--border-color); display: flex; align-items: center; gap: 0.75rem;">
                <img src="${currentUser.avatar}" alt="${currentUser.name}" style="width: 40px; height: 40px; border-radius: 50%;">
                <div>
                    <div style="font-weight: 600; color: var(--text-primary);">${currentUser.name}</div>
                    <div style="font-size: 0.85rem; color: var(--text-gray);">${currentUser.email}</div>
                </div>
            </div>
            <a href="#watch" class="menu-item" onclick="toggleUserMenu()">
                <i class="fas fa-play"></i> پخش
            </a>
            <a href="#" class="menu-item" onclick="showWatchList(event)">
                <i class="fas fa-list"></i> لیست تماشا (${userWatchList.length})
            </a>
            <a href="#" class="menu-item" onclick="toggleTheme()">
                <i class="fas fa-palette"></i> تغییر تم
            </a>
            <a href="#" class="menu-item" onclick="logout()">
                <i class="fas fa-sign-out-alt"></i> خروج
            </a>
        `;
    } else {
        userNameEl.textContent = 'ورود';
        userMenuContent.innerHTML = `
            <a href="#" class="menu-item" onclick="openLoginModal()">
                <i class="fas fa-sign-in-alt"></i> ورود
            </a>
            <a href="#" class="menu-item" onclick="openRegisterModal()">
                <i class="fas fa-user-plus"></i> ثبت نام
            </a>
        `;
    }
}

function toggleUserMenu() {
    const menu = document.getElementById('user-menu');
    menu.classList.toggle('active');
}

function showWatchList(event) {
    event.preventDefault();
    toggleUserMenu();
    
    if (userWatchList.length === 0) {
        showToast('لیست تماشای شما خالی است', 'error');
        return;
    }
    
    showToast(`${userWatchList.length} مورد در لیست تماشا وجود دارد`, 'success');
}

// Theme toggle
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.className;
    
    if (currentTheme === 'light-theme') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Close modals on background click
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Close modals on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.style.overflow = 'auto';
        }
    });
    
    // User menu toggle
    const userMenuToggle = document.getElementById('user-menu-toggle');
    if (userMenuToggle) {
        userMenuToggle.addEventListener('click', toggleUserMenu);
    }
    
    // Close user menu on outside click
    document.addEventListener('click', function(e) {
        const userMenu = document.getElementById('user-menu');
        const userMenuToggle = document.getElementById('user-menu-toggle');
        
        if (userMenu && userMenuToggle && !userMenu.contains(e.target) && !userMenuToggle.contains(e.target)) {
            userMenu.classList.remove('active');
        }
    });
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Navigation active state
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            toggleUserMenu();
        });
    });
    
    // Theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
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
    
    const filteredManga = mockData.manga.filter(item =>
        item.title.toLowerCase().includes(query)
    );
    
    const animeGrid = document.getElementById('anime-grid');
    const mangaGrid = document.getElementById('manga-grid');
    
    animeGrid.innerHTML = '';
    mangaGrid.innerHTML = '';
    
    if (filteredAnime.length === 0 && filteredManga.length === 0) {
        animeGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-gray);">نتیجه‌ای یافت نشد</p>';
    } else {
        filteredAnime.forEach(anime => {
            animeGrid.appendChild(createCard(anime));
        });
        filteredManga.forEach(manga => {
            mangaGrid.appendChild(createCard(manga));
        });
    }
}

// Toast notification
function showToast(message, type = 'success') {
    const toastDiv = document.createElement('div');
    toastDiv.className = `toast ${type} show`;
    toastDiv.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}" style="margin-right: 0.5rem;"></i>
        ${message}
    `;
    
    document.body.appendChild(toastDiv);
    
    setTimeout(() => {
        toastDiv.classList.remove('show');
        setTimeout(() => toastDiv.remove(), 300);
    }, 3000);
}

// Prevent default behavior for menu items
document.addEventListener('click', function(e) {
    if (e.target.closest('.menu-item')) {
        e.preventDefault();
    }
});
