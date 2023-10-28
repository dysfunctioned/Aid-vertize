// Background scripts

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension is installed");
})

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log(msg);
    console.log(sender);
    sendResponse("Front the background Script");
})