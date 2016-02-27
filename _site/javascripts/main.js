console.log('This would be the main JS file.');
/*返回顶部*/
var toTOP = true;
var timer = null;
window.onload = function() {
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
}