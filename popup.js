document.getElementById("fetch").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: extractCompetitions
        }, (results) => {
            if (results && results[0] && results[0].result) {
                displayOptions(results[0].result);
            }
        });
    });
});

function displayOptions(competitions) {

}

function createICS(scheduleItem) {

}