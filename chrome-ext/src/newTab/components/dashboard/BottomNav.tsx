import React from 'react'
import WidgetsIcon from 'src/assets/WidgetsIcon.svg';
import BackgroundsIcon from 'src/assets/BackgroundsIcon.svg';
import ImpactIcon from 'src/assets/ImpactIcon.svg';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';

export default function BottomNav(props) {
  const isActive = (page) => props.display === page;

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      borderRadius: '10px', opacity: 0.8,
      position: 'absolute', bottom: '13px',
      backgroundColor: (props.display == null) ? 'rgba(217, 217, 217, 0.40)' : '#FFF',
      zIndex: 999,
    }}>
      <ButtonGroup sx={{ flex: 1 }}>

        <IconButton
          onClick={() => props.setDisplay("Widgets")}
          sx={{
            backgroundColor: isActive('Widgets') ? '#606367' : 'inherit',
            '&:hover': { backgroundColor: isActive('Widgets') ? '#606367' : '' },
            margin: '3px'
          }}>
          {<img src={WidgetsIcon} style={{
            width: 19, height: 19, zIndex: 999,
            filter: (props.display != "Widgets") ? 'brightness(0)' : "",
            opacity: (props.display != "Widgets") ? '0.2' : "1",
            transition: 'filter 0.3s, opacity 0.3s',
          }} />}
        </IconButton>

        <IconButton
          onClick={() => props.setDisplay("Backgrounds")}
          sx={{
            backgroundColor: isActive('Backgrounds') ? '#606367' : 'inherit',
            '&:hover': { backgroundColor: isActive('Backgrounds') ? '#606367' : '' },
            margin: '3px'
          }}>
          {<img src={BackgroundsIcon} style={{
            width: 19, height: 19, zIndex: 999,
            filter: (props.display != "Backgrounds") ? 'brightness(0)' : "",
            opacity: (props.display != "Backgrounds") ? '0.2' : "1",
            transition: 'filter 0.3s, opacity 0.3s',
          }} />}
        </IconButton>

        <IconButton
          onClick={() => props.setDisplay("Impact")}
          sx={{
            backgroundColor: isActive('Impact') ? '#606367' : 'inherit',
            '&:hover': { backgroundColor: isActive('Impact') ? '#606367' : '' },
            margin: '3px'
          }}>
          {<img src={ImpactIcon} style={{
            width: 19, height: 19, zIndex: 999,
            filter: (props.display != "Impact") ? 'brightness(0)' : "",
            opacity: (props.display != "Impact") ? '0.2' : "1",
            transition: 'filter 0.3s, opacity 0.3s',
          }} />}
        </IconButton>
      </ButtonGroup>
    </div>
  );
}