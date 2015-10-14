var a = $('.a'),
	b = $('.b'),
	c = $('.c'),
	d = $('.d'),
	e = $('.e'),
	f = $('.f');

	a.on('mouseover', function (e) {
		$('.E').text('entertainment')
	});
	a.on('mouseout', function (e) {
		$('.E').text('e')
	});
/////////////////////////////////////////////////
	b.on('mouseover', function (e) {
		$('.P').text('politics')
	});
	b.on('mouseout', function (e) {
		$('.P').text('p')
	});
/////////////////////////////////////////////////
	c.on('mouseover', function (e) {
		$('.S').text('science')
	});
	c.on('mouseout', function (e) {
		$('.S').text('s')
	});
/////////////////////////////////////////////////
	d.on('mouseover', function (e) {
		$('.N').text('nonsense')
	});
	d.on('mouseout', function (e) {
		$('.N').text('n')
	});
/////////////////////////////////////////////////
	e.on('mouseover', function (e) {
		$('.O').text('film')
	});
	e.on('mouseout', function (e) {
		$('.O').text('f')
	});
/////////////////////////////////////////////////
	f.on('mouseover', function (e) {
		$('.M').text('music')
	});
	f.on('mouseout', function (e) {
		$('.M').text('m')
	});
/////////////////////////////////////////////////
