// database

// budget form event SUBMIT listener

// expense form event SUBMIT listener (calls createTable)

// delete button / clear button CLICK listener (calls createTable)

// createTable function (loops through expenses)

const budgetDb = {
  budget: 0,
  balanceLeft: 0,
  totalSpent: 0,
  bills: 0,
  food: 0,
  clothing: 0,
  entertainment: 0,
  expenses: [{ item: "Item", category: "Category", cost: "Cost" }],
};

const budgetForm = document.querySelector(".budget-form");
const totalBudget = document.querySelector(".total-budget");
const costForm = document.querySelector(".cost-form");
const expensesContainer = document.querySelector(".expenses-container");
const totalSpent = document.querySelector(".total-spent");
const billsParagraph = document.querySelector(".bills-paragraph");
const foodParagraph = document.querySelector(".food-paragraph");
const clothingParagraph = document.querySelector(".clothing-paragraph");
const entertainmentParagraph = document.querySelector(
  ".entertainment-paragraph"
);
const alertContainer = document.querySelector(".alert-container");
const close = document.querySelector(".close");

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  budgetDb.budget = document.querySelector("#amount").value;
  budgetDb.balanceLeft = budgetDb.budget;
  totalBudget.textContent = `Total Weekly Budget: $${budgetDb.balanceLeft}`;
  budgetForm.classList.add("hide");
});

costForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let item = document.querySelector("#item").value;
  let category = document.querySelector("#category").value;
  let cost = document.querySelector("#cost").value;
  cost = parseInt(cost);
  let newExpense = { item, category, cost };
  budgetDb.expenses.push(newExpense);
  displayExpenses();
  budgetDb.balanceLeft = budgetDb.balanceLeft - newExpense.cost;
  totalBudget.textContent = `Total Weekly Budget: $${budgetDb.balanceLeft}`;
  budgetDb.totalSpent = budgetDb.totalSpent + newExpense.cost;
  totalSpent.textContent = `Total Spent this Week: $${budgetDb.totalSpent}`;
  // if (newExpense.category === "bills") {
  //   budgetDb.bills = budgetDb.bills + newExpense.cost;
  //   billsParagraph.textContent = `Total Spent on Bills: $${budgetDb.bills}`;
  // } else if (newExpense.category === "food") {
  //   budgetDb.food = budgetDb.food + newExpense.cost;
  //   foodParagraph.textContent = `Total Spent on Food: $${budgetDb.food}`;
  // } else if (newExpense.category === "clothing") {
  //   budgetDb.clothing = budgetDb.clothing + newExpense.cost;
  //   clothingParagraph.textContent = `Total Spent on Clothing: $${budgetDb.clothing}`;
  // } else {
  //   budgetDb.entertainment = budgetDb.entertainment + newExpense.cost;
  //   entertainmentParagraph.textContent = `Total Spent on Entertainment: $${budgetDb.entertainment}`;
  // }
  budgetDb[category] += cost;
  document.querySelector(
    `.${category}-paragraph`
  ).textContent = `Total Spent on ${toTitleCase(category)}: $${
    budgetDb[category]
  }`;

  if (budgetDb.balanceLeft < newExpense.cost) {
    // alert("Out of money!");
    alertContainer.classList.remove("hide");
  }
});

const displayExpenses = () => {
  expensesContainer.textContent = "";
  budgetDb.expenses.forEach((expense) => {
    const expenseEntry = document.createElement("tr");
    const expenseItem = document.createElement("td");
    const expenseCategory = document.createElement("td");
    const expenseCost = document.createElement("td");
    // const button = document.createElement("button");
    // button.setAttribute("data-index", index);
    // button.textContent = "delete";
    // button.classList.add("delete");
    expenseItem.textContent = expense.item;
    expenseCategory.textContent = expense.category;
    expenseCost.textContent = expense.cost;
    expenseEntry.classList.add("expense-entry");
    expensesContainer.append(expenseEntry);
    expenseEntry.append(expenseItem, expenseCategory, expenseCost);
  });
};

displayExpenses();

close.addEventListener("click", (e) => {
  alertContainer.classList.add("hide");
});
