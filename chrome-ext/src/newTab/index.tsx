// Overrides newtab page

import React from "react";
import { createRoot } from "react-dom/client";
import NewTab from "./NewTab";
import '../assets/tailwind.css'

function init() {
    const appContainer = document.createElement('div')
    appContainer.style.width = '100%';
    appContainer.style.height = '100%';

    document.body.appendChild(appContainer)
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = createRoot(appContainer);

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "script-src 'self' 'unsafe-inline'; object-src 'self'";
    document.head.appendChild(meta);

    // Render NewTab element
    root.render(<NewTab />);
}

init();