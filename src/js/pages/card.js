const tabs = document.querySelectorAll('.card__tabs-item')
const infoText = window.innerWidth > 769 ? document.querySelectorAll('.card__text-info') : document.querySelectorAll('.card__text-info--mob')
tabs.forEach((tab, id) => {
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