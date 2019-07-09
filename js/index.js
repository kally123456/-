$(function() {
	var tX = 400,
		tY = 400,
		tZ = 600;
	var x = -2 * tX;
	var y = -2 * tY;
	var z = -2 * tZ;
	for(var i = 0; i < 125; i++) {
		$li = $('<li></li>');
		$('#box').append($li);
		var ix = (i % 25) % 5;
		var iy = parseInt((i % 25) / 5);
		var iz = parseInt(i / 25);
		$li.css({
			'transform': 'translate3d(' + (x + ix * tX) + 'px,' + (y + iy * tY) + 'px,' + (z + iz * tZ) + 'px)'
		})
		//console.log(x + ix * tX, y + iy * tY, z + iz * tZ)
	}

	//拖拽旋转
	var nowX, lastX, minusX, nowY, lastY, minusY;
	var rowY = 0,rowX=0;
	$(document).on('mouseenter', function(e) {
		var e = e || event;
		lastX = e.clientX;
		lastY = e.clientY;
		$(this).on('mousemove', function(e) {
			var e = e || event;
			nowX = e.clientX;
			nowY = e.clientY;
			minusX = nowX - lastX;
			minusY = nowY - lastY;
			console.log(nowX,lastX,minusX)
			rowY += minusX * 0.2;
			rowX -= minusY * 0.2;
			$('#box').css({
				'transform': 'translateZ(-2000px) rotateX(' + rowX + 'deg) rotateY(' + rowY + 'deg)'
			})
			lastX = nowX;
			lastY = nowY;
		})
	}).on('mouseout', function() {
	$(this).off('mousemove')
	})
})