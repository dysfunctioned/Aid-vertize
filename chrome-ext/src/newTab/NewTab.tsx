import React, { useState, useEffect } from 'react'
import './tabs.css'

// Dashboard
import Dashboard from './components/dashboard/dashboard'
import DashNav from './components/dashboard/DashNav'
import Backgrounds from './components/dashboard/dashPages/Backgrounds'
import Impact from './components/dashboard/dashPages/Impact'
import Widgets from './components/dashboard/dashPages/Widgets'

// Settings
import Settings from './components/settings/Settings'
import SettingsNav from './components/settings/SettingsNav'
import Apps from './components/settings/settingsPages/Apps'
import General from './components/settings/settingsPages/General'
import Bar from './components/settings/settingsPages/Bar'

// Nav bars
import BottomNav from './components/dashboard/BottomNav'
import WidgetsBarActive from './components/widgetsBar/active/WidgetsBarActive'
import WidgetsBarInactive from './components/widgetsBar/inactive/WidgetsBarInactive'

// Widgets
import Weather from './weather/Weather'
import DateTime from './widgets/DateTime'
import SearchBar from './widgets/SearchBar'
import MostVisited from './widgets/MostVisited'
import RecentlyClosed from './widgets/RecentlyClosed'
import DefaultBackground from '../assets/DefaultBackground.webp'

// Misc.
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { Backdrop } from '@mui/material';

function NewTab() {
    // Determines the current dashboard tab (null if dashboard is closed)
    const [dashDisplay, setDashDisplay] = useState(null);

    // Determines the current settings tab (null if settings are closed)
    const [settingsDisplay, setSettingsDisplay] = useState(null);

    // Determines the current sidebar tab (null if widgets bar is not active)
    const [widgetsDisplay, setWidgetsDisplay] = useState(null);

    // Determines current background image
    const [background, setBackground] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        if (localValue == null) return DefaultBackground;
        return JSON.parse(localValue);
    });
    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(background));
    }, [background]);

    // Determines state of widgets
    const initialState = JSON.parse(localStorage.getItem('switchValues')) || {
        timeDate: true,
        search: true,
        weather: true,
        mostVisited: true,
        recentlyClosed: true,
    };
    const [switchValues, setSwitchValues] = useState(initialState);

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <div className='new-tab-override' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', display: 'flex', flexDirection: 'column' }}>
                {/* Darkened backdrop for the dashboard and settings */}
                <Backdrop sx={{ color: '#fff', zIndex: 2, }} open={dashDisplay != null} onClick={() => { setDashDisplay(null) }} />
                <Backdrop sx={{ color: '#fff', zIndex: 2, }} open={settingsDisplay != null} onClick={() => { setSettingsDisplay(null) }} />

                {/* Bottom navigation bar */}
                <BottomNav display={dashDisplay} setDisplay={setDashDisplay} />
                {/* Dashboard */}
                <Dashboard display={dashDisplay} setDisplay={setDashDisplay}>
                    {/* Dashboard navigation bar */}
                    <DashNav display={dashDisplay} setDisplay={setDashDisplay} />
                    {/* Dashboard tabs */}
                    {dashDisplay === 'Widgets' && <Widgets switchValues={switchValues} setSwitchValues={setSwitchValues} />}
                    {dashDisplay === 'Backgrounds' && <Backgrounds background={background} setBackground={setBackground} />}
                    {dashDisplay === 'Impact' && <Impact />}
                </Dashboard>

                {/* Settings */}
                <Settings display={settingsDisplay} setDisplay={setSettingsDisplay}>
                    {/* Settings navigation bar */}
                    <SettingsNav display={settingsDisplay} setDisplay={setSettingsDisplay} />
                    {/* Settings tabs */}
                    {settingsDisplay === 'General' && <General />}
                    {settingsDisplay === 'Apps' && <Apps />}
                    {settingsDisplay === 'Bar' && <Bar />}
                </Settings>

                {/* Widgets */}
                {switchValues.timeDate && <DateTime />}
                {switchValues.search && <SearchBar />}
                {switchValues.weather && <Weather />}
                {switchValues.mostVisited && <MostVisited />}
                {switchValues.recentlyClosed && <RecentlyClosed />}

                {/* Sidebar: set to active if widgetsDisplay is not null */}
                <WidgetsBarInactive widgetsDisplay={widgetsDisplay} setWidgetsDisplay={setWidgetsDisplay} />
                <WidgetsBarActive widgetsDisplay={widgetsDisplay} setWidgetsDisplay={setWidgetsDisplay} />
            </div>
        </QueryClientProvider >
    )
}

export default NewTab