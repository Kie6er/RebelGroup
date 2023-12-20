import Swiper from 'swiper';
import { EffectFade, Navigation } from 'swiper/modules';

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
if (window.innerWidth < 769) {
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
