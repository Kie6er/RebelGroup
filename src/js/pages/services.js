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
