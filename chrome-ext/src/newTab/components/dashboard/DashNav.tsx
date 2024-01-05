import React from "react";
import "./dashboard.css"
import CloseIcon from '@mui/icons-material/Close'
import useDisplayStore from '../../../stores/displayStore';
import { BOTTOM_NAV_APPS } from "../../../constants";

export default function DashNav() {

    const { setDisplay, isActive } = useDisplayStore();

    return (
        <nav className="nav">
            <a className="dashboard-text">Dashboard</a>
            <ul className="buttons">
                {BOTTOM_NAV_APPS.map((app) => {
                    return (
                        <li className="button-text" onClick={() => setDisplay(app.name)}
                            style={{ color: isActive(app.name) ? "#606367": "#BABCBE" }}>
                            {app.name}
                        </li>
                    )
                })}
            </ul>
            <button className="close-btn" onClick={() => {setDisplay(null);}}>
                <CloseIcon style={{ fontSize: "20px", color: "#606367" }} />
            </button>
        </nav>
    );
}