import React from "react";
import "./Settings.css"
import CloseIcon from '@mui/icons-material/Close'
import { SETTING_MODES } from "../../../constants";
import useDisplayStore from  '../../../stores/displayStore';

export default function SettingsNav() {

    const { setDisplay, isActive } = useDisplayStore();

    return (
        <nav className="nav">
            <a className="settingsboard-text">Settings</a>
            <ul className="buttons">
            {
                SETTING_MODES.map((mode, i) => {
                    return (
                        <li className="button-text" onClick={() => setDisplay(mode)} 
                            style={{color: isActive(mode) ? "#606367" :  "#BABCBE" }}
                            key={i}
                        >
                            {mode}
                        </li>
                    )
                })
            }
            </ul>
            <button className="close-btn" onClick={() => { setDisplay(null) }}>
                <CloseIcon style={{ fontSize: "20px", color: "#606367" }} />
            </button>
        </nav>
    );
}