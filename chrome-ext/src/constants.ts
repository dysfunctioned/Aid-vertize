import CalendarIcon from './assets/icons/CalculatorIcon.svg';
import TasksIcon from './assets/icons/TasksIcon.svg';
import NotesIcon from './assets/icons/NotesIcon.svg';
import HistoryIcon from './assets/icons/HistoryIcon.svg';
import CalculatorIcon from './assets/icons/CalculatorIcon.svg';
import TranslatorIcon from './assets/icons/TranslatorIcon.svg';
import ChatGPTIcon from './assets/icons/ChatGPTIcon.svg';
import WidgetsIcon from './assets/icons/WidgetsIcon.svg';
import BackgroundsIcon from './assets/icons/BackgroundsIcon.svg';
import ImpactIcon from './assets/icons/ImpactIcon.svg';

import type { Apps, SettingModes } from './types';

export const WIDGETS_APPS: Apps[] = [
    {
        name: "Calendar",
        icon: CalendarIcon
    },
    {
        name: "Tasks",
        icon: TasksIcon
    },
    {
        name: "Notes",
        icon: NotesIcon
    },  
    {
        name: "History",
        icon: HistoryIcon
    },    
    {
        name: "Calculator",
        icon: CalculatorIcon
    },
    {
        name: "Translator",
        icon: TranslatorIcon
    },  
    {
        name: "ChatGPT",
        icon: ChatGPTIcon
    },
]

export const BOTTOM_NAV_APPS: Apps[] = [
    {
        name: "Widgets",
        icon: WidgetsIcon
    },
    {
        name: "Backgrounds",
        icon: BackgroundsIcon
    },
    {
        name: "Impact",
        icon: ImpactIcon
    }
]

export const SETTING_MODES: SettingModes[] = [
    "General",
    "Apps",
    "Bar"
]

export const SETTINGS_APPS = WIDGETS_APPS.concat(BOTTOM_NAV_APPS)