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
    return (
        <div style={{
            display: 'flex', flexDirection: 'column',
            background: 'rgba(217, 217, 217, 0.40)', borderRadius: '10px', opacity: 0.8,
            left: '13px', position: 'absolute',
        }}>
            <ButtonGroup orientation='vertical' sx={{ flex: 1 }}>

                <IconButton onClick={() => props.setDisplay("Calendar")}>
                    <CalendarIcon sx={{ color: '#00000033' }} />
                </IconButton>

                <IconButton onClick={() => props.setDisplay("Tasks")}>
                    <ChecklistIcon sx={{ color: '#00000033' }} />
                </IconButton>

                <IconButton onClick={() => props.setDisplay("Notes")}>
                    <StickyNoteIcon sx={{ color: '#00000033' }} />
                </IconButton>

                <IconButton onClick={() => props.setDisplay("History")}>
                    <ClockIcon sx={{ color: '#00000033' }} />
                </IconButton>

                <IconButton onClick={() => props.setDisplay("Calculator")}>
                    <CalculatorIcon sx={{ color: '#00000033' }} />
                </IconButton>

                <IconButton onClick={() => props.setDisplay("Translate")}>
                    <TranslateIcon sx={{ color: '#00000033' }} />
                </IconButton>

                <div style={{ width: '29px', borderTop: '1px solid #00000033', marginLeft: '5px', }} />

                <IconButton onClick={() => props.setDisplay("Settings")}>
                    <SettingsIcon sx={{ color: '#00000033' }} />
                </IconButton>
            </ButtonGroup>
        </div>
    )
}
