import trash from "./icons/trash-can.png";

export const createToDoCard = (title, description, dueDate, priority) => {
    const card = document.createElement("div");
    card.classList.add("content-box");

    const upper = document.createElement("div");
    upper.classList.add("upper-to-do-part");

    const priorityCircle = document.createElement("div");
    priorityCircle.id = "priority-to-do";
    priorityCircle.style.backgroundColor = priority;

    const deleteBtn = document.createElement("img");
    deleteBtn.src = trash;
    deleteBtn.alt = "trash-icon";
    deleteBtn.id = "delete-to-do-button";

    upper.append(priorityCircle, deleteBtn);

    const middle = document.createElement("div");
    middle.classList.add("middle-to-do-part");

    const titleP = document.createElement("p");
    titleP.textContent = `Title: ${title}`;

    const descP = document.createElement("p");
    descP.textContent = `Description: ${description}`;

    const dateP = document.createElement("p");
    dateP.textContent = `Due Date: ${dueDate}`;

    middle.append(titleP, descP, dateP);

    const bottom = document.createElement("div");
    bottom.classList.add("bottom-to-do-part");

    const editBtn = document.createElement("button");
    editBtn.id = "edit-to-do-button";
    editBtn.textContent = "Edit";

    const doneBtn = document.createElement("button");
    doneBtn.id = "done-to-do-button";
    doneBtn.textContent = "In progress";

    bottom.append(editBtn, doneBtn);

    card.append(upper, middle, bottom);

    deleteBtn.addEventListener("click", () => {
        card.remove();
    });

    doneBtn.addEventListener("click", () => {
        if (doneBtn.textContent === "In progress") {
            doneBtn.textContent = "Done";
            doneBtn.style.backgroundColor = "green";
        } else {
            doneBtn.textContent = "In progress";
            doneBtn.style.backgroundColor = "black";
        }
    });

    doneBtn.addEventListener("mouseenter", () => {
        if (doneBtn.textContent === "In progress") {
            doneBtn.style.backgroundColor = "rgba(0, 0, 0, 0.658)";
        } else if (doneBtn.textContent === "Done") {
            doneBtn.style.backgroundColor = "green";
            doneBtn.style.opacity = "0.7";
        }
    })

    doneBtn.addEventListener("mouseleave", () => {
        if (doneBtn.textContent === "In progress") {
            doneBtn.style.backgroundColor = "black";
            doneBtn.style.opacity = "";
        } else if (doneBtn.textContent === "Done") {
            doneBtn.style.backgroundColor = "green";
            doneBtn.style.opacity = "";
        }
    });

    return card;
};