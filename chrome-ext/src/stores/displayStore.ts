import { DisplayModes } from 'src/types'
import { create } from 'zustand'

interface DisplayStore {
    display: DisplayModes,
    setDisplay: (value: DisplayModes) => void,
    isActive: (value: DisplayModes) => boolean,
    isDashBoardActive: () => boolean,
    isWidgetsActive: () => boolean,
    isSettingsActive: () => boolean,
}

const useDisplayStore = create<DisplayStore>((set, getState) => ({
    display: null,
    setDisplay: (value: DisplayModes) => set({display: value}),
    isActive: (value: DisplayModes) => getState().display === value,
    isDashBoardActive: () => ["Widgets", "Backgrounds", "Impact"].includes(getState().display),
    isWidgetsActive: () => ["Calendar", "Tasks", "Notes", "History", "Calculator", "Translator", "ChatGPT", "Settings"].includes(getState().display),
    isSettingsActive: () => ["General", "Apps", "Bar"].includes(getState().display),
}))

export default useDisplayStore;