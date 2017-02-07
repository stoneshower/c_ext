var fire = false;
var clicked = false;


chrome.tabs.onUpdated.addListener(function(){
	if(clicked === false){
		chrome.browserAction.setIcon({path: "off.png"});
		chrome.browserAction.setBadgeText({text: 'OFF'});
		chrome.storage.sync.set(
	    	{
	    		'showRasta':{ on:'false' }
	    	}
	    )
	}
});

chrome.browserAction.onClicked.addListener(
	function(tab){
		clicked = true;
		fire = !fire;
		chrome.browserAction.setBadgeBackgroundColor({color:[0, 0, 255, 100]});
		if(fire === true){
			chrome.browserAction.setIcon({path: "on.png"});
			chrome.browserAction.setBadgeText({text: 'ON'});
			chrome.storage.sync.set(
		    	{
		    		'showRasta':{ on:'true' }
		    	}
		    )

		} else {
			chrome.browserAction.setIcon({path: "off.png"});
			chrome.browserAction.setBadgeText({text: 'OFF'});
			chrome.storage.sync.set(
		    	{
		    		'showRasta':{ on:'false' }
		    	}
		    )

		}
	}
)
