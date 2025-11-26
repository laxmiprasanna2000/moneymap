let expenses = [];

// Select elements
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

// Add Expense
addBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const amount = Number(amountInput.value);
    const category = categoryInput.value;

    if (title === "" || amount <= 0) {
        alert("Please enter valid title and amount");
        return;
    }

    const expense = {
        id: Date.now(),
        title,
        amount,
        category
    };

    expenses.push(expense);
    renderExpenses();
    updateTotal();

    titleInput.value = "";
    amountInput.value = "";
});

// Render Expense List
function renderExpenses() {
    expenseList.innerHTML = "";

    expenses.forEach(exp => {
        const li = document.createElement("li");
        li.classList.add("expense-item");
        li.innerHTML = `
            ${exp.title} - $${exp.amount} <span>(${exp.category})</span>
            <button class="delete-btn" onclick="deleteExpense(${exp.id})">X</button>
        `;
        expenseList.appendChild(li);
    });
}

// Delete Expense
function deleteExpense(id) {
    expenses = expenses.filter(exp => exp.id !== id);
    renderExpenses();
    updateTotal();
}

// Update Total Amount
function updateTotal() {
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    totalAmount.textContent = total;
}
