let myAccount = {
    name: "Jens",
    expenses: 0,
    income: 0
};

//= challenge - add income, reset, get summary

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
};

let addIncome = function (account, amount) {
    account.income = account.income + amount;
};

let accountReset = function (account) {
    account.expenses = 0;
    account.income = 0;
};

let accountSummary = function (account) {
    let accountTotal = account.income - account.expenses;
        return `Account for ${account.name} has $${accountTotal}. $${account.income} in income and $${account.expenses} in expenses.`
};

//income
//expense
//expense
//summary
//reset
//summary

addIncome(myAccount, 1000);
    console.log(myAccount);

addExpense(myAccount, 50);
addExpense(myAccount, 25.70);
    console.log(myAccount);

console.log(accountSummary(myAccount));

accountReset(myAccount);

console.log(accountSummary(myAccount));


