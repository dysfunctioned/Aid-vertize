import React from 'react'
import './History.css'


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
    // Access user's browser history
    chrome.history.search({ text: '', maxResults: 20 }, (historyItems) => {
        const historyListRecent = document.getElementById('history-list-recent');
        const historyListToday = document.getElementById('history-list-today');
        let recentlyClosedCount = 0;

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

    return (
        <div className='history'>
            <div className='history-list-header'>Recently Closed</div>
            <div className='history-list'>
                <ul id="history-list-recent"></ul>
            </div>

            <div className='history-list-header'>Today</div>
            <div className='history-list'>
                <ul id="history-list-today"></ul>
            </div>
        </div>
    )
}
