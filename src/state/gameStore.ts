import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

interface GameState {
  // Aircraft state
  position: [number, number, number];
  rotation: { x: number; y: number; z: number };
  velocity: [number, number, number];
  throttle: number;

  // Game state
  isPaused: boolean;
  cameraMode: 'follow' | 'free' | 'cockpit';

  // Actions
  setPosition: (position: [number, number, number]) => void;
  setRotation: (rotation: { x: number; y: number; z: number }) => void;
  setVelocity: (velocity: [number, number, number]) => void;
  setThrottle: (throttle: number) => void;
  setPaused: (paused: boolean) => void;
  setCameraMode: (mode: 'follow' | 'free' | 'cockpit') => void;
}

export const useGameStore = create<GameState>()(
  subscribeWithSelector((set) => ({
    // Initial state
    position: [0, 10, 0],
    rotation: { x: 0, y: 0, z: 0 },
    velocity: [0, 0, 0],
    throttle: 0.5,
    isPaused: false,
    cameraMode: 'free',

    // Actions
    setPosition: (position) => set({ position }),
    setRotation: (rotation) => set({ rotation }),
    setVelocity: (velocity) => set({ velocity }),
    setThrottle: (throttle) => set({ throttle }),
    setPaused: (paused) => set({ isPaused: paused }),
    setCameraMode: (mode) => set({ cameraMode: mode }),
  }))
);