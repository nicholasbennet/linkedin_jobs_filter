chrome.storage.sync.get(['hideApplied', 'hideViewed'], function (data) {
	const hideApplied = data.hideApplied;
	const hideViewed = data.hideViewed;

	const observer = new MutationObserver(hideOrShowElements);
	observer.observe(document.body, { childList: true, subtree: true });

	function hideOrShowElements() {
		document.querySelectorAll('li').forEach(function (item) {
			const textContent = item.textContent;
			const isActive =
				item.querySelector('.jobs-search-results-list__list-item--active') !==
				null;

			if (isActive) {
				item.style.display = '';
			} else {
				if (hideApplied && textContent.includes('Applied')) {
					item.style.display = 'none';
				} else if (!hideApplied && textContent.includes('Applied')) {
					item.style.display = '';
				}
				if (hideViewed && textContent.includes('Viewed')) {
					item.style.display = 'none';
				} else if (!hideViewed && textContent.includes('Viewed')) {
					item.style.display = '';
				}
			}
		});
	}

	hideOrShowElements();
});

chrome.storage.onChanged.addListener((changes, namespace) => {
	if (namespace === 'sync') {
		chrome.storage.sync.get(['hideApplied', 'hideViewed'], function (data) {
			const hideApplied = data.hideApplied;
			const hideViewed = data.hideViewed;

			document.querySelectorAll('li').forEach(function (item) {
				const textContent = item.textContent;
				const isActive =
					item.querySelector('.jobs-search-results-list__list-item--active') !==
					null;

				if (isActive) {
					item.style.display = '';
				} else {
					if (hideApplied && textContent.includes('Applied')) {
						item.style.display = 'none';
					} else if (!hideApplied && textContent.includes('Applied')) {
						item.style.display = '';
					}
					if (hideViewed && textContent.includes('Viewed')) {
						item.style.display = 'none';
					} else if (!hideViewed && textContent.includes('Viewed')) {
						item.style.display = '';
					}
				}
			});
		});
	}
});
