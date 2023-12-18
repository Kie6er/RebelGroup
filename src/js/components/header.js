import $ from 'jquery';
$(document).ready(function () {
	openBurgerMenu();
	headerNav();
});

$(window).resize(function () {
	headerNav();
});

function openBurgerMenu() {
	$('.burger-btn').on('click', function () {
		if (!$('.header').hasClass('active')) {
			$('.header').addClass('active');
			$('body').addClass('lock');
		} else {
			$('.header').removeClass('active');
			$('body').removeClass('lock');
		}
	});

	$('.header__overlay').on('click', () => {
		$('.header').removeClass('active');
		$('body').removeClass('lock');
	});
}

function headerNav() {
	let navButtons = $('.header__menu-top li');
	let navMenus = $('.header__menu-bottom--container');

	navButtons.each(function (index, item) {
		let itemMenu = item.dataset.menu;
		$(item).on('click', function (e) {
			e.preventDefault();
			$(navButtons).removeClass('active');
			$(navMenus).removeClass('active');
			$(`.${itemMenu}`).addClass('active');
			$(item).addClass('active');
			if (window.outerWidth <= 768) {
				$('.header__menu-bottom').addClass('active');
				$('.header__menu-top').removeClass('active');
				$('.header__menu-btn').css('display', 'none');
				$('.header__menu-social').css('display', 'none');
				$('.header__burger-btn').removeClass('active');
				$('.header__back-btn').addClass('active');
			}
		});
	});
	if (window.outerWidth <= 768) {
		if ($('.header__back-btn').hasClass('active')) {
			$('.header__menu-btn').css('display', 'none');
			$('.header__menu-social').css('display', 'none');
		}
		$('.header__back-btn').on('click', function () {
			if ($(this).hasClass('active')) {
				$('.header__menu-bottom').removeClass('active');
				$('.header__menu-top').addClass('active');
				$('.header__menu-btn').css('display', 'flex');
				$('.header__menu-social').css('display', 'flex');
				$('.header__burger-btn').addClass('active');
				$(this).removeClass('active');
			}
		});
	} else {
		$('.header__menu-social').css('display', 'flex');
	}
}
