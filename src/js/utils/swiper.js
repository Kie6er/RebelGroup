import $ from "jquery";
import Swiper from 'swiper';
import {
	Navigation,
	Autoplay,
	EffectFade,
	EffectCreative,
} from "swiper/modules";
function remToPx(remValue) {
	// Получаем текущий базовый размер шрифта (font-size) из элемента <html>
	var htmlFontSize = parseFloat(
		getComputedStyle(document.documentElement).fontSize
	);

	// Переводим значение из rem в px
	var pxValue = remValue * htmlFontSize;

	// Округляем значение до целых пикселей (по желанию)
	return Math.round(pxValue) + "px";
}
$(document).ready(() => {
	if ($(window).outerWidth() <= 768) {
		if ($('.main-brand__slider').length > 0) {
			let mainBrandSlider = new Swiper('.main-brand__slider', {
				modules: [Navigation, EffectFade],
				slidesPerView: 1,
				effect: "fade",
				fadeEffect: {
					crossFade: true
				},
				navigation: {
					nextEl: ".main-brand__slider-navigation-btn--next",
					prevEl: ".main-brand__slider-navigation-btn--prev"
				}
			})
		}
	} else {
		if ($('.main-category__slider').length > 0) {
			let mainCategorySlider = new Swiper('.main-category__slider', {
				// modules: [Autoplay],
				speed: 1200,
				grabCursor: true,
				slidesPerView: 1,
				loop: true,
				spaceBetween: `${remToPx(4)}rem`,
			})
		}
	}
})