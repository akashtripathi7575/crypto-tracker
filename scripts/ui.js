import { resultSpan, coinImage, coinName, coinPrice } from "./dom.js";

export function resetUI(message = "0$") {
  resultSpan.textContent = message;
  coinImage.src = "";
  coinName.textContent = "";
  coinPrice.textContent = "";
}

export function updateUI(coin, amount) {
  coinName.textContent = coin.name;
  coinPrice.textContent = `Current price = $${coin.current_price}`;
  coinImage.src = coin.image;

  const totalValue = amount * coin.current_price;
  resultSpan.textContent = `${amount} ${coin.symbol.toUpperCase()} = $${totalValue.toFixed(3)}`;
}
