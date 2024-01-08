import React, { useState } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import CalendarIcon from 'src/assets/icons/CalendarIcon.svg';
import CalendarIconHoverLight from 'src/assets/icons/CalendarIconHoverLight.svg'
import TasksIcon from 'src/assets/icons/TasksIcon.svg';
import TasksIconHoverLight from 'src/assets/icons/TasksIconHoverLight.svg'
import NotesIcon from 'src/assets/icons/NotesIcon.svg';
import NotesIconHoverLight from 'src/assets/icons/NotesIconHoverLight.svg'
import HistoryIcon from 'src/assets/icons/HistoryIcon.svg';
import HistoryIconHoverLight from 'src/assets/icons/HistoryIconHoverLight.svg'
import CalculatorIcon from 'src/assets/icons/CalculatorIcon.svg';
import CalculatorIconHoverLight from 'src/assets/icons/CalculatorIconHoverLight.svg'
import TranslatorIcon from 'src/assets/icons/TranslatorIcon.svg';
import TranslatorIconHoverLight from 'src/assets/icons/TranslatorIconHoverLight.svg'
import ChatGPTIcon from 'src/assets/icons/ChatGPTIcon.svg';
import ChatGPTIconHoverLight from 'src/assets/icons/ChatGPTIconHoverLight.svg'
import SettingsIcon from 'src/assets/icons/SettingsIcon.svg';

export default function WidgetsNavActive(props) {
  const isActive = (widget) => props.widgetsDisplay === widget;

  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const icons = [
    { name: "Calendar", icon: CalendarIcon, hoverLightIcon: CalendarIconHoverLight },
    { name: "Tasks", icon: TasksIcon, hoverLightIcon: TasksIconHoverLight },
    { name: "Notes", icon: NotesIcon, hoverLightIcon: NotesIconHoverLight },
    { name: "History", icon: HistoryIcon, hoverLightIcon: HistoryIconHoverLight },
    { name: "Calculator", icon: CalculatorIcon, hoverLightIcon: CalculatorIconHoverLight },
    { name: "Translate", icon: TranslatorIcon, hoverLightIcon: TranslatorIconHoverLight },
    { name: "ChatGPT", icon: ChatGPTIcon, hoverLightIcon: ChatGPTIconHoverLight },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', boxShadow: '0.5px 0px 0px 0px #C4C4C4', }}>
      <ButtonGroup orientation='vertical' sx={{ flex: 1 }}>

        {icons.map(({ name, icon, hoverLightIcon }) => (
          <Tooltip title={name} placement='right'
            componentsProps={{ tooltip: { sx: { bgcolor: 'white', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))', fontWeight: '600', lineHeight: '18px', letterSpacing: '1px', color: 'black', }, } }}>
            <IconButton
              key={name}
              onClick={() => props.setWidgetsDisplay(name)}
              onMouseEnter={() => setHoveredIcon(name)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {hoveredIcon === name ? <img src={hoverLightIcon} alt={name} style={{ width: '20px', height: '20px' }} /> : <img src={icon} alt={name} style={{ width: '20px', height: '20px' }} />}
            </IconButton>
          </Tooltip>
        ))}

      </ButtonGroup>

      <Tooltip title={"Settings"} placement='right'
        componentsProps={{ tooltip: { sx: { bgcolor: 'white', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))', fontWeight: '600', lineHeight: '18px', letterSpacing: '1px', color: 'black', }, } }}>
        <IconButton
          key={"Settings"}
          onClick={() => props.setSettingsDisplay("General")}
          onMouseEnter={() => setHoveredIcon("Settings")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          {hoveredIcon === "Settings" ? <img src={SettingsIcon} alt={"Settings"} style={{ width: '20px', height: '20px' }} /> : <img src={SettingsIcon} alt={"Settings"} style={{ width: '20px', height: '20px' }} />}
        </IconButton>
      </Tooltip>

    </div>
  )
}
