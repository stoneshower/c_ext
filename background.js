chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
	console.log(response);
	alert(response);
});