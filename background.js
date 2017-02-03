var fire = false;

chrome.browserAction.onClicked.addListener(
	function(tab){
		fire = !fire;
		chrome.browserAction.setBadgeBackgroundColor({color:[0, 0, 255, 100]});
		if(fire === true){
			chrome.browserAction.setIcon({path: "on.png"});
			chrome.browserAction.setBadgeText({text: 'ON'});
		} else {
			chrome.browserAction.setIcon({path: "off.png"});
			chrome.browserAction.setBadgeText({text: 'OFF'});
		}
	}
)


chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
	if(fire === true){
	  	chrome.tabs.executeScript(tab.id, {
			file: 'myscript.js',
			runAt: 'document_end',
			allFrames: true
		})
	}
});

// chrome.browserAction.onClicked.addListener(function(tab){
// 	chrome.tabs.executeScript(tab.id, {
// 		file: 'myscript.js'
// 	})
// });




// chrome.browserAction.onClicked.addListener(function(tab){
// 	chrome.tabs.executeScript(tab.id, {
// 		file: 'myscript.js'
// 	})
// });

//↑↑↑↑↑これだとページをリロードするとinjectはなくなる。