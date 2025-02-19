import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

export interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

//zustand te da el seter
const storeApi: StateCreator<CounterState> = (set) => ({
  count: 1,

  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },

  decrement: () => {
    set((state) => ({ count: Math.max(1, state.count - 1) }));
  },
});

//hook
export const useCounterStore = create<CounterState>()(devtools(storeApi));
