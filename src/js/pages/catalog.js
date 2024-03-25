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

		const urlParams = new URLSearchParams(window.location.search);
		let minGetParameterValue = parseInt(urlParams.get('price_from'));
		let maxGetParameterValue = parseInt(urlParams.get('price_up_to'));
		const priceSlider = document.querySelector('.catalog-cosmetic__filter-slider');
		const priceValues = document.querySelector('.catalog-cosmetic__filter-values');
		console.log(minGetParameterValue, maxGetParameterValue);
		noUiSlider.create(priceSlider, {
			start: [minGetParameterValue ? minGetParameterValue : 1000, maxGetParameterValue ? maxGetParameterValue : 6500],
			connect: true,
			range: {
				min: 0,
				max: 10000,
			},
		});
		priceSlider.noUiSlider.on('update', function (values) {
			priceValues.innerHTML = values.map(el => Math.round(el)).join(' - ');
		});

		function setParameters(name, value) {
			const url = new URL(window.location.href);
			if (url.searchParams.get(name)) url.searchParams.delete(name);
			if (value) url.searchParams.append(name, value);
			window.history.pushState(null, null, url);
		}

		const formCatalog = document.querySelector('.catalog-cosmetic__settings')

		formCatalog.addEventListener('submit', (e) => {
			e.preventDefault()
			console.log('reset')
			formCatalog.reset()
			formCatalog.querySelector('.catalog-cosmetic__filter-text span').textContent = ''
			priceSlider.noUiSlider.set([0, 10000]);

			const baseUrl = window.location.href.split('?')[0];
			window.history.replaceState({}, document.title, baseUrl);

			let price = document.getElementById('price-range').innerText.split(' - ');
			let data = new FormData();
			console.log(price)
			data.append('section', document.getElementById('catalog').getAttribute('data-section'));
			data.append('sort', document.querySelector('.catalog-cosmetic__sort input:checked').value);
			data.append('category', categories.length ? categories.join(',') : '');
			data.append('price_from', price[0]);
			data.append('price_up_to', price[1]);
			data.append('page', page);
			
			sendAjax('/ajax/filter_catalog.php', data, response => {
				const catalog = document.getElementById('catalog');
				catalog?.querySelector('.catalog-cosmetic__list')?.remove();
				catalog?.querySelector('.catalog-cosmetic__pagination')?.remove();
				document.querySelector('.catalog-cosmetic__container').insertAdjacentHTML('beforeend', response);
				addPagination();
			});

		})

		function addPagination() {
			document
				.querySelector('.catalog-cosmetic__pagination')
				.querySelectorAll('.slider-navigation__btn')
				.forEach(button => {
					button.querySelector('svg').style.pointerEvents = 'none';
					button.addEventListener('click', e => {
						const totalPages = parseInt(document.querySelector('.catalog-cosmetic__pagination .swiper-pagination-total').innerHTML);
						let filter = false;
						if (e.target.classList.contains('catalog-cosmetic__slider-navigation-btn--next') && page <= totalPages) {
							filter = true;
							page++;
						} else if (e.target.classList.contains('catalog-cosmetic__slider-navigation-btn--prev') && page > 1) {
							filter = true;
							page--;
						}
						if (filter) {
							setParameters('page', page);
							filterCatalog(getData());
							location = location.pathname + location.search + '#catalog';
						}
					});
				});
		}
	}
});
