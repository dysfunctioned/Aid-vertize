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


export default function WidgetsBarInactive(props) {
    const isActive = (widget) => props.display === widget;

    return (
        <div style={{
            display: 'flex', flexDirection: 'column',
            background: 'rgba(217, 217, 217, 0.40)', borderRadius: '10px', opacity: 0.8,
            left: '13px', position: 'absolute',
        }}>
            <ButtonGroup orientation='vertical' sx={{ flex: 1 }}>

                <IconButton onClick={() => props.setDisplay("Calendar")}>
                    <CalendarIcon sx={{ color: isActive('Calendar') ? '#FFFFFF' : '#BABCBE' }} />
                </IconButton>

                <IconButton onClick={() => props.setDisplay("Tasks")}>
                    <ChecklistIcon sx={{ color: isActive('Tasks') ? '#FFFFFF' : '#BABCBE' }} />
                </IconButton>

                <IconButton onClick={() => props.setDisplay("Notes")}>
                    <StickyNoteIcon sx={{ color: isActive('Notes') ? '#FFFFFF' : '#BABCBE' }} />
                </IconButton>

                <IconButton onClick={() => props.setDisplay("History")}>
                    <ClockIcon sx={{ color: isActive('History') ? '#FFFFFF' : '#BABCBE' }} />
                </IconButton>

                <IconButton onClick={() => props.setDisplay("Calculator")}>
                    <CalculatorIcon sx={{ color: isActive('Calculator') ? '#FFFFFF' : '#BABCBE' }} />
                </IconButton>

                <IconButton onClick={() => props.setDisplay("Translate")}>
                    <TranslateIcon sx={{ color: isActive('Translate') ? '#FFFFFF' : '#BABCBE' }} />
                </IconButton>

                <div style={{ width: '29px', borderTop: '1px solid #00000033', marginLeft: '5px', }} />

                <IconButton onClick={() => props.setDisplay("Settings")}>
                    <SettingsIcon sx={{ color: isActive('Settings') ? '#FFFFFF' : '#BABCBE' }} />
                </IconButton>
            </ButtonGroup>
        </div>
    )
}
