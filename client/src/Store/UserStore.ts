// src/store/authStore.ts
import { create } from "zustand";

interface User {
    id: number;
    email: string;
    username: string;
}

interface AuthState {
    user: User | null;
    accessToken: string | null;
    isInitializing :boolean , 
    setAuth: (user: User, accessToken: string) => void;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    accessToken: null,
    isInitializing :true, 
    // Save user + token
    setAuth: (user, accessToken) => {set({ user, accessToken , isInitializing:false })},
  // Logout clear
    clearAuth: () => {set({ user: null, accessToken: null , isInitializing :true }) },
}));

export default useAuthStore;
