const btnYes = document.querySelector('.btn-yes');
const servWrapper = document.querySelector('.services__wrapper');

btnYes?.addEventListener('click', e => closeModalYes(e));

function closeModalYes(e) {
	document.body.style.overflow = '';
	e.target.closest('.modal_question').style.display = 'none';
	servWrapper.classList.add('active');
	if (window.innerWidth < 769) {
		document.querySelector('.services').classList.add('visible');
	}
}
function closeModal(e) {
	document.body.style.overflow = '';
	e.target.closest('.modal_question').style.display = 'none';
}

function clickMoreButton(btnClass, div) {
	const button = document.querySelector(btnClass);
	const block = document.querySelector(div);

	button &&
		block &&
		button.addEventListener('click', function () {
			block.classList.add('show');
			this.style.display = 'none';
		});
}

clickMoreButton('.distributors-terms__wrapper .btn-tertiary', '.distributors-terms__content');
