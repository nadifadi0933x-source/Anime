import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  user: {
    id: string;
    username: string;
    email: string;
    avatar?: string;
    isPremium: boolean;
  } | null;
  isAuthenticated: boolean;
  login: (userData: any) => void;
  logout: () => void;
  updateUser: (data: Partial<UserState['user']>) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (userData) => set({ 
        user: userData, 
        isAuthenticated: true 
      }),
      logout: () => set({ 
        user: null, 
        isAuthenticated: false 
      }),
      updateUser: (data) => set((state) => ({
        user: state.user ? { ...state.user, ...data } : null
      })),
    }),
    {
      name: 'animeplus-user',
    }
  )
);

interface WatchListState {
  watchList: Array<{
    animeId: string;
    status: 'watching' | 'completed' | 'plan_to_watch' | 'on_hold' | 'dropped';
    progress: number;
    score?: number;
  }>;
  mangaList: Array<{
    mangaId: string;
    status: 'reading' | 'completed' | 'plan_to_read' | 'on_hold' | 'dropped';
    progress: number;
    score?: number;
  }>;
  addToWatchList: (animeId: string, status: string, progress?: number) => void;
  updateWatchList: (animeId: string, data: Partial<any>) => void;
  removeFromWatchList: (animeId: string) => void;
  addToMangaList: (mangaId: string, status: string, progress?: number) => void;
  updateMangaList: (mangaId: string, data: Partial<any>) => void;
  removeFromMangaList: (mangaId: string) => void;
}

export const useListStore = create<WatchListState>()(
  persist(
    (set) => ({
      watchList: [],
      mangaList: [],
      addToWatchList: (animeId, status, progress = 0) =>
        set((state) => ({
          watchList: [
            ...state.watchList.filter((item) => item.animeId !== animeId),
            { animeId, status, progress, score: undefined },
          ],
        })),
      updateWatchList: (animeId, data) =>
        set((state) => ({
          watchList: state.watchList.map((item) =>
            item.animeId === animeId ? { ...item, ...data } : item
          ),
        })),
      removeFromWatchList: (animeId) =>
        set((state) => ({
          watchList: state.watchList.filter((item) => item.animeId !== animeId),
        })),
      addToMangaList: (mangaId, status, progress = 0) =>
        set((state) => ({
          mangaList: [
            ...state.mangaList.filter((item) => item.mangaId !== mangaId),
            { mangaId, status, progress, score: undefined },
          ],
        })),
      updateMangaList: (mangaId, data) =>
        set((state) => ({
          mangaList: state.mangaList.map((item) =>
            item.mangaId === mangaId ? { ...item, ...data } : item
          ),
        })),
      removeFromMangaList: (mangaId) =>
        set((state) => ({
          mangaList: state.mangaList.filter((item) => item.mangaId !== mangaId),
        })),
    }),
    {
      name: 'animeplus-lists',
    }
  )
);

interface UIState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  isDarkMode: true,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  sidebarOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
