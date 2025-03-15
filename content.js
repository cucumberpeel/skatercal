function extractCompetitions() {
    const competitions = card.querySelectorAll(".competition-summary__details-primary")?.innerText;
    return competitions;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getCompetitions") {
        sendResponse({ competitions: extractCompetitions() });
    }
});