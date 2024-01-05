import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { WIDGETS_APPS } from '../../../../constants';
import useDisplayStore from '../../../../stores/displayStore';

export default function WidgetsNavActive() {

  const { setDisplay, isActive, isSettingsActive } = useDisplayStore();
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', boxShadow: '0.5px 0px 0px 0px #C4C4C4', }}>
      <ButtonGroup orientation='vertical' sx={{ flex: 1 }}>
      {
        WIDGETS_APPS.map((widget) => {
          return (
            <IconButton
              onClick={() => setDisplay(widget.name)}
              sx={{
                backgroundColor: isActive(widget.name) ? '#606367' : 'inherit',
                '&:hover': { backgroundColor: isActive(widget.name) ? '#606367' : '' },
              }}
            >
              <widget.icon 
              //sx={{ color: isActive(widget.name) ? '#FFFFFF' : '#BABCBE' }} 
              />
            </IconButton>
          )
        })
      }
      </ButtonGroup>

      <IconButton
        onClick={() => setDisplay("General")}
        sx={{
          backgroundColor: isSettingsActive() ? '#606367' : 'inherit',
          '&:hover': { backgroundColor: isSettingsActive() ? '#606367' : '' }, 
          // i dont think this actually does anything since the active bar will be closed when we click settings
        }}>
        <SettingsIcon sx={{ color: isSettingsActive() ? '#FFFFFF' : '#BABCBE' }} />
      </IconButton>

    </div>
  )
}
