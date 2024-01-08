import React from 'react'
import './WidgetsBarActive.css'
import IconButton from '@mui/material/IconButton';

import CloseIcon from 'src/assets/icons/CloseIcon.svg'
import LaunchIcon from 'src/assets/icons/LaunchIcon.svg'

export default function WidgetsHeader(props) {
    return (
        <div className='widgets-bar-header'>
            <div className='header-text'>{props.widgetsDisplay}</div>

            <IconButton onClick={() => props.setWidgetsDisplay(null)} style={{ position: 'absolute', top: '9px', right: '10px' }}>
                <img src={CloseIcon} style={{ width: '11px', height: '11px' }} />
            </IconButton>

            {(props.widgetsDisplay == "History") &&
                <IconButton onClick={() => { chrome.tabs.create({ url: 'chrome://history' }); }} style={{ position: 'absolute', top: '9px', right: '39px' }}>
                    <img src={LaunchIcon} style={{ width: '13px', height: '13px' }} />
                </IconButton>
            }

        </div>
    )
}
