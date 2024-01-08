import React, { useState } from 'react'
import WidgetsNavActive from './WidgetsNavActive'
import './WidgetsBarActive.css'
import WidgetsHeader from './WidgetsHeader'
import History from 'src/newTab/widgets/history/History'
import ChatGPT from 'src/newTab/widgets/ChatGPT'
import Translate from 'src/newTab/widgets/Translate'

import Slide from '@mui/material/Slide';

export default function WidgetsBarActive(props) {
  return (
    <Slide direction="right" in={!!props.widgetsDisplay} timeout={200} style={{ fontFamily: 'Inter' }}>
      <div className='widgets-box' style={{ width: '440px', height: '94%', flexShrink: 0, backgroundColor: '#FFF', border: '1px solid #EDEFEF', borderRadius: '10px', position: 'fixed', flexDirection: 'row', left: '10px', display: 'flex', overflow: 'hidden' }}>
        <WidgetsNavActive widgetsDisplay={props.widgetsDisplay} setWidgetsDisplay={props.setWidgetsDisplay} settingsDisplay={props.settingsDisplay} setSettingsDisplay={props.setSettingsDisplay} />
        <div className='widgets-bar-content'>
          <WidgetsHeader widgetsDisplay={props.widgetsDisplay} setWidgetsDisplay={props.setWidgetsDisplay} settingsDisplay={props.settingsDisplay} setSettingsDisplay={props.setSettingsDisplay} />
          {(props.widgetsDisplay == "History") ? <History /> : <></>}
          {(props.widgetsDisplay == "ChatGPT") ? <ChatGPT /> : <></>}
          {(props.widgetsDisplay == "Translate") ? <Translate /> : <></>}
        </div>
      </div>
    </Slide>
  )
}