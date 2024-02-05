import ymaps from 'ymaps';

const mapEl = document.getElementById('map');
if (mapEl) {
	ymaps
		.load()
		.then(maps => {
			const map = new maps.Map('map', {
				center: [55.7893423, 37.6569675],
				zoom: 17,
				controls: [],
			});
			var placemark = new maps.Placemark(
				[55.7893423, 37.6569675],
				{},
				{
					iconLayout: 'default#image', // Используем стандартный макет изображения
					iconImageHref: './assets/images/placemark.svg', // Путь к вашей иконке
					// iconImageSize: [remToPx(12.6), remToPx(5.7)], // Размеры вашей иконки
				}
			);
			map.geoObjects.add(placemark);
		})
		.catch(error => console.log('Failed to load Yandex Maps', error));
}
