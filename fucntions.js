document
  .getElementById("add_money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = parseFloat(document.getElementById("amount").value);

    if (isNaN(addMoney)) {
      alert("Enter a number");
      return 0;
    }
    if (addMoney <= 0) {
      alert("Least amount of donation is 1 taka");
    }
    const balance = parseFloat(getText("balance"));
    if (addMoney > balance) {
      alert("Not enough balance");
      return 0;
    }
    let donate_till = parseFloat(document.getElementById("donated").innerText);

    //adds money to donation list
    donate_till = donate_till + addMoney;
    document.getElementById("donated").innerText = donate_till;

    //removes money from balance
    const rem_balance = balance - addMoney;
    document.getElementById("balance").innerText = rem_balance;
  });

document
  .getElementById("add_money1")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = parseFloat(document.getElementById("amount1").value);

    if (isNaN(addMoney)) {
      alert("Enter a number");
      return 0;
    }
    if (addMoney <= 0) {
      alert("Least amount of donation is 1 taka");
    }
    const balance = parseFloat(getText("balance"));
    if (addMoney > balance) {
      alert("Not enough balance");
      return 0;
    }
    let donate_till = parseFloat(document.getElementById("donated1").innerText);

    //adds money to donation list
    donate_till = donate_till + addMoney;
    document.getElementById("donated1").innerText = donate_till;

    //removes money from balance
    const rem_balance = balance - addMoney;
    document.getElementById("balance").innerText = rem_balance;
  });

document
  .getElementById("add_money2")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = parseFloat(document.getElementById("amount2").value);

    if (isNaN(addMoney)) {
      alert("Enter a number");
      return 0;
    }
    if (addMoney <= 0) {
      alert("Least amount of donation is 1 taka");
    }
    const balance = parseFloat(getText("balance"));
    if (addMoney > balance) {
      alert("Not enough balance");
      return 0;
    }
    let donate_till = parseFloat(document.getElementById("donated2").innerText);

    //adds money to donation list
    donate_till = donate_till + addMoney;
    document.getElementById("donated2").innerText = donate_till;

    //removes money from balance
    const rem_balance = balance - addMoney;
    document.getElementById("balance").innerText = rem_balance;
  });
document
  .getElementById("donate_button")
  .addEventListener("click", function (event) {
    document.getElementById("history").classList.add("hidden");
    document.getElementById("donation_section").classList.remove("hidden");
  });

document
  .getElementById("history_button")
  .addEventListener("click", function (event) {
    document.getElementById("donation_section").classList.add("hidden");
    document.getElementById("history").classList.remove("hidden");
  });
