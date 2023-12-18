import $ from 'jquery';
$(document).ready(function () {
	if ($(window).outerWidth() <= 768) {
		$('.footer__main-title').each(function () {
			let el = $(this);
			if (el.next().length > 0) {
				el.click(function () {
					if (el.parent().hasClass('active')) {
						$('.footer__main-list').css('max-height', '');
						$('.footer__main-item').removeClass('active');
						setTimeout(function () {
							$('.footer__main-list').css('display', 'none');
						}, 800);
					} else {
						el.next().css('display', 'flex');
						$('.footer__main-list').css('max-height', '');
						el.next().css('max-height', el.next()[0].scrollHeight + 'px');
						$('.footer__main-item').removeClass('active');
						el.parent().addClass('active');
					}
				});
			}
		});
	}
});
