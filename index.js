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

const button = document.getElementById('button')


// // Error messages
// const errorName = document.getElementById('error-name')
// const errorNumBlank = document.getElementById('error-card-num-blank')
// const errorNumFormat = document.getElementById('error-num-format')
// const errorNumLength = document.getElementById('error-num-length')
// const errorDate = document.getElementById('error-date')
// const errorCvc = document.getElementById('error-cvc')

const firstInput = document.getElementById('first-input')
const secondInput = document.getElementById('second-input')
const thirdInput = document.getElementById('thirs-input')
const fourthInput = document.getElementById('fourth-input')


const cardDetails = [cardName, cardNumber, expiryDateMonth, expiryDateYear, cvc]
const numberDetails = [cardNumber, expiryDateMonth, expiryDateYear, cvc]
button.addEventListener("click", function (event) {
    event.preventDefault()
    if (notBlank(cardDetails)) {
    }
    

    wrongFormat(numberDetails)


})

const notBlank = function (arr) {
    for (let cardinput of arr) {
        // console.log(cardinput)
        // console.log(cardinput.value)

        if (cardinput.value === '') {
            // console.log('BLANK')
            // return false
            console.log(cardinput)

            let span = document.createElement('span')
            span.classList.add('error-msg')
            span.textContent = "Can't be blank"
            insertAfter(cardinput, span)

            function insertAfter(referenceNode, newNode) {
                referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            }
        }
    }
    
}


const wrongFormat = function (arr) {
    for (let cardinput of arr) {
        if (!cardinput.value.match(/^\d+$/)) {
            console.log('NOT A NUMBER')

            let span = document.createElement('span')
            span.classList.add('error-msg')
            span.textContent = "Enter numbers only"
            insertAfter(cardinput, span)

            function insertAfter(referenceNode, newNode) {
                referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            }
        }
    }

}


const enoughNums = function () {

}


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