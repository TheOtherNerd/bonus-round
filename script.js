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
  expenses: [],
};

const budgetForm = document.querySelector(".budget-form");
const totalBudget = document.querySelector(".total-budget");
const costForm = document.querySelector(".cost-form");

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  budgetDb.budget = document.querySelector("#amount").value;
  totalBudget.textContent = `Total Weekly Budget: $${budgetDb.budget}`;
});

costForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
