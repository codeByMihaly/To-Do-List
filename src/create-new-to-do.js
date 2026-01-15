import { createToDoCard } from "./create-card.js";

const addToDo = () => {
    const toDoAddBtn = document.getElementById("to-do-add-btn");

    if (!toDoAddBtn) return;

    toDoAddBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const toDoTitle = document.getElementById("title");
        const toDoDescription = document.getElementById("description");
        const toDoDueDate = document.getElementById("due-date");
        const toDoPriority = document.getElementById("priority-form");

        const contentContainer = document.querySelector(".content");
        if (!contentContainer) return;

        const newCard = createToDoCard(
            toDoTitle.value,
            toDoDescription.value,
            toDoDueDate.value,
            toDoPriority.style.backgroundColor || "green"
        );

        contentContainer.appendChild(newCard);
    });
};

export default addToDo;
