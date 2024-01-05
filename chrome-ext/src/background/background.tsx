chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.includes('http')) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: (tabId) => {
                const sidebar_entry_point = document.createElement('div');
                sidebar_entry_point.id = 'sidebar';
                sidebar_entry_point.style.position = 'fixed';
                sidebar_entry_point.style.height = '100%';
                sidebar_entry_point.style.top = '0';
                sidebar_entry_point.style.left = '0';
                sidebar_entry_point.style.display = 'flex';
                sidebar_entry_point.style.flexDirection = 'column';
                sidebar_entry_point.style.alignItems = 'center';
                sidebar_entry_point.style.justifyContent = 'center';
                sidebar_entry_point.style.zIndex = '9999999999999999999999';
                sidebar_entry_point.style.fontFamily = 'Inter'

                let reactJS_script = document.createElement('script');
                reactJS_script.src = chrome.runtime.getURL('sidebar.js');

                sidebar_entry_point.appendChild(reactJS_script);

                document.querySelector("body").appendChild(sidebar_entry_point);
            },
            args: [tabId],
        });
    }
});