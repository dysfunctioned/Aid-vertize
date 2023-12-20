import React, { useState, useEffect } from 'react';
import './Widgets.css'
import Switch from '@mui/material/Switch';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function Widgets(props) {

  const handleSwitchChange = (name) => (event) => {
    const updatedSwitchValues = { ...props.switchValues, [name]: event.target.checked };
    props.setSwitchValues(updatedSwitchValues);
    localStorage.setItem('switchValues', JSON.stringify(updatedSwitchValues));
  };


  return (
    <div className='widgets'>
      <div className='widgets-header'>WIDGETS</div>

      <List style={{ padding: '2%', }}>

        <ListItem>
          <ListItemText primary="Time and Date"
            primaryTypographyProps={{ style: { color: '#374151', fontFamily: 'Inter', fontSize: '14px', fontStyle: 'normal', fontWeight: 400, lineHeight: '150%', letterSpacing: '0.28px', } }}
          />
          <Switch
            checked={props.switchValues.timeDate}
            onChange={handleSwitchChange('timeDate')}
            style={{ color: props.switchValues.timeDate ? '#9077FF' : undefined, }}
            sx={{ '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': { backgroundColor: '#D6CDFF', }, }}
          />
        </ListItem>

        <div style={{ width: '100%', height: '1px', backgroundColor: '#E2E2E2', }}></div>

        <ListItem>
          <ListItemText primary="Search"
            primaryTypographyProps={{ style: { color: '#374151', fontFamily: 'Inter', fontSize: '14px', fontStyle: 'normal', fontWeight: 400, lineHeight: '150%', letterSpacing: '0.28px', } }}
          />
          <Switch
            checked={props.switchValues.search}
            onChange={handleSwitchChange('search')}
            style={{ color: props.switchValues.search ? '#9077FF' : undefined, }}
            sx={{ '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': { backgroundColor: '#D6CDFF', }, }}
          />
        </ListItem>

        <div style={{ width: '100%', height: '1px', backgroundColor: '#E2E2E2' }}></div>

        <ListItem>
          <ListItemText primary="Weather"
            primaryTypographyProps={{ style: { color: '#374151', fontFamily: 'Inter', fontSize: '14px', fontStyle: 'normal', fontWeight: 400, lineHeight: '150%', letterSpacing: '0.28px', } }}
          />
          <Switch
            checked={props.switchValues.weather}
            onChange={handleSwitchChange('weather')}
            style={{ color: props.switchValues.weather ? '#9077FF' : undefined, }}
            sx={{ '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': { backgroundColor: '#D6CDFF', }, }}
          />
        </ListItem>

        <div style={{ width: '100%', height: '1px', backgroundColor: '#E2E2E2' }}></div>

        <ListItem>
          <ListItemText primary="Most visited webpages"
            primaryTypographyProps={{ style: { color: '#374151', fontFamily: 'Inter', fontSize: '14px', fontStyle: 'normal', fontWeight: 400, lineHeight: '150%', letterSpacing: '0.28px', } }}
          />
          <Switch
            checked={props.switchValues.mostVisited}
            onChange={handleSwitchChange('mostVisited')}
            style={{ color: props.switchValues.mostVisited ? '#9077FF' : undefined, }}
            sx={{ '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': { backgroundColor: '#D6CDFF', }, }}
          />
        </ListItem>

        <div style={{ width: '100%', height: '1px', backgroundColor: '#E2E2E2' }}></div>

        <ListItem>
          <ListItemText primary="Recently closed webpages"
            primaryTypographyProps={{ style: { color: '#374151', fontFamily: 'Inter', fontSize: '14px', fontStyle: 'normal', fontWeight: 400, lineHeight: '150%', letterSpacing: '0.28px', } }}
          />
          <Switch
            checked={props.switchValues.recentlyClosed}
            onChange={handleSwitchChange('recentlyClosed')}
            style={{ color: props.switchValues.recentlyClosed ? '#9077FF' : undefined, }}
            sx={{ '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': { backgroundColor: '#D6CDFF', }, }}
          />
        </ListItem>
      </List>
    </div>
  )
}