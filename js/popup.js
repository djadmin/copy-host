function executeCopy(text) {
	var input = document.createElement('textarea');
	document.body.appendChild(input);
	input.value = text;
	input.focus(); input.select();
	document.execCommand('Copy');
	input.remove();
}

function getHostname(url) {
	// Handle Chrome URLs
	if (/^chrome:\/\//.test(url)) { return; }
	try {
		var url = new URL(url);
		return url.hostname;
	} catch (err) {
		console.log(err);
	}
}

function setHostname(hostname) {
	var elem = document.getElementById('hostname');
	elem.innerText = hostname;
}

function onPopupClose() {
	window.close();
	chrome.browserAction.setIcon({path: 'img/icon16.png'});
}

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
	var hostname = getHostname(tabs[0].url);
	if (!hostname) { window.close(); return; }

	executeCopy(hostname);
	setHostname(hostname);
	chrome.browserAction.setIcon({path: 'img/icon16_dark.png'});
	setTimeout(onPopupClose, 1500);
});