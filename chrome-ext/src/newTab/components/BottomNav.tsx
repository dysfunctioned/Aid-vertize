import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WidgetsIcon from '../../assets/widgets.svg';
import BackgroundsIcon from '../../assets/backgrounds.svg';
import ImpactIcon from '../../assets/impact.svg';

export const BottomNav = (props) => {

  return (
    <BottomNavigation className='bottom-nav'
      value={props.display}
      onChange={(event, newValue) => { props.setDisplay(newValue) }}
      showLabels={false}
      sx={{
        bgcolor: (!props.dashPopup) ? 'rgba(217, 217, 217, 0.40)' : '#FFF',
        width: 140,
        height: 41,
        flexShrink: 0,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8,
        position: 'fixed',
        alignSelf: 'flex-end',
        marginBottom: '15px',
      }}
    >
      <BottomNavigationAction
        icon={<img src={WidgetsIcon} style={{
          width: 19, height: 19, zIndex: 999,
          filter: (props.display != "Widgets") ? 'brightness(0)' : "",
          opacity: (props.display != "Widgets") ? '0.5' : "1",
        }} />}
        sx={{ minWidth: 10, }}
        TouchRippleProps={{
          style: {
            width: 25, height: 25, top: -3, left: 11,
            backgroundColor: (props.display == "Widgets") ? '#606367' : 'transparent',
            borderRadius: 5,
          }
        }}
        onClick={() => {
          props.setDashPopup(true);
          props.setDisplay("Widgets");
        }} />

      <BottomNavigationAction
        icon={<img src={BackgroundsIcon} style={{
          width: 19, height: 19, zIndex: 999,
          filter: (props.display != "Backgrounds") ? 'brightness(0)' : "",
          opacity: (props.display != "Backgrounds") ? '0.5' : "1",
        }} />}
        sx={{ minWidth: 10, }}
        TouchRippleProps={{
          style: {
            width: 25, height: 25, top: -3, left: 11,
            backgroundColor: (props.display == "Backgrounds") ? '#606367' : 'transparent',
            borderRadius: 5,
          }
        }}
        onClick={() => {
          props.setDashPopup(true);
          props.setDisplay("Backgrounds");
        }} />

      <BottomNavigationAction
        icon={<img src={ImpactIcon} style={{
          width: 19, height: 19, zIndex: 999,
          filter: (props.display != "Impact") ? 'brightness(0)' : "",
          opacity: (props.display != "Impact") ? '0.5' : "1",
        }} />}
        sx={{ minWidth: 10, }}
        TouchRippleProps={{
          style: {
            width: 25, height: 25, top: -3, left: 11,
            backgroundColor: (props.display == "Impact") ? '#606367' : 'transparent',
            borderRadius: 5,
          }
        }}
        onClick={() => {
          props.setDashPopup(true);
          props.setDisplay("Impact");
        }} />
    </BottomNavigation>
  );
}