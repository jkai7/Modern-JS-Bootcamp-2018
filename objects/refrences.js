// let myAccount = {
//     name: 'Jens Kai',
//     expenses: 0,
//     income: 0
// }

// let addExpense = function (account, amount) {
    
//     account.expenses = account.expenses + amount

// }

// addExpense(myAccount, 100);

// console.log(myAccount)

//challenge

//3 functions - add income(account, amount), 
//reset account to zero(account), 
//get account summary(current balance, expenses and income )
    // account for jens has $900. $1000 in income. $100 in expenses

//add income
//add expense
//add expense
//get account HTMLSummaryElement
//reset account
//get account summary

//=======My Solution===========

//=======Account================

// let myAccount = {
//     name: 'Jens Kai',
//     expenses: 0,
//     income: 0,
// }

// //=========Add Income==============

// let addIncome = function (account, amount) {
    
//     account.income = account.income + amount

// }

// //=========Add Expense=============

// let addExpense = function (account, amount) {
    
//     account.expenses = account.expenses + amount

// }

// //========Account Summary==============

// let getAccountSummarry = function (account) {

//         accountTotal = account.income - account.expenses

//         return {
            
//             summary: `Account for ${account.name} has $${accountTotal} in it. $${account.income} in income. $${account.expenses} in expenses.`

//         }
    
// }

// //=========Account Reset=============

// let accountReset = function (account) {
    
//     account.expenses = account.expenses * 0
    
//     account.income = account.income * 0

// }

// //========Calling The Function(s)==============

// addIncome(myAccount, 1000);
// console.log(myAccount)

// addExpense(myAccount, 100);
// console.log(myAccount)

// addExpense(myAccount, 500);
// console.log(myAccount)

// let accountSummary = getAccountSummarry(myAccount);
// console.log(accountSummary.summary)

// accountReset(myAccount);
// console.log(myAccount)

// let accountSummary2 = getAccountSummarry(myAccount);
// console.log(accountSummary2.summary)

//==============================================
//========challenge solution diffrences==========
//===============================================

// let accountReset = function (account) {
//     account.expenses = 0
//     account.income = 0
// }

// let getAccountSummarry = function (account) {
//     let accountTotal = account.income - account.expenses
//     return `Account for ${account.name} has $${accountTotal} in it. $${account.income} in income. $${account.expenses} in expenses.`
// }

// addIncome(myAccount, 1000);
// addExpense(myAccount, 2.50);
// addExpense(myAccount, 160);
// console.log(getAccountSummarry(myAccount))
// accountReset(myAccount)
// console.log(getAccountSummarry(myAccount))

//====================================
//=======Correct Solution=============
//====================================

let myAccount = {
    name: 'Ashley Chen',
    expenses: 0,
    income: 0,
}

//=========Add Income==============

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

//=========Add Expense=============

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

//========Account Summary==============

let getAccountSummarry = function (account) {
        let accountTotal = account.income - account.expenses

        return `Account for ${account.name} has $${accountTotal} in it. $${account.income} in income. $${account.expenses} in expenses.`
}

//=========Account Reset=============

let accountReset = function (account) {
    account.expenses = 0
    account.income = 0
}

//========Calling The Function(s)==============

addIncome(myAccount, 2000);

addExpense(myAccount, 5.00);

addExpense(myAccount, 176.23);

console.log(getAccountSummarry(myAccount))

accountReset(myAccount);

console.log(getAccountSummarry(myAccount))
