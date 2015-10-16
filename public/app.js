function Reload () {
	$('.new-comment').addClass('newcomment-hide');
	$('.textarea').addClass('textarea-hide')
}

Reload();


var a = $('.a'),
	b = $('.b'),
	c = $('.c'),
	d = $('.d'),
	e = $('.e'),
	f = $('.f'),
	nava = $('.nava'),
	navb = $('.navb'),
	navc = $('.navc'),
	navd = $('.navd'),
	nave = $('.nave'),
	navf = $('.navf'),
	navg = $('.navg'),
	login = $('.login'),
	signup = $('.signup'),
	logout = $('.logout'),
	commentButton = $('.comment-button'),
	cancel = $('.cancel');


logout.on('mouseover', function (e) {
	e.target.value = "logout"
});

logout.on('mouseout', function (e) {
	e.target.value = "l"
});
//////////////////////////////////////////////////
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
	$('.navb').text('entertain-ment')
});
navb.on('mouseout', function (e) {
	$('.navb').text('e')
});
/////////////////////////////////////////////////
navc.on('mouseover', function (e) {
	$('.navc').text('politics')
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
var commentField = '<div class="new-comment"><form class="textarea" action="/threads/comment/<%= thread._id %>?_method=PATCH" method="post"><textarea name="comment"placeholder=" Make comment"class="box" rows="8"cols="23"   cols="60"></textarea><input type="hidden"name="author"value="<%= currentUser %>"><input class="submit-comment" type="submit"></form><button class="cancel">cancel</button></div>'

commentButton.on('click', function(e){
	$('.new-comment').toggleClass('newcomment-hide');
	$('.textarea').toggleClass('textarea-hide')
});
 





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

