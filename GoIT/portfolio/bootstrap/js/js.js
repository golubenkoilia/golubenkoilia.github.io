$(document).ready(function() {
    // вызываем функцию, устанавливающую обработчик события клика по ссылкам, ссылающимся на анкор
    setup_slight_scroll_to_anchors();
});
 
// простая функция, реализующая плавное скроллирование
function setup_slight_scroll_to_anchors() {
   $('a[href^="#"]').click(function(){
        var link = $(this);
        // этой строчкой игнорируем ссылки, состоящие из единственного символа #
        if (link.attr('href') == '#') return;
        var target = link.attr('href');
        var target_top = $(target).offset().top;
        $('html, body').animate({scrollTop: target_top}, 2000);
        return false; 
   });
};

$(function () {
	var $popupClose = $('.popup_close');
	var $zoomButton1 = $('.button--zoom1');
	var $zoomButton2 = $('.button--zoom2');
	var $zoomButton3 = $('.button--zoom3');
	var $zoomButton4 = $('.button--zoom4');
	var $zoomButton5 = $('.button--zoom5');
	var $zoomButton6 = $('.button--zoom6');
	var $overLay = $('.overlay');
	$popupClose.on('click', function (e){
		e.preventDefault();
		$('.overlay').hide();
		$('.popup').hide();
	});
	$zoomButton1.on('click', function (e){
		e.preventDefault();
		$('.overlay').show();
		$('.popup1').show();
	});
	$zoomButton2.on('click', function (e){
		e.preventDefault();
		$('.overlay').show();
		$('.popup2').show();
	});
	$zoomButton3.on('click', function (e){
		e.preventDefault();
		$('.overlay').show();
		$('.popup3').show();
	});
	$zoomButton4.on('click', function (e){
		e.preventDefault();
		$('.overlay').show();
		$('.popup4').show();
	});
	$zoomButton5.on('click', function (e){
		e.preventDefault();
		$('.overlay').show();
		$('.popup5').show();
	});
	$zoomButton6.on('click', function (e){
		e.preventDefault();
		$('.overlay').show();
		$('.popup6').show();
	});
	$overLay.on('click', function (e){
		e.preventDefault();
		$('.overlay').hide();
		$('.popup').hide();
	});
});

$('body').scrollspy({
    target: '.navbar-fixed-top'
})
