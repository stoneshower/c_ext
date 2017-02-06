var fire = false;
/*using storage*/
// default
// localStorage.removeItem('showResult');
// localStorage.setItem('showResult', 'on');
/*using storage*/

// var manifest = chrome.runtime.getManifest();
// console.log(manifest.content_scripts[0].js);


// chrome.storage.local.set(window.entity, function() {
//     console.log('stored');
// });


var window.entity = {};
window.entity.hoge = {
    test: 'Takahashi'
};

chrome.storage.local.set(window.entity, function() {
    console.log('stored');
});



chrome.browserAction.onClicked.addListener(
	function(tab){
		fire = !fire;
		chrome.browserAction.setBadgeBackgroundColor({color:[0, 0, 255, 100]});
		if(fire === true){
			chrome.browserAction.setIcon({path: "on.png"});
			chrome.browserAction.setBadgeText({text: 'ON'});



			/*using storage*/
			// localStorage.setItem('showResult', 'on');
			// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
			//     if (request.method == "getLocalStorage")
			//       sendResponse({data: localStorage});
			//     else
			//       sendResponse({});
			// });
			/*using storage*/
			// window.entity = {
			//     col1: 'shinya'
			// };
			// chrome.storage.local.set(window.entity.hoge.col1, function() {
			// 	console.log('yes');
			// });

			/*trying to modify(set) manifest json*/
			// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
			// 	sendResponse({data: window.entity})
			// });




		} else {
			chrome.browserAction.setIcon({path: "off.png"});
			chrome.browserAction.setBadgeText({text: 'OFF'});

			/*using storage*/
			// localStorage.removeItem('showResult');
			// localStorage.setItem('showResult', 'off');
			// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
			//     if (request.method == "getLocalStorage")
			//       sendResponse({data: localStorage});
			//     else
			//       sendResponse({});
			// });
			/*using storage*/

			// chrome.storage.local.remove(window.entity.hoge.col1, function() {
			//     console.log('removed');
			// });
			// window.entity.hoge = {
			//     col1: 'off'
			// };
			// chrome.storage.local.set(window.entity, function() {

			// });

			// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
			// 	sendResponse({data: window.entity})
			// });

		}
	}
)

// localStorage['lastId'] = 'Takahashi';

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.method == "getLocalStorage")
//       sendResponse({data: localStorage});
//     else
//       sendResponse({});
// });



// chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
// 	if(fire === true){
// 	  	chrome.tabs.executeScript(tab.id, {
// 			file: 'myscript.js',
// 			runAt: 'document_end',
// 			allFrames: true
// 		})
// 	}
// });



// chrome.browserAction.onClicked.addListener(function(tab){
// 	chrome.tabs.executeScript(tab.id, {
// 		file: 'myscript.js'
// 	})
// });

//↑↑↑↑↑これだとページをリロードするとinjectはなくなる。