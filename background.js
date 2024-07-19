chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ hideApplied: false, hideViewed: false });
});

chrome.storage.onChanged.addListener((changes, namespace) => {
	if (namespace === 'sync' && (changes.hideApplied || changes.hideViewed)) {
		chrome.tabs.query({ url: '*://www.linkedin.com/*' }, function (tabs) {
			for (const tab of tabs) {
				chrome.scripting.executeScript({
					target: { tabId: tab.id },
					files: ['content.js'],
				});
			}
		});
	}
});
