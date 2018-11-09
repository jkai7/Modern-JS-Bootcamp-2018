// CHALLEGE #1 - expense has discription and amount. Create 2 methods - addExpense(desc, amount), getAccountSummary - total up all expenses "X has X in expenses"

// CHALLEGE #2 - add an income array, set up an addIncome(desc, amount) method, tweak get account summary - "X has a balance of X, X in income and X in expenses"
const account = {
    name: "Jens Kai",
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description, 
            amount: amount
        });// pushes object into array
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description, 
            amount: amount
        });
    },
    getExpenseSummary: function () {
       let totalExpenses = 0
       let totalIncome = 0
       let balance = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount// loops through array adding the amounts to total
        })

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        balance = totalIncome - totalExpenses

            return `${this.name} has a balance of $${balance}. $${totalIncome} in income and $${totalExpenses} in expenses.`
    }
};

account.addExpense("rent", 950);
account.addExpense("coffee", 2);

account.addIncome("job", 1000)

// console.log("============================")

// console.log(account.expenses)

// console.log("============================")

console.log(account.getExpenseSummary());

// for (let count = 0; count < account.expenses.length; count++) {
//     console.log(account.expenses[count].amount)
//     }; 



