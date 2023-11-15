import React, { useState, useEffect } from 'react'
import './History.css'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/DeleteSweepOutlined';
import CookieIcon from '@mui/icons-material/CookieOutlined';
import Tooltip from '@mui/material/Tooltip';


// Returns true if the input timestamp is today
function isToday(timestamp) {
    const today = new Date();
    const itemDate = new Date(timestamp);
    return (
        today.getFullYear() === itemDate.getFullYear() &&
        today.getMonth() === itemDate.getMonth() &&
        today.getDate() === itemDate.getDate()
    );
}


export default function History() {
    const handleCookiesClick = () => {
        // Clear cookies
        chrome.cookies.getAll({}, function (cookies) {
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                chrome.cookies.remove({
                    url: "https://" + cookie.domain + cookie.path,
                    name: cookie.name
                });
            }
        });
    };

    // Stores user's input search
    const [historySearch, setHistorySearch] = useState('');

    // Function to handle input change
    const handleInputChange = (e) => {
        setHistorySearch(e.target.value);
    }

    const fetchHistoryItems = () => {
        // Access user's browser history
        chrome.history.search({ text: historySearch, maxResults: 20 }, (historyItems) => {
            const historyListRecent = document.getElementById('history-list-recent');
            const historyListToday = document.getElementById('history-list-today');
            let recentlyClosedCount = 0;

            // Clear the lists
            historyListRecent.innerHTML = "";
            historyListToday.innerHTML = "";

            // Iterate through all elements in the user's history
            for (let i = 0; i < historyItems.length; i++) {
                let item = historyItems[i];
                const historyItem = document.createElement('li');
                historyItem.classList.add('history-item');

                // Check if the item was opened today
                if (recentlyClosedCount < 5 || isToday(item.lastVisitTime)) {

                    // Create an image element for the website icon
                    const websiteIcon = document.createElement('img');
                    websiteIcon.classList.add('website-icon');
                    websiteIcon.src = `https://www.google.com/s2/favicons?domain=${new URL(item.url).hostname}`;

                    // Create a clickable link for the website domain
                    const websiteDomain = document.createElement('a');
                    websiteDomain.classList.add('website-domain');
                    websiteDomain.textContent = new URL(item.url).hostname;
                    websiteDomain.href = item.url;
                    websiteDomain.addEventListener('click', (e) => {
                        e.preventDefault();
                        chrome.tabs.create({ url: item.url });
                    });

                    // Append the website icon and domain to the history item
                    historyItem.appendChild(websiteIcon);
                    historyItem.appendChild(websiteDomain);

                    // Append the item to the "Today" section
                    if (recentlyClosedCount < 5) {
                        historyListRecent.appendChild(historyItem);
                        recentlyClosedCount++;
                    } else {
                        historyListToday.appendChild(historyItem);
                    }
                } else {
                    break;
                }
            }
        });
    };

    useEffect(() => {
        fetchHistoryItems();
    }, [historySearch]);

    return (
        <div className='history'>
            <div style={{ display: 'flex', }}>
                {/* Search bar */}
                <TextField
                    placeholder="Search history"
                    InputProps={{ startAdornment: (<SearchIcon sx={{ fontSize: '25px', color: '#D8D8D8', marginRight: '13px' }} />), }}
                    size='small'
                    sx={{ width: '283px', height: '38px', flexShrink: 0, borderRadius: '5px', marginBottom: '21px', }}
                    value={historySearch}
                    onChange={handleInputChange}
                />

                {/* Clear search history button */}
                <Tooltip title="Clear search history" arrow>
                    <DeleteIcon
                        sx={{ color: '#C4C4C4', fontSize: '30px', marginTop: '3px', marginLeft: '12px', }}
                        onClick={() => {
                            chrome.history.deleteAll();
                            fetchHistoryItems();
                        }}
                    />
                </Tooltip>
                {/* Vertical line */}
                <div style={{ height: '30px', borderRight: '1px solid #EDEFEF', marginTop: '3px', marginLeft: '6px', marginRight: '6px', }}></div>
                {/* Clear cookies button */}
                <Tooltip title="Clear cookies" arrow>
                    <CookieIcon
                        sx={{ color: '#C4C4C4', fontSize: '25px', marginTop: '6px', }}
                        onClick={() => {
                            handleCookiesClick();
                            fetchHistoryItems();
                        }}
                    />
                </Tooltip>
            </div>

            {/* Recently closed list */}
            <div className='history-list-header'>Recently Closed</div>
            <div className='history-list'>
                <ul id="history-list-recent"></ul>
            </div>
            {/* Opened today list */}
            <div className='history-list-header'>Today</div>
            <div className='history-list'>
                <ul id="history-list-today"></ul>
            </div>
        </div>
    )
}
