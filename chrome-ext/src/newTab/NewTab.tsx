import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './tabs.css'
import Dashboard from './components/dashboard'
import Navbar from './components/Navbar'
import Backgrounds from './components/pages/Backgrounds'
import Impact from './components/pages/Impact'
import Widgets from './components/pages/Widgets'

function NewTab() {
    const [dashPopup, setDashPopup] = useState(false);

    const [display, setDisplay] = useState("Widgets");

    useEffect(() => {
        console.log(display);
    }, [display]);

    return (
        <>
            <button onClick={() => setDashPopup(true)}>Open Dashboard</button>
            <Dashboard trigger={dashPopup} setTrigger={setDashPopup}>
                <Navbar dashPopup={dashPopup} setDashPopup={setDashPopup} display={display} setDisplay={setDisplay} />
                {display === 'Widgets' && <Widgets />}
                {display === 'Backgrounds' && <Backgrounds />}
                {display === 'Impact' && <Impact />}
            </Dashboard>
        </>
    )
}

export default NewTab