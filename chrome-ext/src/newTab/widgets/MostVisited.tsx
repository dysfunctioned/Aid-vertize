import React, { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function MostVisited() {
    function truncateText(text) {
        if (text.length > 17) {
            return text.substring(0, 17) + '...';
        }
        return text;
    }

    const [mostVisitedWebsites, setMostVisitedWebsites] = useState([]);

    useEffect(() => {
        chrome.topSites.get(function (mostVisited) {
            setMostVisitedWebsites(mostVisited);
        });
    }, []);

    let iconButtons = []
    if (mostVisitedWebsites && mostVisitedWebsites.length > 0) {
        for (let i = 0; i < Math.min(5, mostVisitedWebsites.length); i++) {
            let url = mostVisitedWebsites[i]
            iconButtons.push(
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '110px', marginLeft: '2px', marginRight: '2px', }}>
                    <IconButton style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}
                        onClick={(e) => {
                            e.preventDefault();
                            chrome.tabs.create({ url: url.url });
                        }}>
                        <div style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <img src={`https://www.google.com/s2/favicons?sz=64&domain=${url.url}`} style={{ width: '25px', height: '25px', }} />
                        </div>
                    </IconButton>
                    <Typography style={{ color: '#FFF', fontFamily: 'Inter', fontSize: '10px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal', letterSpacing: '0.2px', textShadow: '0 0 2px rgba(0, 0, 0, 0.8)', }}>{truncateText(url.title)}</Typography>
                </div>
            );
        }
    }

    return (
        <div style={{ marginTop: '10px' }}>
            <ButtonGroup style={{ display: 'flex', alignItems: 'center', margin: '16px', background: 'rgba(255, 255, 255, 0.25)', borderRadius: 5, flexDirection: 'column', padding: '10px', paddingBottom: '20px', }} color="primary">
                <Typography style={{ color: '#FFF', fontFamily: 'Inter', fontSize: '12px', fontStyle: 'normal', fontWeight: 600, lineHeight: 'normal', letterSpacing: '0.24px', textShadow: '0 0 2px rgba(0, 0, 0, 0.8)', alignSelf: 'flex-start' }}>Most Visited</Typography>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: '5px' }}>
                    {iconButtons}
                </div>
            </ButtonGroup>
        </div>
    )
}
