// Import custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Small script to interactively change .card-*theme-color* in Variant C file
let card = document.getElementById('card')
let themeSelector = document.getElementById('themeSelector')
if(themeSelector !== null) {
    let themeSelectorPreviousValue = ''
    themeSelector.value = ''
    themeSelector.addEventListener('click', event => {
        themeSelectorPreviousValue = event.target.value
    })
    themeSelector.addEventListener('change', event => {
        card.classList.remove('card-' + themeSelectorPreviousValue)
        card.classList.add('card-' + event.target.value)
    })
}
