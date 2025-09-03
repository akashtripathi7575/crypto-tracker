import apiKey from "./config.js";

const amountInput = document.querySelector('#amount-input');
const resultSpan =  document.querySelector('#conversion-result');
const coinInput = document.querySelector('#coin-input');
const convertBtn = document.querySelector('#convert-btn');
const coinImage = document.querySelector('#coinImage');
const coinName = document.querySelector('#coinName');
const coinPrice = document.querySelector('#coinPrice');


async function fetchCryptoData(coinId, amount) {
    
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}`;

    try {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "x-cg-demo-api-key": apiKey,
            "Accept": "application/json"
        }
    });
   
   const data = await response.json();

   if(!data || data.length === 0) {
       resultSpan.textContent = "Coint not found";
       coinImage.src = "";
       coinName.textContent = "";
       coinPrice.textContent = "";
       return;
   }

   const coin = data[0];

   coinName.textContent = coin.name;
   coinPrice.textContent = `Coin price is = $${coin.current_price}`;
   coinImage.src = coin.image;

   const totalValue = amount * coin.current_price;
   const value = resultSpan.textContent = `${amount} ${coin.symbol.toUpperCase()} = $${totalValue.toFixed(3)}`;
   console.log(value);

    } catch (error) {
        console.error("Error fetching crypto data:", error);
        resultSpan.textContent = "Error fetching data. Try again later";
    }
}

convertBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const coinId = coinInput.value.trim().toLowerCase();

    if(!coinId || isNaN(amount) || amount <= 0) {
        resultSpan.textContent = "Enter a valid coin or amount.";
        coinImage.src = "";
        coinName.textContent = "";
        coinPrice.textContent = "";
        return;
    }

    fetchCryptoData(coinId, amount);
});


