import $ from 'jquery';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

$(document).ready(() => {
	if ($('.catalog-cosmetic').length > 0) {
		$('.catalog-cosmetic__sort-text').click(function () {
			const drop = $(this).siblings('.catalog-cosmetic__sort-drop');
			if ($(this).hasClass('active')) {
				drop.slideUp(300);
				$(this).removeClass('active');
			} else {
				$(this).removeClass('active');
				drop.slideDown({
					start: function () {
						$(this).css({
							display: 'flex',
						});
					},
					duration: 300,
				});
				$(this).addClass('active');
			}
		});

		$('.catalog-cosmetic__filter-text').click(function () {
			const drop = $(this).siblings('.catalog-cosmetic__filter-drop');
			if ($(this).hasClass('active')) {
				drop.slideUp(300);
				$(this).removeClass('active');
			} else {
				$(this).removeClass('active');
				drop.slideDown({
					start: function () {
						if (screen.width > 768) {
							$(this).css({
								display: 'grid',
							});
						} else {
							$(this).css({
								display: 'flex',
							});
						}
					},
					duration: 300,
				});
				$(this).addClass('active');
			}
		});

		$(window).resize(function () {
			changeFilterDisplay();
		});

		if (!$('.catalog-cosmetic__filter-text').data('platform')) {
			screen.width < 769 ? $('.catalog-cosmetic__filter-text').data('platform', 'mobile') : $('.catalog-cosmetic__filter-text').data('platform', 'desktop');
		}

		function changeFilterDisplay() {
			if (screen.width > 769) {
				if ($('.catalog-cosmetic__filter-text').data('platform') != 'mobile') return;
				$('.catalog-cosmetic__filter-text').data('platform', 'desktop');
				$('.catalog-cosmetic__filter-text').removeClass('active');
			} else {
				if ($('.catalog-cosmetic__filter-text').data('platform') != 'desktop') return;
				$('.catalog-cosmetic__filter-text').data('platform', 'mobile');
				$('.catalog-cosmetic__filter-text').removeClass('active');
			}
		}

		let filterCount = 0;
		$('.catalog-cosmetic__filter-input').click(function () {
			if ($(this).prop('checked')) {
				filterCount += 1;
			} else {
				filterCount -= 1;
			}
			if (filterCount === 0) {
				$('.catalog-cosmetic__filter-text span').html('');
				$('.catalog-cosmetic__filter-top .catalog-cosmetic__filter-title span').html('');
			} else {
				$('.catalog-cosmetic__filter-text span').html(`(${filterCount})`);
				$('.catalog-cosmetic__filter-top .catalog-cosmetic__filter-title span').html(`(${filterCount})`);
			}
		});

		$('.catalog-cosmetic__filter-close').click(function () {
			$('.catalog-cosmetic__filter-drop').slideUp(300);
			$('.catalog-cosmetic__filter-text').removeClass('active');
		});

		document.addEventListener('click', e => {
			if ($('.catalog-cosmetic__sort').find(e.target).length === 0) {
				$('.catalog-cosmetic__sort-text').removeClass('active');
				$('.catalog-cosmetic__sort-drop').slideUp(300);
			}
			if ($('.catalog-cosmetic__filter').find(e.target).length === 0) {
				$('.catalog-cosmetic__filter-text').removeClass('active');
				$('.catalog-cosmetic__filter-drop').slideUp(300);
			}
		});

		const priceSlider = document.querySelector('.catalog-cosmetic__filter-slider');
		const priceValues = document.querySelector('.catalog-cosmetic__filter-values');
		noUiSlider.create(priceSlider, {
			start: [1000, 6500],
			connect: true,
			range: {
				min: 0,
				max: 10000,
			},
		});
		priceSlider.noUiSlider.on('update', function (values) {
			priceValues.innerHTML = values.map(el => Math.round(el)).join(' - ');
		});
	}
});
