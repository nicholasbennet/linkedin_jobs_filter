document.addEventListener('DOMContentLoaded', function () {
	const appliedSwitch = document.getElementById('appliedSwitch');
	const viewedSwitch = document.getElementById('viewedSwitch');

	// Load the saved state of the switches
	chrome.storage.sync.get(['hideApplied', 'hideViewed'], function (data) {
		appliedSwitch.checked = data.hideApplied || false;
		viewedSwitch.checked = data.hideViewed || false;
	});

	appliedSwitch.addEventListener('change', function () {
		chrome.storage.sync.set({ hideApplied: appliedSwitch.checked });
		updateContentScript();
	});

	viewedSwitch.addEventListener('change', function () {
		chrome.storage.sync.set({ hideViewed: viewedSwitch.checked });
		updateContentScript();
	});

	function updateContentScript() {
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			chrome.scripting.executeScript({
				target: { tabId: tabs[0].id },
				files: ['content.js'],
			});
		});
	}
});
