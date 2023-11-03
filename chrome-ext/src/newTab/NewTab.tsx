import React, { useState, useEffect } from 'react'
import './tabs.css'
import Dashboard from './components/dashboard'
import DashNav from './components/DashNav'
import Backgrounds from './components/pages/Backgrounds'
import Impact from './components/pages/Impact'
import Widgets from './components/pages/Widgets'
import { BottomNav } from './components/BottomNav'

function NewTab() {
    const [dashPopup, setDashPopup] = useState(false);

    const [display, setDisplay] = useState(null);

    useEffect(() => {
        console.log(display);
    }, [display]);

    return (
        <div className='new-tab-override'>
            <BottomNav dashPopup={dashPopup} setDashPopup={setDashPopup} display={display} setDisplay={setDisplay} />
            <Dashboard trigger={dashPopup} setTrigger={setDashPopup}>
                <DashNav dashPopup={dashPopup} setDashPopup={setDashPopup} display={display} setDisplay={setDisplay} />
                {display === 'Widgets' && <Widgets />}
                {display === 'Backgrounds' && <Backgrounds />}
                {display === 'Impact' && <Impact />}
            </Dashboard>
        </div>
    )
}

export default NewTab