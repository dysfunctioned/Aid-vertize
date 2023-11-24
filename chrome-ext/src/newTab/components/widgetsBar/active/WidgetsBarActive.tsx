import React, { useState } from 'react'
import WidgetsNavActive from './WidgetsNavActive'
import './WidgetsBarActive.css'
import WidgetsHeader from './WidgetsHeader'
import History from 'src/newTab/widgets/history/History'
import ChatGPT from 'src/newTab/widgets/ChatGPT'
import Translate from 'src/newTab/widgets/Translate'

export default function WidgetsBarActive(props) {
  return (
    <div className='widgets-box' style={{ transition: 'width 2s' }}>
      <WidgetsNavActive display={props.display} setDisplay={props.setDisplay} />
      <div className='widgets-bar-content'>
        <WidgetsHeader display={props.display} setDisplay={props.setDisplay} />
        {(props.display == "History") ? <History /> : <></>}
        {(props.display == "ChatGPT") ? <ChatGPT /> : <></>}
        {(props.display == "Translate") ? <Translate /> : <></>}
      </div>
    </div>
  )
}