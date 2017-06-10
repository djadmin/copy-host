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

function acknowledge(hostname) {
	var elem = document.getElementById('hostname');
	elem.innerText = hostname;
}


chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
	var hostname = getHostname(tabs[0].url);
	if (!hostname) { window.close(); }
	executeCopy(hostname);
	acknowledge(hostname);
});