import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { userAnimalsSlice } from './slices/UserAnimalsSlice';

export const useBoundStore = create(
  immer((...a) => ({
    ...userAnimalsSlice(...a),
  })),
);
