import React from 'react'
import WidgetsNavActive from './WidgetsNavActive'
import './WidgetsBarActive.css'
import History from '../../../widgets/history/History'
import WidgetsHeader from './WidgetsHeader'

export default function WidgetsBarActive(props) {
  return (
    <div className='widgets-box'>
      <WidgetsNavActive />
      <div className='widgets-bar-content'>
        <WidgetsHeader display={props.display} setDisplay={props.setDisplay} />
        {(props.display == "History") ? <History /> : <></>}
      </div>
    </div>
  )
}