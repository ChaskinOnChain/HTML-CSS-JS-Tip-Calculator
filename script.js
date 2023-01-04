const calculateButton = document.getElementById("calc");
const amount = document.getElementById("amount");
const guests = document.getElementById("guests");
const quality = document.getElementById("quality");
const tipAmount = document.getElementById("tip-amount");

calculateButton.addEventListener("click", () => {
  const totalOwed = amount.value * quality.value;
  console.log(totalOwed);
  const tipPerPerson = totalOwed / guests.value;
  tipAmount.innerText = `Tip $${tipPerPerson} each`;
  tipAmount.style.removeProperty("display");
  tipAmount.style.display = "flex";
});
