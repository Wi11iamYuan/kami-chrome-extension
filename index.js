async function test(){
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            alert('Hello from the service worker!');
        }
    });
}

document.getElementById('test').addEventListener('click', test);