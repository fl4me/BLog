console.log('This would be the main JS file.');


var toTOP = true;
var timer = null;
window.onload = function() {
	/**返回顶部*/
	var otop = document.getElementById('toTop');
	otop.onclick = function() {
		timer = setInterval(function() {
			toTOP = true;
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.ceil(osTop / 10);
			document.documentElement.scrollTop -= ispeed;
			document.body.scrollTop -= ispeed;
			if (osTop == 0) {
				clearInterval(timer);
			}
		}, 20);
	}
}

window.onscroll = function() {
	if (toTOP != true) {
		clearInterval(timer);

	}
	toTOP = false;
	
			setInterval(function() {
			
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			
			/**hide nav*/
			if (osTop !=0) {
				document.getElementById('nav').style.display="none";
			}else{
				document.getElementById('nav').style.display="block";
			}
		}, 30);
}