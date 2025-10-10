// src/store/authStore.ts
import { create } from "zustand";
import axios from "axios";

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
    setAccessToken: (accessToken: string) => void;
    loadAuthFromStorage: () => void;
    refreshAccessToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    accessToken: null,

    // Save user + token
    setAuth: (user, accessToken) => {
        // store the state 
        set({ user, accessToken })
        // persist in local storage 
        localStorage.setItem("user",JSON.stringify(user))
        localStorage.setItem("accesToken",accessToken)
    },

  // Logout clear
    clearAuth: () => {
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        set({ user: null, accessToken: null });
    },

  // Update only access token
  setAccessToken: (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    set((state) => ({ ...state, accessToken }));
  },

  // Restore from localStorage
  loadAuthFromStorage: () => {
    const user = localStorage.getItem("user");
    const accessToken = localStorage.getItem("accessToken");

    if (user && accessToken) {
      set({
        user: JSON.parse(user),
        accessToken,
      });
    }
  },

  // Hit backend to refresh access token
  refreshAccessToken: async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/refreshToken",
        {},
        { withCredentials: true } // cookie sent automatically
      );

      if (res.data.accessToken) {
        localStorage.setItem("accessToken", res.data.accessToken);
        set((state) => ({ ...state, accessToken: res.data.accessToken }));
      }
    } catch (err) {
      console.error("Failed to refresh token:", err);
      set({ user: null, accessToken: null });
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
    }
  },
}));

export default useAuthStore;
