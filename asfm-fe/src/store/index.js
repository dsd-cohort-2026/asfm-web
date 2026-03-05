import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { userAnimalsSlice } from './slices/userAnimalsSlice';
import { animalsSlice } from './slices/animalsSlice';

export const useBoundStore = create(
  immer((...a) => ({
    ...userAnimalsSlice(...a),
    ...animalsSlice(...a),
  })),
);
