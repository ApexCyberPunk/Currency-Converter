let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`

const fromDropDown = document.getElementById('from-currency-select')
const toDropDown = document.getElementById('to-currency-select');

// Create dropdown from the currencyKeysArray
// i for input Currency and P for parameter, because
// iCurrencyP is a copy of each element from the inputed array

currencies.forEach((iCurrencyP) => {

    const option = document.createElement('option')
    option.value = iCurrencyP
    option.text = iCurrencyP
    fromDropDown.add(option)

})

// alternate function 

currencies.forEach((iCurrencyP) => {

    const option = document.createElement('option')
    option.value = iCurrencyP
    option.text = iCurrencyP
    toDropDown.add(option)

})

// Setting default values

fromDropDown.value = "USD"
toDropDown.value = "EUR"

let convertCurrency = () => {

    const amount = document.querySelector("#amount").value
    const fromCurrency = fromDropDown.value
    const toCurrency = toDropDown.value

    // if input field is not empty ....

    if(amount.length != 0) {
        
fetch(api)
.then(x => x.json())
.then(data =>  {

let fromExchangeRate = data.conversion_rates[fromCurrency]
let toExchangeRate = data.conversion_rates[toCurrency]
const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)}`

})

    } else {
        alert("please fill in the amount")
    }

}

document
.querySelector('#convert-button')
.addEventListener('click', convertCurrency)

window.addEventListener('load', convertCurrency)




