import React from "react"
import "./SettingsApps.css"
import { SETTINGS_APPS } from "../../../../constants"
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import useAppStore from "../../../../stores/appStore";
import { DisplayModes } from "../../../../types";

const SettingsApps = () => {

    const {activeApps, toggleActiveApp} = useAppStore();

    const toggleApp = (key: DisplayModes) => {
        toggleActiveApp(key)
    }

    return (
        <div className="apps-p1">
            <p className="apps-header">APPS</p>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '90%'}}>
                {
                    SETTINGS_APPS.map((app, i) => {
                        return (
                            <>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div style={{display: 'flex', flexDirection: 'row', gap: '2rem'}}>
                                        <app.icon
                                            style={{ width: 19, height: 19 }}
                                        />
                                        <p style={{fontSize: '1rem'}}>{app.name}</p>
                                    </div>
                                    <Switch onChange={() => toggleApp(app.name)} checked={activeApps[app.name]}/>
                                </div>
                                {i < SETTINGS_APPS.length-1 && <Divider/>}
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SettingsApps;