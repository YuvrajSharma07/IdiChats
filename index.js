function settingsbtn() {
	var btn = document.getElementById('settingsbtn');
	var text = document.getElementById('navtext');
}
setTimeout(function () {
    document.title = "IdiChats"
}, 1000);

// bgcolor theme codes:

document.getElementById('gwtheme').onclick = function() {
	$(".bgtheme").addClass("gwhitetheme");
	$(".navbar-toggler").addClass("bg-inverse");
	$(".bgtheme").removeClass("greytheme");
	$(".bgtheme").removeClass("lgreentheme");
	$(".bgtheme").removeClass("dgreentheme");
	$(".bgtheme").removeClass("orangetheme");
	$(".bgtheme").removeClass("yellowtheme");
	$(".bgtheme").removeClass("darktheme");
	$(".bgtheme").removeClass("lavendertheme");
	$(".bgtheme").removeClass("purpletheme");
	$(".bgtheme").removeClass("tealtheme");
	$(".bgtheme").removeClass("dbluetheme");
	$(".bgtheme").removeClass("lbluetheme");
	$(".bgtheme").removeClass("whitetheme");
	$(".bgtheme").removeClass("redtheme");
}
document.getElementById('ytheme').onclick = function() {
	$(".bgtheme").addClass("yellowtheme");
	$(".bgtheme").removeClass("greytheme");
	$(".bgtheme").removeClass("lgreentheme");
	$(".bgtheme").removeClass("dgreentheme");
	$(".bgtheme").removeClass("orangetheme");
	$(".bgtheme").removeClass("gwhitetheme");
	$(".bgtheme").removeClass("darktheme");
	$(".bgtheme").removeClass("lavendertheme");
	$(".bgtheme").removeClass("purpletheme");
	$(".bgtheme").removeClass("tealtheme");
	$(".bgtheme").removeClass("dbluetheme");
	$(".bgtheme").removeClass("lbluetheme");
	$(".bgtheme").removeClass("whitetheme");
	$(".navbar-toggler").removeClass("bg-inverse");
	$(".bgtheme").removeClass("redtheme");
}
document.getElementById('otheme').onclick = function() {
	$(".bgtheme").addClass("orangetheme");
	$(".bgtheme").removeClass("greytheme");
	$(".bgtheme").removeClass("lgreentheme");
	$(".bgtheme").removeClass("dgreentheme");
	$(".bgtheme").removeClass("yellowtheme");
	$(".bgtheme").removeClass("gwhitetheme");
	$(".bgtheme").removeClass("darktheme");
	$(".navbar-toggler").removeClass("bg-inverse");
	$(".bgtheme").removeClass("lavendertheme");
	$(".bgtheme").removeClass("purpletheme");
	$(".bgtheme").removeClass("tealtheme");
	$(".bgtheme").removeClass("dbluetheme");
	$(".bgtheme").removeClass("lbluetheme");
	$(".bgtheme").removeClass("whitetheme");
	$(".bgtheme").removeClass("redtheme");
}
document.getElementById('lbtheme').onclick = function() {
	$(".bgtheme").addClass("lbluetheme");
	$(".bgtheme").removeClass("greytheme");
	$(".bgtheme").removeClass("lgreentheme");
	$(".bgtheme").removeClass("dgreentheme");
	$(".navbar-toggler").removeClass("bg-inverse");
	$(".bgtheme").removeClass("orangetheme");
	$(".bgtheme").removeClass("gwhitetheme");
	$(".bgtheme").removeClass("darktheme");
	$(".bgtheme").removeClass("lavendertheme");
	$(".bgtheme").removeClass("purpletheme");
	$(".bgtheme").removeClass("tealtheme");
	$(".bgtheme").removeClass("dbluetheme");
	$(".bgtheme").removeClass("yellowtheme");
	$(".bgtheme").removeClass("whitetheme");
	$(".bgtheme").removeClass("redtheme");
}
document.getElementById('ltheme').onclick = function() {
	$(".bgtheme").addClass("lavendertheme");
	$(".bgtheme").removeClass("greytheme");
	$(".bgtheme").removeClass("lgreentheme");
	$(".bgtheme").removeClass("dgreentheme");
	$(".navbar-toggler").removeClass("bg-inverse");
	$(".bgtheme").removeClass("orangetheme");
	$(".bgtheme").removeClass("gwhitetheme");
	$(".bgtheme").removeClass("darktheme");
	$(".bgtheme").removeClass("yellowtheme");
	$(".bgtheme").removeClass("purpletheme");
	$(".bgtheme").removeClass("tealtheme");
	$(".bgtheme").removeClass("dbluetheme");
	$(".bgtheme").removeClass("lbluetheme");
	$(".bgtheme").removeClass("whitetheme");
	$(".bgtheme").removeClass("redtheme");
}
document.getElementById('dbtheme').onclick = function() {
	$(".bgtheme").addClass("dbluetheme");
	$(".bgtheme").removeClass("greytheme");
	$(".bgtheme").removeClass("lgreentheme");
	$(".navbar-toggler").removeClass("bg-inverse");
	$(".bgtheme").removeClass("dgreentheme");
	$(".bgtheme").removeClass("orangetheme");
	$(".bgtheme").removeClass("gwhitetheme");
	$(".bgtheme").removeClass("darktheme");
	$(".bgtheme").removeClass("lavendertheme");
	$(".bgtheme").removeClass("purpletheme");
	$(".bgtheme").removeClass("tealtheme");
	$(".bgtheme").removeClass("yellowtheme");
	$(".bgtheme").removeClass("lbluetheme");
	$(".bgtheme").removeClass("whitetheme");
	$(".bgtheme").removeClass("redtheme");
}
document.getElementById('gtheme').onclick = function() {
	$(".bgtheme").addClass("greytheme");
	$(".bgtheme").removeClass("yellowtheme");
	$(".bgtheme").removeClass("lgreentheme");
	$(".navbar-toggler").removeClass("bg-inverse");
	$(".bgtheme").removeClass("dgreentheme");
	$(".bgtheme").removeClass("orangetheme");
	$(".bgtheme").removeClass("gwhitetheme");
	$(".bgtheme").removeClass("darktheme");
	$(".bgtheme").removeClass("lavendertheme");
	$(".bgtheme").removeClass("purpletheme");
	$(".bgtheme").removeClass("tealtheme");
	$(".bgtheme").removeClass("dbluetheme");
	$(".bgtheme").removeClass("lbluetheme");
	$(".bgtheme").removeClass("whitetheme");
	$(".bgtheme").removeClass("redtheme");
}
document.getElementById('lgtheme').onclick = function() {
	$(".bgtheme").addClass("lgreentheme");
	$(".bgtheme").removeClass("greytheme");
	$(".bgtheme").removeClass("yellowtheme");
	$(".navbar-toggler").removeClass("bg-inverse");
	$(".bgtheme").removeClass("dgreentheme");
	$(".bgtheme").removeClass("orangetheme");
	$(".bgtheme").removeClass("gwhitetheme");
	$(".bgtheme").removeClass("darktheme");
	$(".bgtheme").removeClass("lavendertheme");
	$(".bgtheme").removeClass("purpletheme");
	$(".bgtheme").removeClass("tealtheme");
	$(".bgtheme").removeClass("dbluetheme");
	$(".bgtheme").removeClass("lbluetheme");
	$(".bgtheme").removeClass("whitetheme");
	$(".bgtheme").removeClass("redtheme");
}
document.getElementById('dgtheme').onclick = function() {
	$(".bgtheme").addClass("dgreentheme");
	$(".bgtheme").removeClass("greytheme");
	$(".bgtheme").removeClass("lgreentheme");
	$(".bgtheme").removeClass("yellowtheme");
	$(".bgtheme").removeClass("orangetheme");
	$(".bgtheme").removeClass("gwhitetheme");
	$(".navbar-toggler").removeClass("bg-inverse");
	$(".bgtheme").removeClass("darktheme");
	$(".bgtheme").removeClass("lavendertheme");
	$(".bgtheme").removeClass("purpletheme");
	$(".bgtheme").removeClass("tealtheme");
	$(".bgtheme").removeClass("dbluetheme");
	$(".bgtheme").removeClass("lbluetheme");
	$(".bgtheme").removeClass("redtheme");
	$(".bgtheme").removeClass("whitetheme");
}
document.getElementById('ptheme').onclick = function() {
	$(".bgtheme").addClass("purpletheme");
	$(".bgtheme").removeClass("greytheme");
	$(".bgtheme").removeClass("lgreentheme");
	$(".bgtheme").removeClass("dgreentheme");
	$(".bgtheme").removeClass("orangetheme");
	$(".navbar-toggler").removeClass("bg-inverse");
	$(".bgtheme").removeClass("gwhitetheme");
	$(".bgtheme").removeClass("darktheme");
	$(".bgtheme").removeClass("lavendertheme");
	$(".bgtheme").removeClass("yellowtheme");
	$(".bgtheme").removeClass("tealtheme");
	$(".bgtheme").removeClass("dbluetheme");
	$(".bgtheme").removeClass("lbluetheme");
	$(".bgtheme").removeClass("redtheme");
	$(".bgtheme").removeClass("whitetheme");
}
document.getElementById('dtheme').onclick = function() {
	$(".bgtheme").addClass("darktheme");
	$(".bgtheme").removeClass("greytheme");
	$(".bgtheme").removeClass("lgreentheme");
	$(".bgtheme").removeClass("dgreentheme");
	$(".bgtheme").removeClass("orangetheme");
	$(".bgtheme").removeClass("gwhitetheme");
	$(".bgtheme").removeClass("yellowtheme");
	$(".bgtheme").removeClass("lavendertheme");
	$(".bgtheme").removeClass("purpletheme");
	$(".bgtheme").removeClass("tealtheme");
	$(".bgtheme").removeClass("dbluetheme");
	$(".bgtheme").removeClass("lbluetheme");
	$(".bgtheme").removeClass("redtheme");
	$(".navbar-toggler").removeClass("bg-inverse");
	$(".bgtheme").removeClass("whitetheme");
}
document.getElementById('wtheme').onclick = function() {
	$(".bgtheme").addClass("whitetheme");
	$(".navbar-toggler").addClass("bg-inverse");
	$(".bgtheme").removeClass("greytheme");
	$(".bgtheme").removeClass("lgreentheme");
	$(".bgtheme").removeClass("dgreentheme");
	$(".bgtheme").removeClass("orangetheme");
	$(".bgtheme").removeClass("gwhitetheme");
	$(".bgtheme").removeClass("darktheme");
	$(".bgtheme").removeClass("lavendertheme");
	$(".bgtheme").removeClass("purpletheme");
	$(".bgtheme").removeClass("tealtheme");
	$(".bgtheme").removeClass("dbluetheme");
	$(".bgtheme").removeClass("lbluetheme");
	$(".bgtheme").removeClass("redtheme");
	$(".bgtheme").removeClass("yellowtheme");
}
document.getElementById('ttheme').onclick = function() {
	$(".bgtheme").addClass("tealtheme");
	$(".bgtheme").removeClass("greytheme");
	$(".bgtheme").removeClass("lgreentheme");
	$(".bgtheme").removeClass("dgreentheme");
	$(".bgtheme").removeClass("orangetheme");
	$(".bgtheme").removeClass("gwhitetheme");
	$(".bgtheme").removeClass("darktheme");
	$(".bgtheme").removeClass("lavendertheme");
	$(".bgtheme").removeClass("purpletheme");
	$(".bgtheme").removeClass("yellowtheme");
	$(".bgtheme").removeClass("dbluetheme");
	$(".bgtheme").removeClass("lbluetheme");
	$(".bgtheme").removeClass("redtheme");
	$(".navbar-toggler").removeClass("bg-inverse");
	$(".bgtheme").removeClass("whitetheme");
}
document.getElementById('rtheme').onclick = function() {
	$(".bgtheme").addClass("redtheme");
	$(".bgtheme").removeClass("greytheme");
	$(".bgtheme").removeClass("lgreentheme");
	$(".bgtheme").removeClass("dgreentheme");
	$(".bgtheme").removeClass("orangetheme");
	$(".bgtheme").removeClass("gwhitetheme");
	$(".bgtheme").removeClass("darktheme");
	$(".bgtheme").removeClass("lavendertheme");
	$(".bgtheme").removeClass("purpletheme");
	$(".bgtheme").removeClass("yellowtheme");
	$(".bgtheme").removeClass("dbluetheme");
	$(".bgtheme").removeClass("lbluetheme");
	$(".bgtheme").removeClass("tealtheme");
	$(".navbar-toggler").removeClass("bg-inverse");
	$(".bgtheme").removeClass("whitetheme");
}

