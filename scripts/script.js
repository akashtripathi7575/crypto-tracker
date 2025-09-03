import { amountInput, resultSpan, coinInput, convertBtn } from "./dom.js";
import { fetchCryptoData } from "./cryptoAPI.js";
import { resetUI, updateUI } from "./ui.js";

// show default value
resetUI("0$");

convertBtn.addEventListener("click", async () => {
  const amount = parseFloat(amountInput.value);
  const coinId = coinInput.value.trim().toLowerCase();

  if (!coinId || isNaN(amount) || amount <= 0) {
    resetUI("Enter a valid coin or amount.");
    return;
  }

  const coin = await fetchCryptoData(coinId);

  if (!coin) {
    resetUI("Coin not found");
    return;
  }

  updateUI(coin, amount);
});
