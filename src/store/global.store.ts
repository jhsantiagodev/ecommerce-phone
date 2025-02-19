import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

type SheetContent = "cart" | "search" | null;

//Typado
export interface GloblalState {
  isSheetOpen: boolean;
  sheetContent: SheetContent;

  //TODO navbar mobile

  openSheet: (content: SheetContent) => void;
  closeSheet: () => void;
}

//Funcion con valores
const storeApi: StateCreator<GloblalState> = (set) => ({
  isSheetOpen: false,
  sheetContent: null,

  openSheet: (content) => {
    set({ isSheetOpen: true, sheetContent: content });
  },

  closeSheet: () => {
    set({ isSheetOpen: false, sheetContent: null });
  },
});

export const useGlobalStore = create<GloblalState>()(devtools(storeApi));
