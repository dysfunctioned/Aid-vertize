import React from 'react'
import './WidgetsBarActive.css'
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';

export default function WidgetsHeader(props) {
    return (
        <div className='widgets-bar-header'>
            <div className='header-text'>{props.widgetsDisplay}</div>

            <button className='close-btn2' onClick={() => { props.setWidgetsDisplay(null); }}>
                <CloseIcon style={{ fontSize: "17px", color: "#D8D8D8" }} />
            </button>

            {(props.widgetsDisplay == "History") ?
                <button className='launch-btn' onClick={() => { chrome.tabs.create({ url: 'chrome://history' }); }}>
                    <LaunchIcon style={{ fontSize: "17px", color: "#D8D8D8" }} />
                </button>
                : <></>
            }

        </div>
    )
}
