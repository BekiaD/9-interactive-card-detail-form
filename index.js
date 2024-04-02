// - Fill in the form and see the card details update in real-time
// - Receive error messages when the form is submitted if:
//   - Any input field is empty
//   - The card number, expiry date, or CVC fields are in the wrong format


const cardName = document.querySelector('.card-name')
const cardNamePlaceholder = document.querySelector('.card-name-placeholder')

const cardNumber = document.querySelector('.card-number')
const cardNumberPlaceholder = document.querySelector('.card-number-placeholder')

const expiryDateMonth = document.querySelector('.expiry-date-month')
const expiryDateMonthPlaceholder = document.querySelector('.expiry-month-placeholder')

const expiryDateYear = document.querySelector('.expiry-date-year')
const expiryDateYearPlaceholder = document.querySelector('.expiry-year-placeholder')

const cvc = document.querySelector('.cvc')
const cvcPlaceholder = document.querySelector('.cvc-placeholder')




const fillIn = function (item, placeholder, itemdefault) {
    item.addEventListener('keyup', () => {
        placeholder.textContent = item.value
        if (placeholder.textContent === '') {
            placeholder.textContent = itemdefault
        }
    })
}

fillIn(cardName, cardNamePlaceholder, 'Jane Appleseed')
fillIn(cardNumber, cardNumberPlaceholder, '0000 0000 0000 0000')
fillIn(expiryDateMonth, expiryDateMonthPlaceholder, '00')
fillIn(expiryDateYear, expiryDateYearPlaceholder, '00')
fillIn(cvc, cvcPlaceholder, '000')



// const button = document.getElementById('button')
// button.addEventListener("click", function (event) {
//     event.preventDefault()
// })






// REFACTORED CODE
// cardName.addEventListener('keyup', () => {
//     cardNamePlaceholder.textContent = cardName.value
//     if (cardNamePlaceholder.textContent === '') {
//         cardNamePlaceholder.textContent = 'Jane Appleseed'
//     }
// })


// cardNumber.addEventListener('keyup', () => {
//     cardNumberPlaceholder.textContent = cardNumber.value
//     if (cardNumberPlaceholder.textContent === '') {
//         cardNumberPlaceholder.textContent = '1234 5678 9123 0000'
//     }
// })


// expiryDateMonth.addEventListener('keyup', () => {
//     expiryMonthPlaceholder.textContent = expiryDateMonth.value
//     if (expiryMonthPlaceholder.textContent === '') {
//         expiryMonthPlaceholder.textContent = '00'
//     }
// })


// expiryDateYear.addEventListener('keyup', () => {
//     expiryYearPlaceholder.textContent = expiryDateYear.value
//     if (expiryYearPlaceholder.textContent === '') {
//         expiryYearPlaceholder.textContent = '00'
//     }
// })


// cvc.addEventListener('keyup', () => {
//     cvcPlaceholder.textContent = cvc.value
//     if (cvcPlaceholder.textContent === '') {
//         cvcPlaceholder.textContent = '000'
//     }
// })

