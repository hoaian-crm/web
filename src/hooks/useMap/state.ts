import { IMarker } from 'types/marker';
import { create } from 'zustand';

type State = {
  width: string | number;
  height: string | number;
  latitude: number;
  longitude: number;
  zoom: number;
  markers: Array<IMarker>;
  anchor: HTMLElement | null;
  open: boolean;
};

type Action = {
  changeViewPort: (e: any) => void;
  resize: (e: { width: number | string; height: number | string }) => void;
  addMarker: (marker: IMarker) => void;
  setAnchor: (anchor: HTMLElement) => void;
  toogleOpen: () => void;
};

export const initState: State = {
  width: 600,
  height: 600,
  latitude: 0,
  longitude: 0,
  zoom: 10,
  markers: [],
  anchor: null,
  open: false
};

export const useMapState = create<typeof initState & Action>((set) => ({
  ...initState,
  changeViewPort: (e) => {
    set((state) => ({
      ...state,
      longitude: e.longitude,
      latitude: e.latitude,
      zoom: e.zoom || state.zoom
    }));
  },
  resize: (e) => {
    set({
      width: e.width,
      height: e.height
    });
  },
  addMarker: (marker) => {
    set((state) => ({ markers: [...state.markers, marker] }));
  },
  setAnchor: (anchor) => {
    set({ anchor });
  },
  toogleOpen: () => {
    set((state) => ({
      open: !state.open
    }));
  }
}));
