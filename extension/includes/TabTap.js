(function(){

document.addEventListener("dblclick", function(e){
	var s = window.getSelection().toString();
	
	if(s === "" || s === "\n")
	{
		window.getSelection().empty();
		chrome.extension.sendMessage( { /* request new tab from background script */ } );
	}
}, false);

}());