// fontfamily codes:

document.getElementById('psans').onclick = function() {
	$(".fschange").addClass("productsans");
	// $(".productsans").addClass("fonttactive");
	$(".fschange").removeClass("opensans");
	$(".fschange").removeClass("roboto");
	$(".fschange").removeClass("ubuntu");
	$(".fschange").removeClass("montserrat");
	$(".fschange").removeClass("quicksand");
	$(".fschange").removeClass("josefinsans");
	$(".fschange").removeClass("ptsans");
	$(".fschange").removeClass("sourcesans");
}
document.getElementById('osans').onclick = function() {
	$(".fschange").addClass("opensans");
	// $(".opensans").addClass("fonttactive");
	$(".fschange").removeClass("productsans");
	$(".fschange").removeClass("roboto");
	$(".fschange").removeClass("ubuntu");
	$(".fschange").removeClass("montserrat");
	$(".fschange").removeClass("quicksand");
	$(".fschange").removeClass("josefinsans");
	$(".fschange").removeClass("ptsans");
	$(".fschange").removeClass("sourcesans");
}
document.getElementById('robo').onclick = function() {
	$(".fschange").addClass("roboto");
	// $(".roboto").addClass("fonttactive");
	$(".fschange").removeClass("opensans");
	$(".fschange").removeClass("productsans");
	$(".fschange").removeClass("ubuntu");
	$(".fschange").removeClass("montserrat");
	$(".fschange").removeClass("quicksand");
	$(".fschange").removeClass("josefinsans");
	$(".fschange").removeClass("ptsans");
	$(".fschange").removeClass("sourcesans");
}
document.getElementById('ubun').onclick = function() {
	$(".fschange").addClass("ubuntu");
	// $(".ubuntu").addClass("fonttactive");
	$(".fschange").removeClass("opensans");
	$(".fschange").removeClass("roboto");
	$(".fschange").removeClass("productsans");
	$(".fschange").removeClass("montserrat");
	$(".fschange").removeClass("quicksand");
	$(".fschange").removeClass("josefinsans");
	$(".fschange").removeClass("ptsans");
	$(".fschange").removeClass("sourcesans");
}
document.getElementById('mont').onclick = function() {
	$(".fschange").addClass("montserrat");
	// $(".montserrat").addClass("fonttactive");
	$(".fschange").removeClass("opensans");
	$(".fschange").removeClass("roboto");
	$(".fschange").removeClass("ubuntu");
	$(".fschange").removeClass("productsans");
	$(".fschange").removeClass("quicksand");
	$(".fschange").removeClass("josefinsans");
	$(".fschange").removeClass("ptsans");
	$(".fschange").removeClass("sourcesans");
}
document.getElementById('quic').onclick = function() {
	$(".fschange").addClass("quicksand");
	// $(".quicksand").addClass("fonttactive");
	$(".fschange").removeClass("opensans");
	$(".fschange").removeClass("roboto");
	$(".fschange").removeClass("ubuntu");
	$(".fschange").removeClass("montserrat");
	$(".fschange").removeClass("productsans");
	$(".fschange").removeClass("josefinsans");
	$(".fschange").removeClass("ptsans");
	$(".fschange").removeClass("sourcesans");
}
document.getElementById('jose').onclick = function() {
	$(".fschange").addClass("josefinsans");
	// $(".josefinsans").addClass("fonttactive");
	$(".fschange").removeClass("opensans");
	$(".fschange").removeClass("roboto");
	$(".fschange").removeClass("ubuntu");
	$(".fschange").removeClass("montserrat");
	$(".fschange").removeClass("quicksand");
	$(".fschange").removeClass("productsans");
	$(".fschange").removeClass("ptsans");
	$(".fschange").removeClass("sourcesans");
}
document.getElementById('ptsans').onclick = function() {
	$(".fschange").addClass("ptsans");
	// $(".ptsans").addClass("fonttactive");
	$(".fschange").removeClass("opensans");
	$(".fschange").removeClass("roboto");
	$(".fschange").removeClass("ubuntu");
	$(".fschange").removeClass("montserrat");
	$(".fschange").removeClass("quicksand");
	$(".fschange").removeClass("josefinsans");
	$(".fschange").removeClass("productsans");
	$(".fschange").removeClass("sourcesans");
}
document.getElementById('ssans').onclick = function() {
	$(".fschange").addClass("sourcesans");
	// $(".sourcesans").addClass("fonttactive");
	$(".fschange").removeClass("opensans");
	$(".fschange").removeClass("roboto");
	$(".fschange").removeClass("ubuntu");
	$(".fschange").removeClass("montserrat");
	$(".fschange").removeClass("quicksand");
	$(".fschange").removeClass("josefinsans");
	$(".fschange").removeClass("ptsans");
	$(".fschange").removeClass("productsans");
}

