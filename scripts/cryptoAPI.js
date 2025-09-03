import apiKey from "./config.js";
export async function fetchCryptoData(coinId) {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-cg-demo-api-key": apiKey,
        Accept: "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    if (!data || data.length === 0) {
      return null;
    }

    return data[0];

  } catch (error) {
    console.error("Error fetching crypto data:", error);
    return null;
  }
}
