import React, { useState, useEffect } from 'react'
import './tabs.css'
import Dashboard from './components/dashboard/dashboard'
import DashNav from './components/dashboard/DashNav'
import Backgrounds from './components/dashboard/dashPages/Backgrounds'
import Impact from './components/dashboard/dashPages/Impact'
import Widgets from './components/dashboard/dashPages/Widgets'
import { BottomNav } from './components/dashboard/BottomNav'
import WidgetsBarActive from './components/widgetsBar/active/WidgetsBarActive'
import WidgetsBarInactive from './components/widgetsBar/inactive/WidgetsBarInactive'
import Weather from './weather/Weather'
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from 'react-query'

function NewTab() {
    // Determines the dashboard tab (null if dashboard is closed)
    const [dashDisplay, setDashDisplay] = useState(null);

    // Determines the widgets tab (null if widgets bar is not active)
    const [widgetsDisplay, setWidgetsDisplay] = useState(null)

    const queryClient = new QueryClient()

    useEffect(() => {
        console.log(widgetsDisplay);
    }, [widgetsDisplay]);

    return (
        <QueryClientProvider client={queryClient}>
            <div className='new-tab-override'>
                {/* Bottom navigation bar */}
                <BottomNav display={dashDisplay} setDisplay={setDashDisplay} />

                {/* Dashboard */}
                <Dashboard display={dashDisplay} setDisplay={setDashDisplay}>
                    {/* Dashboard navigation bar */}
                    <DashNav display={dashDisplay} setDisplay={setDashDisplay} />
                    {/* Display the dashboard tab */}
                    {dashDisplay === 'Widgets' && <Widgets />}
                    {dashDisplay === 'Backgrounds' && <Backgrounds />}
                    {dashDisplay === 'Impact' && <Impact />}
                </Dashboard>
                <Weather/>
                {/* Widgets bar: set to active if widgetsDisplay is not null */}
                {(widgetsDisplay == null) ? <WidgetsBarInactive display={widgetsDisplay} setDisplay={setWidgetsDisplay} />
                    : <WidgetsBarActive display={widgetsDisplay} setDisplay={setWidgetsDisplay} />}
            </div>
        </QueryClientProvider>
    )
}

export default NewTab