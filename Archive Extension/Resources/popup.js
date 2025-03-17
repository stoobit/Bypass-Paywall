document.getElementById("open-url").addEventListener("click", async () => {
    try {
        const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
        if (tab && tab.url) {
            console.log("Current URL:", tab.url);
            document.getElementById("output").innerText = "Current URL: " + tab.url;
            browser.tabs.create({ url: "https://archive.ph/" + tab.url });
        } else {
            console.log("No active tab found.");
        }
    } catch (error) {
        console.error("Error getting current tab:", error);
    }
});
