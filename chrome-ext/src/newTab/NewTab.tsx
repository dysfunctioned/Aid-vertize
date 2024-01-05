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
import Settings from './components/settings/Settings'
import SettingsNav from './components/settings/SettingsNav'
import SettingsApps from './components/settings/settingsPages/SettingsApps'
import SettingsBar from './components/settings/settingsPages/SettingsBar'
import SettingsGeneral from './components/settings/settingsPages/SettingsGeneral'
import DefaultBackground from '../assets/DefaultBackground.png'
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import useDisplayStore from '../stores/displayStore'


function NewTab() {

    const { isActive, isWidgetsActive } = useDisplayStore();

    // Determines current background image
    const [background, setBackground] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        if (localValue == null) return DefaultBackground;
        return JSON.parse(localValue);
    });
    
    const queryClient = new QueryClient()
    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(background));
    }, [background]);

    useEffect(() => {
        const adElement = document.createElement('div');
        adElement.className = 'adsbygoogle ad ads adsbox ad-placement ad-placeholder ad-badge';

        adElement.style.width = '100px';
        adElement.style.height = '100px';
        adElement.style.position = 'absolute';

        // document.body.appendChild(adElement);

        console.log('Ad element added to the body:', adElement);

        if (window.getComputedStyle(adElement).display === 'none') {
            console.log('Adblock is enabled');
        } else {
            console.log('Adblock is not enabled');
        }
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <div className='new-tab-override' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', }}>
                <BottomNav/>
                <Dashboard>
                    <DashNav />
                    {isActive('Widgets') && <Widgets />}
                    {isActive('Backgrounds') && <Backgrounds background={background} setBackground={setBackground} />}
                    {isActive('Impact') && <Impact />}
                </Dashboard>
                <Settings>
                    <SettingsNav/>
                    {isActive('General') && <SettingsGeneral/>}
                    {isActive('Bar') && <SettingsBar/>}
                    {isActive('Apps') && <SettingsApps/>}
                </Settings>
                {/* <Weather/> */}
                {isWidgetsActive() ? <WidgetsBarActive/> : <WidgetsBarInactive/> }
            </div>
        </QueryClientProvider>
    )
}

export default NewTab