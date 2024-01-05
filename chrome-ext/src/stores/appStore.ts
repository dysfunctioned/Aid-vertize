import { SETTINGS_APPS } from '../constants';
import { DisplayModes } from '../types'
import { create } from 'zustand'

type AppStoreDictionary = {
    [key in DisplayModes]: boolean
}

interface AppStore {
    activeApps: AppStoreDictionary,
    toggleActiveApp: (key: DisplayModes) => void,
};

const useAppStore = create<AppStore>((set) => ({
    activeApps: JSON.parse(localStorage.getItem('apps')) ?? Object.fromEntries(SETTINGS_APPS.map((app) => [app.name, false])),
    toggleActiveApp: (key: DisplayModes)  => set((state) => ({ activeApps: { ...state.activeApps, [key]: !state.activeApps[key] } })),
}));

useAppStore.subscribe(
    (state) => {
      localStorage.setItem('apps', JSON.stringify(state.activeApps));
    }
);


export default useAppStore;