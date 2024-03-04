const form=document.querySelector('form');
const expense=document.getElementById('expense');
const description=document.getElementById('description');
const selectCategory=document.getElementById('selectCategory');

form.addEventListener('submit',function(event) {
    event.preventDefault();
    let expenseDetails = {
        expense: expense.value,
        description: description.value,
        selectCategory:selectCategory.value
    };
    let expenseDetails_serialized = JSON.stringify(expenseDetails);
    localStorage.setItem(expenseDetails.description, expenseDetails_serialized);

    const listOfExpense=document.getElementById('listOfExpense');
    const listToAdd=document.createElement('li');
    listToAdd.innerHTML=expenseDetails.expense+'-'+expenseDetails.description+'-'+expenseDetails.selectCategory;
    listOfExpense.appendChild(listToAdd);

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete Expense';
    listToAdd.appendChild(delBtn);
    delBtn.onclick = () => {
        localStorage.removeItem(expenseDetails.description);
        listOfExpense.removeChild(listToAdd);
    }

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Expense';
    listToAdd.appendChild(editBtn);
    editBtn.onclick = () => {
        localStorage.removeItem(expenseDetails.description);
        listOfExpense.removeChild(listToAdd);
        expense.value = expenseDetails.expense;
        description.value = expenseDetails.description;
        selectCategory.value = expenseDetails.selectCategory;
    }
    expense.value = '';
    description.value = '';
    selectCategory.value = '';
})