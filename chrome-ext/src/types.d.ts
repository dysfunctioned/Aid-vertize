import { SvgIconComponent } from "@mui/icons-material"
import { FC, SVGProps } from "react"

export type WidgetsModes = "Calendar" | "Tasks" | "Notes" | "History" | "Calculator" | "Translator" | "ChatGPT" | "Settings"
export type BottomNavModes = "Widgets" | "Backgrounds" | "Impact"
export type SettingModes = "General" | "Apps" | "Bar"

export type DisplayModes = WidgetsModes | BottomNavModes | SettingModes | null

export interface Apps {
    name: DisplayModes,
    icon: FC<SVGProps<SVGElement>>
}

