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
    setAuth: (user: User, accessToken: string) => void;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    accessToken: null,
    // Save user + token
    setAuth: (user, accessToken) => {set({ user, accessToken })},
  // Logout clear
    clearAuth: () => {set({ user: null, accessToken: null }) },
}));

export default useAuthStore;
