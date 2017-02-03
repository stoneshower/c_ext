// window.onload = function(){
// 	document.getElementById('save').onclick = function(){
// 		var value = document.getElementById('saveLine').value;

// 		chrome.storage.sync.set({'myLine': value}, function(){
// 			// alert('Success');
// 		});

// 		// chrome.storage.sync.set(ARG1, ARG2);
// 		// AGR1 [data you want to store]
// 		// ARG2 [Optional = callback]
// 	};

// 	document.getElementById('get').onclick = function(){
// 		// chrome.storage.sync.get('value of your key', callback);
// 		chrome.storage.sync.get('myLine', function(data){
// 			console.log(data);
// 		});
// 	}
// };