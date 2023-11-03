import React, { useState, useEffect } from "react";
import "./dashboard.css"
import CloseIcon from '@mui/icons-material/Close'

export default function DashNav(props) {
    return (
        <nav className="nav">
            <a className="dashboard-text">Dashboard</a>
            <ul className="buttons">
                <li className="button-text" onClick={() => props.setDisplay("Widgets")}
                    style={(props.display === "Widgets") ? { color: "#606367" } : { color: "#BABCBE" }}>
                    Widgets
                </li>
                <li className="button-text" onClick={() => props.setDisplay("Backgrounds")}
                    style={(props.display === "Backgrounds") ? { color: "#606367" } : { color: "#BABCBE" }}>
                    Backgrounds
                </li>
                <li className="button-text" onClick={() => props.setDisplay("Impact")}
                    style={(props.display === "Impact") ? { color: "#606367" } : { color: "#BABCBE" }}>
                    Impact
                </li>
            </ul>
            <button className="close-btn" onClick={() => {
                props.setDashPopup(false);
                props.setDisplay(null);
            }}>
                <CloseIcon style={{ fontSize: "20px", color: "#606367" }} />
            </button>
        </nav>
    );
}