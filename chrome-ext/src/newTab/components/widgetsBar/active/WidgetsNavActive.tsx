import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import CalendarIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChecklistIcon from '@mui/icons-material/Checklist';
import StickyNoteIcon from '@mui/icons-material/StickyNote2Outlined';
import ClockIcon from '@mui/icons-material/QueryBuilderOutlined';
import CalculatorIcon from '@mui/icons-material/CalculateOutlined';
import TranslateIcon from '@mui/icons-material/TranslateOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

export default function WidgetsNavActive(props) {
  const isActive = (widget) => props.display === widget;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', boxShadow: '0.5px 0px 0px 0px #C4C4C4', }}>
      <ButtonGroup orientation='vertical' sx={{ flex: 1 }}>

        <IconButton
          onClick={() => props.setDisplay("Calendar")}
          sx={{
            backgroundColor: isActive('Calendar') ? '#606367' : 'inherit',
            '&:hover': { backgroundColor: isActive('Calendar') ? '#606367' : '' },
          }}>
          <CalendarIcon sx={{ color: isActive('Calendar') ? '#FFFFFF' : '#BABCBE' }} />
        </IconButton>

        <IconButton
          onClick={() => props.setDisplay("Tasks")}
          sx={{
            backgroundColor: isActive('Tasks') ? '#606367' : 'inherit',
            '&:hover': { backgroundColor: isActive('Tasks') ? '#606367' : '' },
          }}>
          <ChecklistIcon sx={{ color: isActive('Tasks') ? '#FFFFFF' : '#BABCBE' }} />
        </IconButton>

        <IconButton
          onClick={() => props.setDisplay("Notes")}
          sx={{
            backgroundColor: isActive('Notes') ? '#606367' : 'inherit',
            '&:hover': { backgroundColor: isActive('Notes') ? '#606367' : '' },
          }}>
          <StickyNoteIcon sx={{ color: isActive('Notes') ? '#FFFFFF' : '#BABCBE' }} />
        </IconButton>

        <IconButton
          onClick={() => props.setDisplay("History")}
          sx={{
            backgroundColor: isActive('History') ? '#606367' : 'inherit',
            '&:hover': { backgroundColor: isActive('History') ? '#606367' : '' },
          }}>
          <ClockIcon sx={{ color: isActive('History') ? '#FFFFFF' : '#BABCBE' }} />
        </IconButton>

        <IconButton
          onClick={() => props.setDisplay("Calculator")}
          sx={{
            backgroundColor: isActive('Calculator') ? '#606367' : 'inherit',
            '&:hover': { backgroundColor: isActive('Calculator') ? '#606367' : '' },
          }}>
          <CalculatorIcon sx={{ color: isActive('Calculator') ? '#FFFFFF' : '#BABCBE' }} />
        </IconButton>

        <IconButton
          onClick={() => props.setDisplay("Translate")}
          sx={{
            backgroundColor: isActive('Translate') ? '#606367' : 'inherit',
            '&:hover': { backgroundColor: isActive('Translate') ? '#606367' : '' },
          }}>
          <TranslateIcon sx={{ color: isActive('Translate') ? '#FFFFFF' : '#BABCBE' }} />
        </IconButton>
      </ButtonGroup>

      <IconButton
        onClick={() => props.setDisplay("Settings")}
        sx={{
          backgroundColor: isActive('Settings') ? '#606367' : 'inherit',
          '&:hover': { backgroundColor: isActive('Settings') ? '#606367' : '' },
        }}>
        <SettingsIcon sx={{ color: isActive('Settings') ? '#FFFFFF' : '#BABCBE' }} />
      </IconButton>

    </div>
  )
}
