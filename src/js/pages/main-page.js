import $ from 'jquery';

$(document).ready(() => {
	$('.banner-item').on('mouseenter', function () {
		$('.banner-item').removeClass('active');
		$(this).addClass('active');
	});
	$('.main-banner').on('mouseleave', function () {
		setTimeout(() => {
			$('.banner-item').addClass('active');
		}, 1500);
	});
});
