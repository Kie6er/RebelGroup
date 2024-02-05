import $ from 'jquery';
import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade, EffectCreative, Pagination, Controller, Grid, Thumbs } from 'swiper/modules';
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
			speed: 15000, //задаем скорость движения нашей бегущей строки
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
		const sldiesBestSellers = document.querySelectorAll('.main-bestsellers__slider-slide');
		let mainBestsellersSlider = new Swiper('.main-bestsellers__slider', {
			modules: [Pagination, Navigation],
			speed: 800,
			pagination: {
				type: 'fraction',
				el: '.main-bestsellers__fraction',
			},
			direction: 'horizontal',
			enabled: true,
			slidesPerView: 1,
			spaceBetween: `${remToPx(14.8)}rem`,
			navigation: {
				nextEl: '.main-bestsellers__slider-navigation-btn--next',
				prevEl: '.main-bestsellers__slider-navigation-btn--prev',
			},
			breakpoints: {
				768: {
					enabled: sldiesBestSellers.length < 3 ? false : true,
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
			slidesPerView: 1.25,
			loop: true,
			speed: 1200,
			navigation: {
				nextEl: '.main-category__slider-navigation-btn--next',
				prevEl: '.main-category__slider-navigation-btn--prev',
			},
			breakpoints: {
				768: {
					spaceBetween: `${remToPx(4)}rem`,
					slidesPerView: 4,
				},
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
			slidesPerView: 'auto',
			spaceBetween: `${remToPx(2)}rem`,
			direction: 'horizontal',
			autoHeight: true,
			speed: 1200,
			allowTouchMove: true,
			navigation: {
				prevEl: '.barbershop-advantages__slider-navigation-btn--prev',
				nextEl: '.barbershop-advantages__slider-navigation-btn--next',
			},
			pagination: {
				type: 'fraction',
				el: '.barbershop-advantages__slider-fraction',
			},
			effect: window.outerWidth > 768 ? 'creative' : 'slide',
			creativeEffect: {
				limitProgress: 2,
				next: {
					translate: ['39.6rem', '20.1rem', 0],
				},
				prev: {
					translate: ['-39.5rem', '33.5rem', 0],
				},
			},
			breakpoints: {
				768: {
					allowTouchMove: false,
					slidesPerView: 2,
					spaceBetween: `${remToPx(2.4)}rem`,
				},
			},
		});
	}
	if ($('.catalog-banner__img-slider').length > 0) {
		let imgSlider = new Swiper('.catalog-banner__img-slider', {
			modules: [Navigation, Controller, Pagination, EffectCreative],
			direction: 'horizontal',
			slidesPerView: 1,
			speed: 1200,
			// loop: true,
			navigation: {
				nextEl: '.catalog-banner__slider-navigation-btn--next',
				prevEl: '.catalog-banner__slider-navigation-btn--prev',
			},
			pagination: {
				type: 'fraction',
				el: '.catalog-banner__slider-pagination-frac',
			},
			effect: 'creative',
			creativeEffect: {
				prev: {
					translate: ['-100%', 0, 0],
				},
				next: {
					translate: ['100%', 0, 0],
				},
			},
			breakpoints: {
				768: {
					creativeEffect: {
						prev: {
							shadow: true,
							translate: ['-60%', 0, -100],
							opacity: 0,
							scale: 0.2,
						},
						next: {
							translate: ['100%', 0, 0],
						},
					},
				},
			},
		});
		let textSlider = new Swiper('.catalog-banner__text-slider', {
			modules: [Navigation, Controller, EffectCreative],
			direction: 'horizontal',
			slidesPerView: 1,
			speed: 1200,
			effect: 'creative',
			creativeEffect: {
				prev: {
					translate: ['-100%', 0, 0],
				},
				next: {
					translate: ['100%', 0, 0],
				},
			},
			breakpoints: {
				768: {
					creativeEffect: {
						prev: {
							shadow: true,
							translate: ['-200%', 0, -100],
							scale: 0.2,
							opacity: 0,
						},
						next: {
							translate: ['100%', 0, 0],
							opacity: 0,
						},
					},
				},
			},
		});
		// Assign each other controls
		textSlider.controller.control = imgSlider;
		imgSlider.controller.control = textSlider;
	}
	if ($('.catalog-category__slider').length > 0) {
		let slider = new Swiper('.catalog-category__slider', {
			modules: [Navigation],
			direction: 'horizontal',
			slidesPerView: 1.3,
			speed: 800,
			navigation: {
				nextEl: '.catalog-category__slider-navigation-btn--next',
				prevEl: '.catalog-category__slider-navigation-btn--prev',
			},
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: `${remToPx(2)}rem`,
				},
			},

			on: {
				init: slider => {
					if (window.outerWidth < 769) {
						slider.slides[0].classList.add('_active');
					} else {
						slider.slides[0].classList.remove('_active');
					}
				},
				click: slider => {
					slider.update();

					if (window.outerWidth < 769) {
						slider.slideTo(slider.clickedIndex);
					}
				},
				slideChange: slider => {
					slider.update();
				},
			},
		});

		let thumbSlider = new Swiper('.catalog-category__slider-left', {
			modules: [Thumbs, EffectFade],
			slidesPerView: 'auto',
			effect: 'fade',
			speed: 500,
			fadeEffect: {
				crossFade: true,
			},
			spaceBetween: `${remToPx(2)}`,
			thumbs: {
				swiper: slider,
			},
		});

		if (window.outerWidth < 769) {
			$('.catalog-category__slide').on('click', function () {
				$('.catalog-category__slide').removeClass('_active');
				$(this).addClass('_active');
			});
		}
	}
	if ($('.style-detail__slider').length) {
		let styleDetailSlider = new Swiper('.style-detail__slider', {
			modules: [Navigation, EffectFade, Autoplay],
			slidesPerView: 1,
			effect: 'fade',
			loop: true,
			speed: 1000,
			autoHeight: true,
			fadeEffect: {
				crossFade: true,
			},
			autoplay: {
				//задаем автоплей по умолчанию с нулевой задержкой
				delay: 5000,
				disableOnInteraction: false, // отключаем возможность отлючить анимацию при касании
			},
			navigation: {
				nextEl: '.style-detail__slider-navigation-btn--next',
				prevEl: '.style-detail__slider-navigation-btn--prev',
			},
		});
	}
	if ($('.product-slider__slider').length) {
		const sliders = document.querySelectorAll('.product-slider__slider');
		sliders.forEach(slider => {
			let mainCategorySlider = new Swiper(slider, {
				modules: [Navigation, Grid],
				spaceBetween: `${remToPx(2.4)}rem`,
				direction: 'horizontal',
				slidesPerView: 1,
				speed: 1200,
				enabled: false,
				// grid: {
				// 	rows: 4,
				// 	fill: 'row',
				// },
				navigation: {
					nextEl: slider.parentNode.parentNode.querySelector('.product-slider__slider-navigation-btn--next'),
					prevEl: slider.parentNode.parentNode.querySelector('.product-slider__slider-navigation-btn--prev'),
				},
				breakpoints: {
					769: {
						slidesPerView: 'auto',
						spaceBetween: `${remToPx(2)}rem`,
						grid: false,
						enabled: true,
					},
				},
			});
		});
		if (window.innerWidth < 769) {
			const btnsProduct = document.querySelectorAll('.product-slider__btn');
			btnsProduct.forEach(btnProduct => {
				let wrapper = btnProduct.closest('.product-slider__slider-wrapper ');
				let allSlides = wrapper.querySelectorAll('.product-slider__slider-slide');
				let visibleCount = 4;
				btnProduct.addEventListener('click', () => {
					console.log('tut');
					for (let i = visibleCount; i < visibleCount + 4; i++) {
						if (allSlides[i]) {
							allSlides[i].classList.add('visible');
						}
					}
					// Увеличиваем счетчик на 4
					visibleCount += 4;
					if (visibleCount >= allSlides.length) {
						btnProduct.style.display = 'none';
					}
				});
			});
			// allSlides.forEach(())
		}
	}
	if ($('.shops-advantages__slider').length) {
		let shopsAdvantagesSlider = new Swiper('.shops-advantages__slider', {
			modules: [Navigation],
			slidesPerView: 'auto',
			spaceBetween: `${remToPx(4)}rem`,
			speed: 500,
			enabled: true,
			navigation: {
				nextEl: '.shops-advantages__slider-navigation-btn--next',
				prevEl: '.shops-advantages__slider-navigation-btn--prev',
			},
			breakpoints: {
				768: {
					enabled: false,
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
