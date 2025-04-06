import { create } from 'zustand';
interface AppState {
  ehr: string;
  setEHR: (ehr: string) => void;
}
export const useStore = create<AppState>((set) => ({
  ehr: '',
  setEHR: (ehr) => set({ ehr }),
}));
