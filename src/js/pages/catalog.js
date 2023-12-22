import $ from 'jquery';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

$(document).ready(() => {
  if ($('.catalog-cosmetic').length > 0) {
    $('.catalog-cosmetic__sort-text').click(function() {
      const drop = $(this).siblings('.catalog-cosmetic__sort-drop');
      if ($(this).hasClass('active')) {
        drop.slideUp(300);
        $(this).removeClass('active');
      } else {
        $(this).removeClass('active');
        drop.slideDown({
          start: function () {
            $(this).css({
              display: "flex"
            })
          },
          duration: 300,
        });
        $(this).addClass('active');
      }
    });

    $('.catalog-cosmetic__filter-text').click(function() {
      const drop = $(this).siblings('.catalog-cosmetic__filter-drop');
      if ($(this).hasClass('active')) {
        drop.slideUp(300);
        $(this).removeClass('active');
      } else {
        $(this).removeClass('active');
        drop.slideDown({
          start: function () {
            $(this).css({
              display: "grid"
            })
          },
          duration: 300,
        });
        $(this).addClass('active');
      }
    });

    document.addEventListener('click', (e) => {
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
          'min': 0,
          'max': 10000
      }
    });
    priceSlider.noUiSlider.on('update', function(values) {
      priceValues.innerHTML = values.map((el) => Math.round(el)).join(' - ');
    });
  }
});