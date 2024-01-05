import React from 'react'
import './WidgetsBarActive.css'
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import useDisplayStore from  '../../../../stores/displayStore';

export default function WidgetsHeader() {

    const { display, setDisplay, isActive } = useDisplayStore();

    return (
        <div className='widgets-bar-header'>
            <div className='header-text'>{display}</div>

            <button className='close-btn2' onClick={() => { setDisplay(null); }}>
                <CloseIcon style={{ fontSize: "17px", color: "#D8D8D8" }} />
            </button>

            {
            
                isActive("History") &&
                <button className='launch-btn' onClick={() => { chrome.tabs.create({ url: 'chrome://history' }); }}>
                    <LaunchIcon style={{ fontSize: "17px", color: "#D8D8D8" }} />
                </button>
            }

        </div>
    )
}
