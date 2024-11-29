var flag;

var height1 = '100em';
var height2 = '1000em';
var coul1 = '#2AA6DC';
var coul2 = '#31c0ff';
var shade1 = 'none';
var shade2 = '0px 0px 6px 6px rgba(0,0,0,.3)';

function hide_me(s) {
	var p = document.getElementById(s).parentNode, c = p.getElementsByTagName('*');
	for(var i in p.getElementsByTagName('*')) {
		if(c.item(i).className == 'film_texte' || c.item(i).className == 'seance_texte') c.item(i).style.display = 'none';
	}
	p.parentNode.style.maxHeight = height1;
	p.style.background = coul1;
	p.style.boxShadow = shade1;
}
function show_me(s) {
	var p = document.getElementById(s).parentNode;
	var c = p.getElementsByTagName('*');
	for(var i in p.getElementsByTagName('*')) {
		if(c.item(i).className == 'film_texte' || c.item(i).className == 'seance_texte') c.item(i).style.display = 'block';
	}
	p.parentNode.style.maxHeight = height2;
	p.style.background = coul2;
	p.style.boxShadow = shade2;
}
function fold(s1) {
	if(!flag) {
		show_me(s1);
		flag = s1;
	}
	else {
		if(s1 == flag) {
			hide_me(s1);
			flag = false;
		}
		else {
			hide_me(flag);
			show_me(s1);
			flag = s1;
		}
	}
}
/*---------part------*/
var flag_part = 'part14';

function hide_part(s) {
	var p = document.getElementById(s).parentNode, c = p.getElementsByTagName('*');
	for(var i in p.getElementsByTagName('*')) {
		if(c.item(i).className == 'film_texte' || c.item(i).className == 'seance_texte') c.item(i).style.display = 'none';
	}
}
function show_part(s) {
	var p = document.getElementById(s).parentNode;
	var c = p.getElementsByTagName('*');
	for(var i in p.getElementsByTagName('*')) {
		if(c.item(i).className == 'film_texte' || c.item(i).className == 'seance_texte') c.item(i).style.display = 'block';
	}
}
function fold_part(s) {
	if(!flag_part) {
		document.getElementById(s).style.display = 'block';
		flag_part = s;
	}
	else {
		if(s != flag_part) {
			document.getElementById(flag_part).style.display = 'none';
			document.getElementById(s).style.display = 'block';
			flag_part = s;
		}
	}
}
