document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = parseFloat(document.getElementById("amount").value);
    const balance = parseFloat(getText("balance"));
    let donate_till = parseFloat(document.getElementById("donated").innerText);

    donate_till = donate_till + addMoney;
    document.getElementById("donated").innerText = donate_till;
    const rem_balance = balance - addMoney;

    document.getElementById("balance").innerText = rem_balance;
  });
