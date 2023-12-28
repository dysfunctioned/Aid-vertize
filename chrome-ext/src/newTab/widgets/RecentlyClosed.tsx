import React, { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function RecentlyClosed() {
    function truncateText(text) {
        if (text.length > 17) {
            return text.substring(0, 17) + '...';
        }
        return text;
    }

    const [recentlyClosedTabs, setRecentlyClosedTabs] = useState([]);

    useEffect(() => {
        chrome.sessions.getRecentlyClosed({ maxResults: 25 }, function (sessions) {
            let domains = []
            for (let session of sessions) {
                if (session.tab && !session.tab.url.startsWith('chrome') && !session.tab.url.startsWith('file')) {
                    domains.push(session.tab)
                }
                else if (session.window && session.window.tabs) {
                    for (let tab of session.window.tabs) {
                        if (tab && !tab.url.startsWith('chrome') && !tab.url.startsWith('file')) {
                            domains.push(tab)
                        }
                    }
                }
            }
            setRecentlyClosedTabs(Array.from(new Set(domains)));
        });
    }, []);

    const iconButtons = [];
    if (recentlyClosedTabs.length > 0) {
        for (let i = 0; i < 5; i++) {
            let tab = recentlyClosedTabs[i]
            iconButtons.push(
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '110px', marginLeft: '2px', marginRight: '2px', }}>
                    <IconButton style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}
                        onClick={(e) => {
                            e.preventDefault();
                            chrome.tabs.create({ url: tab.url });
                        }}>
                        <div style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <img src={`https://www.google.com/s2/favicons?sz=64&domain=${tab.url}`} style={{ width: '25px', height: '25px', }} />
                        </div>
                    </IconButton>
                    <Typography style={{ color: '#FFF', fontFamily: 'Inter', fontSize: '10px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', letterSpacing: '0.2px', textShadow: '0 0 2px rgba(0, 0, 0, 0.8)', }}>{truncateText(tab.title)}</Typography>
                </div>
            );
        }
    }

    return (
        <div style={{ marginTop: '10px' }}>
            <ButtonGroup style={{ display: 'flex', alignItems: 'center', margin: '16px', background: 'rgba(255, 255, 255, 0.25)', borderRadius: 5, flexDirection: 'column', padding: '10px', paddingBottom: '20px', }} color="primary">
                <Typography style={{ color: '#FFF', fontFamily: 'Inter', fontSize: '12px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal', letterSpacing: '0.24px', textShadow: '0 0 2px rgba(0, 0, 0, 0.8)', alignSelf: 'flex-start' }}>Recently Closed</Typography>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '5px' }}>
                    {iconButtons}
                </div>
            </ButtonGroup>
        </div>
    )
}
