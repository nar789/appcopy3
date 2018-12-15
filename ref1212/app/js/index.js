var url="";
function imgclick(u){
	url=u;
	window.parent.postMessage(url,"*");
}

function StartTimer(u){
	url=u;
	setTimeout(function(){imgclick();},1000);
}
