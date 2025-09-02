import apiKey from "./config.js";

const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=solana`;

async function fetchCryptoData() {
    try {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "x-cg-demo-api-key": apiKey,
            "Accept": "application/json"
        }
    });
   
   const data = await response.json();
   console.log("Crypto data fetched successfully:", data);


    } catch (error) {
        console.error("Error fetching crypto data:", error);
    }
}

    fetchCryptoData();

// const resultSpan = document.querySelector
// ('#conversion-result');
// resultSpan.textContent = '83.40 USD';