// color theme codes:

document.getElementById('wcolor').onclick = function() {
	$(".colortheme").addClass("whitecolor");
	$(".colortheme").removeClass("gwhitecolor");
	$(".colortheme").removeClass("greycolor");
	$(".colortheme").removeClass("darkcolor");
	$(".colortheme").removeClass("blackcolor");
}
document.getElementById('gwcolor').onclick = function() {
	$(".colortheme").addClass("gwhitecolor");
	$(".colortheme").removeClass("whitecolor");
	$(".colortheme").removeClass("greycolor");
	$(".colortheme").removeClass("darkcolor");
	$(".colortheme").removeClass("blackcolor");
}
document.getElementById('gcolor').onclick = function() {
	$(".colortheme").addClass("greycolor");
	$(".colortheme").removeClass("gwhitecolor");
	$(".colortheme").removeClass("whitecolor");
	$(".colortheme").removeClass("darkcolor");
	$(".colortheme").removeClass("blackcolor");
}
document.getElementById('dcolor').onclick = function() {
	$(".colortheme").addClass("darkcolor");
	$(".colortheme").removeClass("gwhitecolor");
	$(".colortheme").removeClass("greycolor");
	$(".colortheme").removeClass("whitecolor");
	$(".colortheme").removeClass("blackcolor");
}
document.getElementById('bcolor').onclick = function() {
	$(".colortheme").addClass("blackcolor");
	$(".colortheme").removeClass("gwhitecolor");
	$(".colortheme").removeClass("greycolor");
	$(".colortheme").removeClass("darkcolor");
	$(".colortheme").removeClass("whitecolor");
}

