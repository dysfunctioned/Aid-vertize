import React, { useEffect, useState } from "react"
import "./SettingsBar.css"
import Switch from '@mui/material/Switch';

const SettingsBar = () => {

    const [isDisplayToolBar, setIsDisplayToolBar] = useState(false);

    const displayToolBarKey = 'isDisplayToolBar'

    useEffect(() => {
        const storedValue = localStorage.getItem(displayToolBarKey);
        if (storedValue !== null) {
            setIsDisplayToolBar(JSON.parse(storedValue));
        }
    }, []);

    const handleSwitchChange = () => {
        const newValue = !isDisplayToolBar;
        setIsDisplayToolBar(newValue);
        // Store the new value in localStorage
        localStorage.setItem(displayToolBarKey, JSON.stringify(newValue));
    };

    return (
        <>
            <div className="bar-p1">
                <p className="bar-header">BEHAVIOR</p>
                <div className="content">
                    <p style={{fontSize: '1rem'}}>
                        Display a toolbar across all tabs when hovering over egde of browser
                    </p>
                    <Switch checked={isDisplayToolBar} onChange={handleSwitchChange}/>
                </div>
            </div>
        </>
    )
}

export default SettingsBar;