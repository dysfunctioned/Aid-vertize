// Content scripts: run in the context of a web page being viewed
// Interacts with and modify the content of web pages

chrome.runtime.sendMessage('I am loading content script', (response) => {
    console.log(response);
    console.log('I am content script')

})

window.onload = (event) => {
    console.log('page is fully loaded');
};
