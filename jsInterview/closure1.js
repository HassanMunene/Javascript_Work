function a() {
	for (var i = 0; i < 3; i++) {
		(function (i) {
			setTimeout(function log() {
				console.log(i);
			}, i * 1000);
		})(i);
	}
}

a();