// fontsize codes:

function fontsize() {
	var pxval = document.getElementById('pxval').value;
	$('html').style.fontSize = "120px";
}

// reset codes:

document.getElementById('resetbtn').onclick = function() {
	$(".colortheme").removeClass("gwhitecolor");
	$(".colortheme").removeClass("greycolor");
	$(".colortheme").removeClass("darkcolor");
	$(".colortheme").removeClass("blackcolor");
	$(".colortheme").removeClass("whitecolor");
	$(".fschange").removeClass("opensans");
	$(".fschange").removeClass("roboto");
	$(".fschange").removeClass("ubuntu");
	$(".fschange").removeClass("montserrat");
	$(".fschange").removeClass("quicksand");
	$(".fschange").removeClass("josefinsans");
	$(".fschange").removeClass("ptsans");
	$(".fschange").removeClass("productsans");
	$(".fschange").removeClass("sourcesans");
	$(".bgtheme").removeClass("greytheme");
	$(".bgtheme").removeClass("lgreentheme");
	$(".bgtheme").removeClass("dgreentheme");
	$(".bgtheme").removeClass("orangetheme");
	$(".bgtheme").removeClass("gwhitetheme");
	$(".bgtheme").removeClass("darktheme");
	$(".bgtheme").removeClass("lavendertheme");
	$(".bgtheme").removeClass("purpletheme");
	$(".bgtheme").removeClass("yellowtheme");
	$(".bgtheme").removeClass("dbluetheme");
	$(".bgtheme").removeClass("lbluetheme");
	$(".bgtheme").removeClass("tealtheme");
	$(".navbar-toggler").removeClass("bg-inverse");
	$(".bgtheme").removeClass("redtheme");
	$(".bgtheme").removeClass("whitetheme");
}