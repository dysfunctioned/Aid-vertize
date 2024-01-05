import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import useDisplayStore from '../../../stores/displayStore'
import { BOTTOM_NAV_APPS } from '../../../constants';

export default function BottomNav() {

  const { display, setDisplay, isActive } = useDisplayStore();

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      borderRadius: '10px', opacity: 0.8,
      position: 'absolute', bottom: '13px',
      backgroundColor: (display == null) ? 'rgba(217, 217, 217, 0.40)' : '#FFF',
    }}>
      <ButtonGroup sx={{ flex: 1 }}>
        {
          BOTTOM_NAV_APPS.map((app, i) => {
            return (
              <IconButton
                onClick={() => setDisplay(app.name)}
                sx={{
                  backgroundColor: isActive(app.name) ? '#606367' : 'inherit',
                  '&:hover': { backgroundColor: isActive(app.name) ? '#606367' : '' },
                  margin: '3px'
                }}
                key={i}
              >
                {
                  <app.icon style={{
                      width: 19, height: 19, zIndex: 999,
                      filter: !isActive(app.name) ? 'brightness(0)' : "",
                      opacity: !isActive(app.name) ? '0.2' : "1",
                      transition: 'filter 0.3s, opacity 0.3s',
                    }} 
                  />
                }
              </IconButton>
            )
          })
        }
      </ButtonGroup>
    </div>
  );
}