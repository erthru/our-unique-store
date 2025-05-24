import { create } from "zustand";

type State = {
  isShown: boolean;
  show: () => void;
  hide: () => void;
};

export const useSidebarStore = create<State>((set) => ({
  isShown: true,
  show: () => set(() => ({ isShown: true })),
  hide: () => set(() => ({ isShown: false })),
}));
