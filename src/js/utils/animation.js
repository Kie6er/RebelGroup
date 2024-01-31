import $ from 'jquery';
import { gsap, snap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

$(document).ready(function () {
	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.config({ ignoreMobileResize: true, autoRefreshEvents: 'DOMContentLoaded,load,resize' });

	const matchMedia = gsap.matchMedia();
	matchMedia.add('(min-width: 769px)', () => {
		// desktop
		$('.main-trends').length && trendAnimation();
		$('.main-inspired').length && inspiredAnimation();
		$('.philosophy-content').length && philosophyAnimation();
	});
	matchMedia.add('(max-width: 768px)', () => {
		// mobile
	});
});

window.addEventListener('DOMContentLoaded', () => {
	ScrollTrigger.refresh();
});

window.addEventListener('load', () => {
	ScrollTrigger.refresh();
});

function trendAnimation() {
	let trendImagesAfter = gsap.utils.toArray('.main-trends__after img');
	let trendImagesBefore = gsap.utils.toArray('.main-trends__before img');

	let trendTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: '.main-trends',
			start: '-5% top',
			end: () => $('.main-trends')[0].offsetHeight * (trendImagesBefore.length - 1) + ' 100%',
			scrub: 2,
			pin: true,
			snap: {
				snapTo: 1 / (trendImagesBefore.length - 1),
				delay: 0.05,
				inertia: false,
				duration: {
					min: 0.2,
					max: 0.2,
				},
			},
		},
	});
	let trendTimelinePhoto = gsap.timeline({
		scrollTrigger: {
			trigger: '.main-trends',
			start: '-5% top',
			end: () => $('.main-trends')[0].offsetHeight * (trendImagesBefore.length - 1 / (trendImagesBefore.length - 1)) + ' 100%',
			scrub: 2,
		},
	});
	trendTimeline.to('.main-trends__circle-point', {
		rotate: 90 * (trendImagesBefore.length - 1),
		ease: 'none',
	});
	for (let i = 0; i < trendImagesAfter.length; i++) {
		trendTimeline.set(trendImagesAfter[i], { zIndex: -i }, '<');
		trendTimeline.set(trendImagesBefore[i], { zIndex: -i }, '<');

		trendTimelinePhoto
			.to(trendImagesAfter[i], {
				opacity: i !== trendImagesAfter.length - 1 ? 0 : 1,
				yPercent: i !== trendImagesAfter.length - 1 ? -100 : 0,
				ease: 'none',
			})
			.to(
				trendImagesBefore[i],
				{
					opacity: i !== trendImagesAfter.length - 1 ? 0 : 1,
					yPercent: i !== trendImagesAfter.length - 1 ? 100 : 0,
					ease: 'none',
				},
				'<'
			);
	}
}
function inspiredAnimation() {
	let inspiredPhotos = gsap.utils.toArray('.main-inspired__photos img');
	let inspiredLines = gsap.utils.toArray('.line-item');
	let inspiredTimeline = gsap
		.timeline({
			scrollTrigger: {
				trigger: '.main-inspired',
				start: 'top top',
				end: () => $('.main-inspired')[0].offsetHeight * 2 + ' 100%',
				pin: true,
				scrub: 3,
				snap: {
					snapTo: 1 / 2,
					delay: 0.1,
					inertia: false,
					duration: {
						min: 1,
						max: 2,
					},
				},
			},
		})
		.from('.main-inspired__text', {
			opacity: 0,
			scrollTrigger: {
				trigger: '.main-inspired',
				start: '10% center',
				end: '50% center',
				scrub: 2,
			},
		})
		.add(
			(function () {
				inspiredLines.forEach(el => {
					gsap.to(el, {
						'--scaleLine': 1,
						scrollTrigger: {
							trigger: '.main-inspired',
							start: '10% center',
							end: '50% center',
							scrub: 2,
						},
					});
				});
			})(),
			'<'
		)
		.add(
			(function () {
				inspiredPhotos.forEach((el, i) => {
					if (i <= 5) {
						gsap.to(
							el,
							{
								startAt: {
									'--transformImage': 450,
								},
								opacity: 1,
								'--transformImage': 0,
								ease: 'power1.inOut',
								scrollTrigger: {
									trigger: $('.main-inspired').parent('.pin-spacer'),
									start: '30% center',
									end: 'center center',
									scrub: 3,
								},
							},
							'<'
						);
					} else {
						gsap.to(
							el,
							{
								startAt: {
									'--transformImage': 120,
								},
								opacity: 1,
								'--transformImage': 0,
								duration: 2,
								scrollTrigger: {
									trigger: $('.main-inspired').parent('.pin-spacer'),
									start: '55% center',
									end: '75% center',
									scrub: 3,
								},
							},
							'<'
						);
					}
				});
			})(),
			'<'
		)
		.to('.main-inspired', {
			opacity: 0,
			yPercent: -100,
			scrollTrigger: {
				trigger: $('.main-inspired').parent('.pin-spacer'),
				start: '80% center',
				end: '110% center',
				scrub: 3,
			},
		});
}
function philosophyAnimation() {
	let container = gsap.utils.toArray('.philosophy-item');

	container.forEach(el => {
		gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: 'top 75%',
				end: 'center 75%',
				scrub: 3,
				ease: 'power1.inOut',
			},
		}).from($(el).find('.philosophy-item__title'), {
			color: 'rgba(75, 75, 75, 0.5)',
			y: '5rem',
		});
	});
}
