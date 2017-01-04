// console.log('script is happening');
// console.log(document.getElementsByClassName('riDescription')[0]);
// console.log(document.getElementById('test').textContent);

document.addEventListener('DOMContentLoaded', function(){
	console.log(document.getElementById('test').textContent);

}, false);

console.log('**********');

$(window).ready(function(){
	console.log(document.getElementById('test').textContent);
	console.log('window ready  is happening')
	// var h1text = $('h1').text();
	// var tempKey = $('.riItemTitle a');

	// tempKey.css('border', '5px solid red');
	// $('.riHinner').css('border', '5px solid red');

	// console.log('========');
	// console.log($('.riHinner').text());
	// console.log(tempKey);
	console.log('========');

})
$(document).ready(function(){
	console.log('document ready  is happening');
	var radTableConfigUrl = $('.rad-table-config').attr('url');
	console.log(radTableConfigUrl);
	var ajaxContent = $.ajax({
		url: radTableConfigUrl,
		dataType: 'json',
		cache: false
	}).done(function(data, textStatus){
		console.log(data);
		console.log(textStatus);
	}).fail(function(xhr, textStatus, errorThrown){
		console.log('fail');
	});
	// var h1text = $('h1').text();
	// var tempKey = $('.riItemTitle a');

	// tempKey.css('border', '5px solid red');
	// $('.riHinner').css('border', '5px solid red');

	// console.log('========');
	// console.log($('.riHinner').text());
	// console.log(tempKey);
	console.log('========');
})


// $(function(){
	// var url = chrome.extension.getURL('toolbar.html');
	// var height = '35px';
	// var iframe = "<iframe src='"+url+"' id='myOwnCustomFirstToolbar12345' style='height:"+height+"'></iframe>";

	// $('body').append(iframe).css('margin-top', '100px');

	// var h1text = $('h1').text();
	// var tempKey = $('.riItemTitle a');

	// tempKey.css('border', '5px solid red');
	// $('.riHinner').css('border', '5px solid red');

	// console.log('========');
	// console.log($('.riHinner').text());
	// console.log(tempKey);
	// console.log('========');
// });


// http://localhost/sample_chrome_ex_file/event.rakuten.co.jp/sake/sakeset/