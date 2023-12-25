const tabs = document.querySelectorAll('.our_works__tabs-item')
const infoText = document.querySelectorAll('.our_works__main')
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
