const convertButton = document.querySelector('.convert-button'); // botão para converter os valores
const currencySelect = document.querySelector('.currency-select'); // select para escolher a moeda a ser convertida
function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value // valor digitado pelo usuario para converter 

    const currencyValueToConvert = document.querySelector('.currency-value-to-convert') // valor em real a ser convertido 

    const currencyValueConverted = document.querySelector('.currency-value-converted') // valor convertido para outra moeda

    console.log(currencySelect.value); // verifico no console o valor selecionado no select

    const dolarToday = 5.2 // cotação atual do dolar, valor fixo mas pode ser atualizado para pegar a cotação em tempo real na internet
    const euroToday = 6.0 // cotação atual do euro, valor fixo mas pode ser atualizado para pegar a cotação em tempo real na internet
    const libraToday = 7.0 // cotação atual da libra, valor fixo mas pode ser atualizado para pegar a cotação em tempo real na internet
    const bitcoinToday = 390000.0 // cotação atual do bitcoin, valor fixo mas pode ser atualizado para pegar a cotação em tempo real na internet
     
    
    if (currencySelect.value == 'libra') { // se o valor do select for libra, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'  // seleciona o texto do valor convertido no html e exibe em libra formatado para moeda britânica 
        }).format(inputCurrencyValue / libraToday) 
    }

    if (currencySelect.value == 'bitcoin') { // se o valor do select for bitcoin, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'  // seleciona o texto do valor convertido no html e exibe em bitcoin formatado para moeda bitcoin 
        }).format(inputCurrencyValue / bitcoinToday) 
    }

    if(currencySelect.value == 'dolar'){ // se o valor do select for dolar, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'  // seleciona o texto do valor convertido no html e exibe em dolar formatado para moeda americana 
    }).format(inputCurrencyValue / dolarToday) 
    }

    if(currencySelect.value == 'euro'){ // se o valor do select for euro, entra aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'  // seleciona o texto do valor convertido no html e exibe em euro formatado para moeda europeia 
        }).format(inputCurrencyValue / euroToday) 
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue) // seleciona o texto do valor a converter no html e exibe em real formatado para moeda brasileira
    
    
}

function changeCurrency(){ // função para mudar o nome e a bandeira da moeda convertida
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')

    if (currencySelect.value == 'dolar'){ // se o valor do select for dolar, entra aqui
        currencyName.innerHTML = 'Dóar americano'
        currencyImage.src = 'assets/dolar.png'
    }

    if (currencySelect.value == 'euro') { // se o valor do select for euro, entra aqui
        currencyName.innerHTML = 'Euro'
        currencyImage.src = 'assets/euro.png'
    }

    if (currencySelect.value == 'libra') { // se o valor do select for libra, entra aqui
        currencyName.innerHTML = 'Libra esterlina'
        currencyImage.src = 'assets/libra.png'
    }

    if (currencySelect.value == 'bitcoin') { // se o valor do select for bitcoin, entra aqui
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = 'assets/bitcoin.png'
    }

    convertValues() // chama a função de converter os valores para atualizar o valor convertido equivalente a moeda selecionada no select sem precisar clicar no botão novamente
}



currencySelect.addEventListener('change', changeCurrency) // evento de alteração adicionado no select com a função de mudar o nome e a bandeira da moeda convertida
convertButton.addEventListener('click', convertValues) // evento de click adicionado no botão com a função de converter os valores