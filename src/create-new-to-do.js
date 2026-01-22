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

        console.log("title" , toDoTitle.value);
        console.log("toDoDescription" , toDoDescription.value);
        console.log("toDoDueDate" , toDoDueDate.value);

        if (!toDoTitle.value === "" || !toDoDescription.value === "" || toDoDueDate.value === "") {
            return;
        }

        const contentContainer = document.querySelector(".content");
        if (!contentContainer) return;

        const newCard = createToDoCard(
            toDoTitle.value,
            toDoDescription.value,
            toDoDueDate.value,
            toDoPriority.style.backgroundColor || "green"
        );

        contentContainer.appendChild(newCard);

            toDoTitle.value = "",
            toDoDescription.value = "",
            toDoDueDate.value = "",
            toDoPriority.style.backgroundColor = "green";

            const formLayout = document.querySelector(".form-layout");
            if(formLayout) {
                formLayout.style.display = "none";
            }
    });
};

export default addToDo;