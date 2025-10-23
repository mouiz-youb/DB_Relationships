// src/store/authStore.ts
import { create } from "zustand";

interface clickState {
    SideBarClick:boolean
    setClick:()=>void
}
export const useAuthStore = create<clickState>((set) => ({
    SideBarClick: false,
    setClick:()=>set((state)=>({SideBarClick:!state.SideBarClick}))
}));

export default useAuthStore;
