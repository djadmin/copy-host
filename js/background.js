function executeCopy(text) {
	var input = document.createElement('textarea');
	document.body.appendChild(input);
	input.value = text;
	input.focus(); input.select();
	document.execCommand('Copy');
	input.remove();
}

function getHostName(url) {
	// Handle Chrome URLs
	if (/^chrome:\/\//.test(url)) { return; }

	try {
		var url = new URL(url);
		return url.hostname;
	} catch (err) {
		console.log(err);
	}
}

function acknowledge() {
	chrome.browserAction.setBadgeText ( { text: 'Yay' } );
	setTimeout(function () {
	    chrome.browserAction.setBadgeText( { text: '' } );
	}, 500);
}

chrome.browserAction.onClicked.addListener(function (tab) {
	var host = getHostName(tab.url);
	if (host) {
		executeCopy(host);
		acknowledge();
	}
});
