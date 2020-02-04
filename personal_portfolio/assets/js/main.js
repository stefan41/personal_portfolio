// Main Script File

// showing date in the footer
var footDate = document.getElementById('footer-date');

var date = new Date().getFullYear();

footDate.innerHTML = date;


// smooth scrolling to anchors on the page using jquery
$(document).ready(function()	{
	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 900);
	});

	$(window).scroll(function()	{
		if($(this).scrollTop() > 150)	{
			$('.scrl2top').fadeIn();
		}	else	{
			$('.scrl2top').fadeOut();
		}
	});

	// the click event
	$('.scrl2top').click(function()	{
		$('html, body').animate({scrollTop: 0}, 800);
		return false;
	});

	// initialize slick js carousel
	$('.testimonials').slick({
		dots: true,
		speed: 500,
		fade: true,
		cssEase: 'ease-out',
		arrows: false
	});
});


window.onload = function()	{
	var demoNode = document.createElement("button");
	var demoText = document.createTextNode("CTA");
	demoNode.appendChild(demoText);
	var location = document.getElementById("demo2");
	location.appendChild(demoNode);
	demoNode.setAttribute('class', 'btn-info');
	demoNode.setAttribute('id', 'remover');

	demoNode.onclick = function()	{
		alert('argaergaerg');
	}
}

// unija na dve polinja

// function union(arr1, arr2)	{
// 	if((arr1 == null) || (arr2 == null))
// 		return void 0;

// 	var obj = {};

// 	for(var i = arr1.length - 1; i >= 0; --i)
// 		obj[arr1[i]] = arr1[i];

// 	for(var i = arr2.length - 1; i >= 0; --i)
// 		obj[arr2[i]] = arr2[i];

// 	var res = [];

// 	for(var n in obj)	{
// 		if(obj.hasOwnProperty(n))
// 			res.push(obj[n]);
// 	}

// 	return res;
// }

// console.log(union([1, 2, 3], [100, 15, 2331, 2, 2, 1, 10]));

