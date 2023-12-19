import $ from 'jquery';
import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade, EffectCreative, Pagination } from 'swiper/modules';
function remToPx(remValue) {
	// Получаем текущий базовый размер шрифта (font-size) из элемента <html>
	var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

	// Переводим значение из rem в px
	var pxValue = remValue * htmlFontSize;

	// Округляем значение до целых пикселей (по желанию)
	return Math.round(pxValue) + 'px';
}
$(document).ready(() => {
	if ($('.main-bestsellers__ticker').length > 0) {
		let mainBestsellersSlider = new Swiper('.main-bestsellers__ticker', {
			modules: [Autoplay],
			slidesPerView: 'auto',
			speed: 20000, //задаем скорость движения нашей бегущей строки
			loop: true, //зацикливаем, что бы движание было бесконечным
			allowTouchMove: false, // можно ещё отключить свайп
			autoplay: {
				//задаем автоплей по умолчанию с нулевой задержкой
				delay: 0,
				disableOnInteraction: false, // отключаем возможность отлючить анимацию при касании
			},
			// breakpoints: { //стандартные настройки, котрые не так важны
			// 	769: {
			// 		slidesPerView: 7,
			// 	},
			// 	320: {
			// 		slidesPerView: 2.25,
			// 		spaceBetween: rem(2.4),
			// 	},
			// },
		});
	}
	if ($('.main-bestsellers__slider').length > 0) {
		let mainBestsellersSlider = new Swiper('.main-bestsellers__slider', {
			modules: [Pagination],
			speed: 800,
			pagination: {
				type: 'fraction',
				el: '.main-bestsellers__fraction',
			},
			direction: 'horizontal',
			enabled: true,
			slidesPerView: 1,
			spaceBetween: `${remToPx(14.8)}rem`,
			breakpoints: {
				768: {
					enabled: false,
					slidesPerView: 3,
				},
			},
		});
	}
	if ($('.main-evolution__slider').length > 0) {
		let mainBestsellersSlider = new Swiper('.main-evolution__slider', {
			modules: [Navigation, EffectFade],
			slidesPerView: 1,
			effect: 'fade',
			speed: 1000,
			fadeEffect: {
				crossFade: true,
			},
			navigation: {
				nextEl: '.main-evolution__slider-navigation-btn--next',
				prevEl: '.main-evolution__slider-navigation-btn--prev',
			},
		});
	}
	if ($(window).outerWidth() <= 768) {
		if ($('.main-brand__slider').length > 0) {
			let mainBrandSlider = new Swiper('.main-brand__slider', {
				modules: [Navigation, EffectFade],
				slidesPerView: 1,
				effect: 'fade',
				speed: 1000,
				fadeEffect: {
					crossFade: true,
				},
				navigation: {
					nextEl: '.main-brand__slider-navigation-btn--next',
					prevEl: '.main-brand__slider-navigation-btn--prev',
				},
			});
		}
		if ($('.main-trends__slider').length > 0) {
			let mainBrandSlider = new Swiper('.main-trends__slider', {
				modules: [Navigation, EffectFade],
				slidesPerView: 1,
				effect: 'fade',
				speed: 1000,
				fadeEffect: {
					crossFade: true,
				},
				navigation: {
					nextEl: '.main-trends__slider-navigation-btn--next',
					prevEl: '.main-trends__slider-navigation-btn--prev',
				},
				on: {
					slideChange: evt => {
						$('.main-trends__circle-point')[1].style.transform = `rotate(${90 * evt.activeIndex}deg)`;
					},
				},
			});
		}
	} else {
		// if ($('.main-category__slider').length > 0) {
		// 	let mainCategorySlider = new Swiper('.main-category__slider', {
		// 		spaceBetween: `${remToPx(4)}rem`,
		// 		direction: 'horizontal',
		// 		slidesPerView: 3,
		// 		width: 200
		// 	})
		// }
	}
});
