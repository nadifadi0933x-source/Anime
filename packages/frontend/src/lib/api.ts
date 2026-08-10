import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// Anime APIs
export const animeApi = {
  getAll: (params?: any) => api.get('/anime', { params }),
  getById: (id: string) => api.get(`/anime/${id}`),
  getBySlug: (slug: string) => api.get(`/anime/slug/${slug}`),
  getTrending: () => api.get('/anime/trending'),
  getLatest: (page = 1, limit = 20) => api.get('/anime/latest', { params: { page, limit } }),
  search: (query: string) => api.get('/anime/search', { params: { q: query } }),
  getEpisodes: (animeId: string) => api.get(`/anime/${animeId}/episodes`),
  getEpisode: (animeId: string, episodeNumber: number) => 
    api.get(`/anime/${animeId}/episodes/${episodeNumber}`),
};

// Manga APIs
export const mangaApi = {
  getAll: (params?: any) => api.get('/manga', { params }),
  getById: (id: string) => api.get(`/manga/${id}`),
  getBySlug: (slug: string) => api.get(`/manga/slug/${slug}`),
  getPopular: () => api.get('/manga/popular'),
  getLatest: (page = 1, limit = 20) => api.get('/manga/latest', { params: { page, limit } }),
  search: (query: string) => api.get('/manga/search', { params: { q: query } }),
  getChapters: (mangaId: string) => api.get(`/manga/${mangaId}/chapters`),
  getChapter: (mangaId: string, chapterNumber: number) => 
    api.get(`/manga/${mangaId}/chapters/${chapterNumber}`),
};

// User APIs
export const userApi = {
  login: (credentials: any) => api.post('/auth/login', credentials),
  register: (userData: any) => api.post('/auth/register', userData),
  getProfile: () => api.get('/user/profile'),
  updateProfile: (data: any) => api.put('/user/profile', data),
  getWatchList: () => api.get('/user/watchlist'),
  getMangaList: () => api.get('/user/mangalist'),
  addToWatchList: (animeId: string, status: string) => 
    api.post('/user/watchlist', { animeId, status }),
  addToMangaList: (mangaId: string, status: string) => 
    api.post('/user/mangalist', { mangaId, status }),
};

// Comment APIs
export const commentApi = {
  getByAnime: (animeId: string) => api.get(`/comments/anime/${animeId}`),
  getByManga: (mangaId: string) => api.get(`/comments/manga/${mangaId}`),
  create: (data: any) => api.post('/comments', data),
  reply: (commentId: string, content: string) => 
    api.post(`/comments/${commentId}/reply`, { content }),
  like: (commentId: string) => api.post(`/comments/${commentId}/like`),
};

// Search API
export const searchApi = {
  global: (query: string) => api.get('/search', { params: { q: query } }),
};
