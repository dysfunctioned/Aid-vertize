import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

import WidgetsBarInactive from 'src/newTab/components/widgetsBar/inactive/WidgetsBarInactive';
import WidgetsBarActive from 'src/newTab/components/widgetsBar/active/WidgetsBarActive';

function Sidebar() {
    // Determines the current sidebar tab (null if widgets bar is not active)
    const [widgetsDisplay, setWidgetsDisplay] = useState<null | String>(null);

    // Determines if cursor is on the left side of the screen
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            // Check if the cursor is on the left side of the screen
            const isOnLeftSide = event.clientX < 55;
            setIsVisible(isOnLeftSide);
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {!widgetsDisplay && <WidgetsBarInactive widgetsDisplay={!isVisible} setWidgetsDisplay={setWidgetsDisplay} />}
            <WidgetsBarActive widgetsDisplay={widgetsDisplay} setWidgetsDisplay={setWidgetsDisplay} />
        </>
    );
}

render(<Sidebar />, document.querySelector('#sidebar'));
