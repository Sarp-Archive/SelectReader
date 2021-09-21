chrome.browserAction.onClicked.addListener((tab) => {
	chrome.tabs.executeScript(tab.id, {
		code: "var msg = new SpeechSynthesisUtterance(); msg.text = window.getSelection().toString(); window.speechSynthesis.speak(msg);"
	});
});