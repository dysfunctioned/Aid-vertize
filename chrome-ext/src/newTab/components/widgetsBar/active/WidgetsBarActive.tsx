import React from 'react'
import WidgetsNavActive from './WidgetsNavActive'
import './WidgetsBarActive.css'
import History from '../../../widgets/history/History'
import WidgetsHeader from './WidgetsHeader'
import useDisplayStore from '../../../../stores/displayStore'

export default function WidgetsBarActive() {
  const { isWidgetsActive, isActive} = useDisplayStore();
  
  return (
    isWidgetsActive() &&
    <div className='widgets-box' style={{ transition: 'width 2s' }}>
          <WidgetsNavActive />
          <div className='widgets-bar-content'>
            <WidgetsHeader />
            {isActive("History") && <History />}
          </div>
    </div>
  )
}