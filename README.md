# LinkedIn Filter Extension

This Chrome extension hides LinkedIn elements based on their content. It features a dropdown UI with two switches: "Applied" and "Viewed". When enabled, it hides "Applied" or "Viewed" jobs on LinkedIn. The extension also preserves the state of the switches on closing the browser. Additionally, it ensures that elements with the class `"jobs-search-results-list__list-item--active"` remain visible.

## Features

- Hide "Applied" or "Viewed" jobs on LinkedIn.
- Preserve switch states across browser sessions.
- Ensure elements with the class `"jobs-search-results-list__list-item--active"` remain visible.

## Prerequisites

- Google Chrome browser

## Installation

1. **Download or clone this repository:**

   ```sh
   git clone https://github.com/yourusername/linkedin-filter-extension.git
   cd linkedin-filter-extension
   ```

2. **Open Chrome and go to the Extensions page:**

   ```sh
   chrome://extensions/
   ```

3. **Enable Developer mode:**

   - Toggle the switch in the top right corner to enable Developer mode.

4. **Load the extension:**

   - Click on the "Load unpacked" button.
   - Select the directory where you downloaded or cloned this repository.

5. **Verify the extension is installed:**
   - You should see the "LinkedIn Filter Extension" icon (filter.png) in your Chrome toolbar.

## Usage

1. **Open LinkedIn:**

   - Navigate to `https://www.linkedin.com`.

2. **Click on the extension icon:**

   - This will open the dropdown UI with two switches: "Applied" and "Viewed".

3. **Toggle the switches:**

   - Enable the "Applied" switch to hide elements containing "Applied".
   - Enable the "Viewed" switch to hide elements containing "Viewed".

4. **Elements with the class `"jobs-search-results-list__list-item--active"`:**
   - Elements with this class will remain visible even if they contain "Applied" or "Viewed".
   - If the class is removed and the element meets the conditions, it will be hidden again.
   - If the class is added back, the element will become visible again.

## Files

- `manifest.json`: Defines the extension and its permissions.
- `popup.html`: Creates the dropdown UI.
- `popup.js`: Handles UI interactions and saves the state of the switches.
- `background.js`: Manages background tasks and injects the content script.
- `content.js`: Handles hiding and showing elements based on the switch states and class presence.
- `filter.png`: The icon for the extension.

## Icon Attribution

Icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/).
