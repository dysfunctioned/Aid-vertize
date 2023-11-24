import React, { useState } from 'react'
import WidgetsNavActive from './WidgetsNavActive'
import './WidgetsBarActive.css'
import History from '../../../widgets/history/History'
import Calculator from '../../../widgets/calculator/Calculator'
import WidgetsHeader from './WidgetsHeader'


const displayWidget = (display: string) => {
  switch (display){
    case "History":
      return <History/>
    case "Calculator":
      return <Calculator/>
    default:
      <></>
  }
}

export default function WidgetsBarActive(props) {
  return (
    <div className='widgets-box' style={{ transition: 'width 2s' }}>
      <WidgetsNavActive display={props.display} setDisplay={props.setDisplay} />
      <div className='widgets-bar-content'>
        <WidgetsHeader display={props.display} setDisplay={props.setDisplay} />
        {displayWidget(props.display)}
      </div>
    </div>
  )
}