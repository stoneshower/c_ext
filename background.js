chrome.browserAction.onClicked.addListener(function(){
	// chrome.tabs.executeScript();
	console.log('clicked!');
	// chrome.tabs.create({url: chrome.extension.getURL('index.html')}, callback);
	// function callback(data){
	// 	console.log(data.url);
	// }
});