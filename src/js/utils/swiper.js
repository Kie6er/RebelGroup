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
	if ($('.main-bestsellers__ticker').length) {
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
		});
	}
	if ($('.main-bestsellers__slider').length) {
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
	if ($('.main-evolution__slider').length) {
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
	if ($('.main-category__slider').length) {
		let mainCategorySlider = new Swiper('.main-category__slider', {
			modules: [Navigation],
			spaceBetween: `${remToPx(4)}rem`,
			direction: 'horizontal',
			slidesPerView: 2,
			loop: true,
			speed: 1200,
			navigation: {
				nextEl: '.main-category__slider-navigation-btn--next',
				prevEl: '.main-category__slider-navigation-btn--prev',
			},
		});
	}
	if ($('.work_with__slider').length) {
		const busSwiper = new Swiper('.work_with__slider', {
			slidesPerView: 1.25,
			spaceBetween: 12,
			modules: [Navigation],
			speed: 700,
			navigation: {
				prevEl: '.work_with__navigation-prev',
				nextEl: '.work_with__navigation-next',
			},
			breakpoints: {
				769: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
			},
		});
	}
	if ($('.barbershop-advantages__slider').length) {
		let barbershopAdvantagesSlider = new Swiper('.barbershop-advantages__slider', {
			modules: [Navigation, Pagination, EffectCreative],
			slidesPerView: 2,
			spaceBetween: `${remToPx(2)}rem`,
			direction: 'horizontal',
			speed: 1200,
			navigation: {
				prevEl: '.barbershop-advantages__slider-navigation-btn--prev',
				nextEl: '.barbershop-advantages__slider-navigation-btn--next',
			},
			pagination: {
				type: 'fraction',
				el: '.barbershop-advantages__slider-fraction',
			},
			effect: 'creative',
			creativeEffect: {
				next: {
					translate: ['39.6rem', '20.1rem', 0],
				},
				prev: {
					translate: ['-39.5rem', '33.5rem', 0],
				},
			},
		});
	}
	if ($(window).outerWidth() <= 768) {
		if ($('.main-brand__slider').length) {
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
		if ($('.main-trends__slider').length) {
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
		if ($('.work_info__slider').length) {
			const workInfoSwip = new Swiper('.work_info__slider', {
				slidesPerView: 1,
				modules: [EffectFade, Navigation],
				effect: 'fade',
				navigation: {
					prevEl: '.work_info__navigation-prev',
					nextEl: '.work_info__navigation-next',
				},
			});
		}
	}
});
