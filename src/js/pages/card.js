const tabs = document.querySelectorAll('.card__tabs-item')
const cardSec = document.querySelector('.card__container')
const infoText = window.innerWidth > 769 ? document.querySelectorAll('.card__text-info') : document.querySelectorAll('.card__text-info--mob')
const cardPhoto = document.querySelector('.card__photo')
tabs.length > 0  && tabs.forEach((tab, id) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => {
            tab.classList.remove('active')
        })
        infoText.forEach((text) => {
            text.classList.remove('active')
        })
        tab.classList.add('active')
        infoText[id].classList.add('active')
    })
})
// Функция для проверки положения блока "cardSec"
function checkPosition() {
    if(window.innerWidth > 769 && cardPhoto){
       cardPhoto.style.position = 'sticky';
    }
  }
  
  // Добавляем обработчики событий для отслеживания прокрутки страницы и изменения размеров окна
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkPosition);