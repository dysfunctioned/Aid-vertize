import React, { useState, useEffect } from 'react'
import './tabs.css'
import Dashboard from './components/dashboard/dashboard'
import DashNav from './components/dashboard/DashNav'
import Backgrounds from './components/dashboard/dashPages/Backgrounds'
import Impact from './components/dashboard/dashPages/Impact'
import Widgets from './components/dashboard/dashPages/Widgets'
import BottomNav from './components/dashboard/BottomNav'
import WidgetsBarActive from './components/widgetsBar/active/WidgetsBarActive'
import WidgetsBarInactive from './components/widgetsBar/inactive/WidgetsBarInactive'
import Weather from './weather/Weather'
import DateTime from './widgets/DateTime'
import SearchBar from './widgets/SearchBar'
import MostVisited from './widgets/MostVisited'
import RecentlyClosed from './widgets/RecentlyClosed'
import DefaultBackground from '../assets/DefaultBackground.png'
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { Backdrop } from '@mui/material';

function NewTab() {
    // Determines the current dashboard tab (null if dashboard is closed)
    const [dashDisplay, setDashDisplay] = useState(null);

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
                {/* Darkened backdrop for the dashboard */}
                <Backdrop sx={{ color: '#fff', zIndex: 2, }} open={dashDisplay != null} />

                {/* Bottom navigation bar */}
                <BottomNav display={dashDisplay} setDisplay={setDashDisplay} />
                {/* Dashboard */}
                <Dashboard display={dashDisplay} setDisplay={setDashDisplay}>
                    {/* Dashboard navigation bar */}
                    <DashNav display={dashDisplay} setDisplay={setDashDisplay} />
                    {/* Display the dashboard tab */}
                    {dashDisplay === 'Widgets' && <Widgets switchValues={switchValues} setSwitchValues={setSwitchValues} />}
                    {dashDisplay === 'Backgrounds' && <Backgrounds background={background} setBackground={setBackground} />}
                    {dashDisplay === 'Impact' && <Impact />}
                </Dashboard>

                {/* Widgets */}
                {switchValues.timeDate && <DateTime />}
                {switchValues.search && <SearchBar />}
                {switchValues.weather && <Weather />}
                {switchValues.mostVisited && <MostVisited />}
                {switchValues.recentlyClosed && <RecentlyClosed />}

                {/* Sidebar: set to active if widgetsDisplay is not null */}
                {(widgetsDisplay == null) ? <WidgetsBarInactive display={widgetsDisplay} setDisplay={setWidgetsDisplay} />
                    : <WidgetsBarActive display={widgetsDisplay} setDisplay={setWidgetsDisplay} />}
            </div>
        </QueryClientProvider >
    )
}

export default NewTab