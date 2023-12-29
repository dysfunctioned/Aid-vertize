import React from "react";
import CloseIcon from '@mui/icons-material/Close'

export default function SettingsNav(props) {
    return (
        <nav className="nav">
            <a className="dashboard-text">Settings</a>
            <ul className="buttons">
                <li className="button-text" onClick={() => props.setDisplay("General")}
                    style={(props.display === "General") ? { color: "#606367" } : { color: "#BABCBE" }}>
                    General
                </li>
                <li className="button-text" onClick={() => props.setDisplay("Apps")}
                    style={(props.display === "Apps") ? { color: "#606367" } : { color: "#BABCBE" }}>
                    Apps
                </li>
                <li className="button-text" onClick={() => props.setDisplay("Bar")}
                    style={(props.display === "Bar") ? { color: "#606367" } : { color: "#BABCBE" }}>
                    Bar
                </li>
            </ul>
            <button className="close-btn" onClick={() => {
                props.setDisplay(null);
            }}>
                <CloseIcon style={{ fontSize: "20px", color: "#606367" }} />
            </button>
        </nav>
    );
}