var a = $('.a'),
	b = $('.b'),
	c = $('.c'),
	d = $('.d'),
	e = $('.e'),
	f = $('.f'),
	nava = $('.nav-a'),
	navb = $('.nav-b'),
	navc = $('.nav-c'),
	navd = $('.nav-d'),
	nave = $('.nav-e'),
	navf = $('.nav-f'),
	navg = $('.nav-g'),
	login = $('.login')
	signup = $('.signup')

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
















nava.on('mouseover', function (e) {
	$('.nava').text('home')
});
nava.on('mouseout', function (e) {
	$('.nava').text('h')
});
/////////////////////////////////////////////////
navb.on('mouseover', function (e) {
	$('.navb').text('entertainment')
});
navb.on('mouseout', function (e) {
	$('.navb').text('e')
});
/////////////////////////////////////////////////
navc.on('mouseover', function (e) {
	$('.navc').text('poitics')
});
navc.on('mouseout', function (e) {
	$('.navc').text('p')
});
/////////////////////////////////////////////////
navd.on('mouseover', function (e) {
	$('.navd').text('music')
});
navd.on('mouseout', function (e) {
	$('.navd').text('m')
});
/////////////////////////////////////////////////
nave.on('mouseover', function (e) {
	$('.nave').text('film')
});
nave.on('mouseout', function (e) {
	$('.nave').text('f')
});
/////////////////////////////////////////////////
navf.on('mouseover', function (e) {
	$('.navf').text('science')
});
navf.on('mouseout', function (e) {
	$('.navf').text('s')
});
/////////////////////////////////////////////////
navg.on('mouseover', function (e) {
	$('.navg').text('nonsense')
});
navg.on('mouseout', function (e) {
	$('.navg').text('n')
});
/////////////////////////////////////////////////


















var form = '<form class="login-form" action="/users" method="post"><label for="Input username="" ">Username:</label><input  type="text"name="user[username]" placeholder="Enter Username"><label for="Input username="" ">Password:</label><input  type="password"class="form-control" name="user[password]"placeholder="Enter Password"><br/><input type="submit"></form>'

login.one('click', function (e) {
	console.log('click')
	login.html(form)
});
/////////////////////////////////////////////////
var anotherForm = '<form class="signup-form"action="/users/new" method="post"><input type="text"name="user[username]"placeholder="Enter Username">Choose a Username<br/><input  type="password"name="user[password]"placeholder="Enter Password">Create a Password<br/><input  type="submit"value="Sign up"></form>'
signup.one('click', function (e) {
	console.log('click')
	signup.html(anotherForm)
});

