const addToDo = () => {
    
    const toDoAddBtn = document.getElementById("to-do-add-btn");
    const toDoTitle = document.getElementById("title");
    const toDoDescription = document.getElementById("description");
    const toDoDueDate = document.getElementById("due-date");
    const toDoPriority = document.getElementById("priority-form");

    const priorityContent = document.getElementById("priority-to-do");
    const titleContent = document.getElementById("title-to-do");
    const descriptionContent = document.getElementById("description-to-do");
    const dueDateContent = document.getElementById("due-date-to-do");



    if(toDoAddBtn && toDoTitle && toDoDescription && toDoDueDate && toDoPriority) {
        toDoAddBtn.addEventListener("click", (e) => {
            e.preventDefault();

            titleContent.textContent = `Title: ${toDoTitle.value}`;
            descriptionContent.textContent = `Description: ${toDoDescription.value}`;
            dueDateContent.textContent = `Due Date: ${toDoDueDate.value}`;
            priorityContent.style.backgroundColor = toDoPriority.style.backgroundColor;

         })
        }
       
}

export default addToDo;
