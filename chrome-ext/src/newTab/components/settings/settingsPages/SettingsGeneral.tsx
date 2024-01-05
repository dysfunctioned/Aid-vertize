import React, { ChangeEvent, useEffect, useState } from "react"
import Switch from '@mui/material/Switch';
import "./SettingsGeneral.css"

const SettingsGeneral = () =>{

    const [is24Hours, setIs24Hours] = useState(false);
    const [userMode, setUserMode] = useState(
        localStorage.getItem('userMode') || 'system'
    );

    const [systemMode, setSystemMode] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    );

    const clockKey = 'is24HourClock';

    useEffect(() => {
        const storedValue = localStorage.getItem(clockKey);
        if (storedValue !== null) {
            setIs24Hours(JSON.parse(storedValue));
        }
    }, []);

    useEffect(() => {
        // Save the user's preference to local storage
        localStorage.setItem('userMode', userMode);
    }, [userMode]);

    // this doesnt need to be here if we use material ui
    const mode = userMode === 'system' ? systemMode : userMode;

    useEffect(() => {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
      const handleSystemModeChange = (event) => {
        setSystemMode(event.matches ? 'dark' : 'light');
      };
  
      darkModeMediaQuery.addListener(handleSystemModeChange);
  
      return () => {
        darkModeMediaQuery.removeListener(handleSystemModeChange);
      };

     
    }, []);
     // none of this is needed if we switch to material ui later

    const handleSwitchChange = () => {
        const newValue = !is24Hours;
        setIs24Hours(newValue);
        // Store the new value in localStorage
        localStorage.setItem(clockKey, JSON.stringify(newValue));
    };


    return (
        <>
            <div className="general-p1">
                <p className="general-header">TIME &amp; DATE</p>
                <div className="content">
                    <p style={{fontSize: '1rem'}}>
                        Use 24 hour clock
                    </p>
                    <Switch onChange={handleSwitchChange} checked={is24Hours}/>
                </div>
            </div>
            <div className="general-p2">
                <p className="general-header">THEME</p>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <div onClick={() => setUserMode("System")}>
                        <div className="w-[171px] h-[129px] relative">
                            <div className="w-[171px] h-[129px] left-0 top-0 absolute bg-zinc-100 rounded-[5px] border border-zinc-300"></div>
                            <div className="w-14 h-28 left-[10px] top-[9px] absolute bg-white rounded-sm border border-stone-300"></div>
                            <div className="w-1.5 h-28 left-[8px] top-[9px] absolute bg-zinc-300 rounded-[100px]"></div>
                        </div>
                        <p style={{fontSize: '1rem'}}>
                            System
                        </p>
                    </div>

                    <div onClick={() => setUserMode("Light")}>
                        <div className="w-[184px] h-[141px] relative">
                            <div className="w-[184px] h-[141px] left-0 top-0 absolute bg-violet-100 rounded-[5px] border border-stone-300"></div>
                            <div className="w-1.5 h-28 left-[14px] top-[15px] absolute bg-zinc-300 rounded-[100px] border border-stone-300"></div>
                            <div className="w-[171px] h-[129px] left-[6px] top-[6px] absolute bg-zinc-100 rounded-[5px] border border-stone-300"></div>
                            <div className="w-14 h-28 left-[16px] top-[15px] absolute bg-white rounded-sm border border-stone-300"></div>
                        </div> 
                        <p style={{fontSize: '1rem'}}>
                            Light
                        </p>
                    </div>

                    <div onClick={() => setUserMode("Dark")}>
                        <div className="w-[171px] h-[129px] relative">
                            <div className="w-[171px] h-[129px] left-0 top-0 absolute bg-neutral-700 rounded-[5px] border border-zinc-300"></div>
                            <div className="w-14 h-28 left-[10px] top-[9px] absolute bg-neutral-400 rounded-sm"></div>
                            <div className="w-1.5 h-28 left-[8px] top-[9px] absolute bg-neutral-500 rounded-[100px]"></div>
                        </div>
                        <p style={{fontSize: '1rem'}}>
                            Dark
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SettingsGeneral;