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
		var newUrl = new URL(url);
		return newUrl.hostname;
	} catch (err) {
		console.log(err);
	}
}

function setHostname(hostname) {
	var elem = document.getElementById('hostname');
	elem.innerText = hostname;
}

function closePopup() {
	window.close();
}


chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
	var hostname = getHostname(tabs[0].url);
	if (!hostname) { closePopup(); return; }
	// Copy to clipboard and shows a popup
	executeCopy(hostname);
	setHostname(hostname);
	setTimeout(closePopup, 1500);
});