import React, { useEffect } from 'react'
import "./Settings.css"
import useDisplayStore from '../../../stores/displayStore';


function Settings(props: React.PropsWithChildren) {

    const { setDisplay, isSettingsActive } = useDisplayStore();

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setDisplay(null);
            }
        };
        document.addEventListener('keydown', handleEscKey);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, []);

    return (isSettingsActive() && 
        <div className="box">
            {props.children}
        </div>
    )
}

export default Settings;