document.getElementById("open-url").addEventListener("click", async () => {
    try {
        const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
        if (tab && tab.url) {
            console.log("Current URL:", tab.url);
            document.getElementById("output").innerText = tab.url;
            
            const url = new URL(tab.url);
            const cleanUrl = url.origin + url.pathname;

            browser.tabs.create({ url: `https://archive.ph/${cleanUrl}` });
        } else {
            console.log("No active tab found.");
        }
    } catch (error) {
        console.error("Error getting current tab:", error);
    }
});
