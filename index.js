// - Fill in the form and see the card details update in real-time
// - Receive error messages when the form is submitted if:
//   - Any input field is empty
//   - The card number, expiry date, or CVC fields are in the wrong format


const cardName = document.querySelector('.card-name')
const cardNamePlaceholder = document.querySelector('.card-name-placeholder')

cardName.addEventListener('keyup', () => {
    cardNamePlaceholder.textContent = cardName.value
    if (cardNamePlaceholder.textContent === '') {
        cardNamePlaceholder.textContent = 'Jane Appleseed'
    }
})

const cardNumber = document.querySelector('.card-number')
const cardNumberPlaceholder = document.querySelector('.card-number-placeholder')

cardNumber.addEventListener('keyup', () => {
    cardNumberPlaceholder.textContent = cardNumber.value
    if (cardNumberPlaceholder.textContent === '') {
        cardNumberPlaceholder.textContent = '1234 5678 9123 0000'
    }
})

const expiryDateMonth = document.querySelector('.expiry-date-month')
const expiryMonthPlaceholder = document.querySelector('.expiry-month-placeholder')

expiryDateMonth.addEventListener('keyup', () => {
    expiryMonthPlaceholder.textContent = expiryDateMonth.value
    if (expiryMonthPlaceholder.textContent === '') {
        expiryMonthPlaceholder.textContent = '00'
    }
})

const expiryDateYear = document.querySelector('.expiry-date-year')
const expiryYearPlaceholder = document.querySelector('.expiry-year-placeholder')

expiryDateYear.addEventListener('keyup', () => {
    expiryYearPlaceholder.textContent = expiryDateYear.value
    if (expiryYearPlaceholder.textContent === '') {
        expiryYearPlaceholder.textContent = '00'
    }
})

const cvc = document.querySelector('.cvc')
const cvcPlaceholder = document.querySelector('.cvc-placeholder')

cvc.addEventListener('keyup', () => {
    cvcPlaceholder.textContent = cvc.value
    if (cvcPlaceholder.textContent === '') {
        cvcPlaceholder.textContent = '000'
    }
})

const button = document.getElementById('button')
button.addEventListener("click", function(event){
    event.preventDefault()  
})