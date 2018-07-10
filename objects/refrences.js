let myAccount = {
    name: 'Jens Kai',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    
    account.expenses = account.expenses + amount

}

addExpense(myAccount, 2.50);

console.log(myAccount)

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