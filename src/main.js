import trash from "./icons/trash-can.png";

const createMain= () => {

    const container = document.getElementById("container");

    const main = document.createElement("main");
    main.classList.add("main-class");

    const content = document.createElement("div");
    content.classList.add("content");

    const upperToDoPart = document.createElement("div");
    upperToDoPart.classList.add("upper-to-do-part");

    const priority = document.createElement("div");
    priority.id = "priority-to-do";

    const deleteToDoButton = document.createElement("img");
    deleteToDoButton.id = "delete-to-do-button";
    deleteToDoButton.src = trash;
    deleteToDoButton.alt = "trash-icon";

    const contentBox1 = document.createElement("div");
    contentBox1.classList.add("content-box");

    const middleToDoPart = document.createElement("div");
    middleToDoPart.classList.add("middle-to-do-part");

    const titleContent = document.createElement("p");
    titleContent.id = "title-to-do"
    titleContent.textContent = "Title: ";
    const descriptionContent = document.createElement("p");
    descriptionContent.id = "description-to-do";
    descriptionContent.textContent = "Description: ";
    const dueDateContent = document.createElement("p");
    dueDateContent.id = "due-date-to-do";
    dueDateContent.textContent = "Due Date: ";

    const bottomToDoPart = document.createElement("div");
    bottomToDoPart.classList.add("bottom-to-do-part");

    const editToDoButton = document.createElement("button");
    editToDoButton.id = "edit-to-do-button";
    editToDoButton.textContent = "Edit";

    const doneToDoButton = document.createElement("button");
    doneToDoButton.id = "done-to-do-button";
    doneToDoButton.textContent = "In progress";

    upperToDoPart.append(priority, deleteToDoButton);

    bottomToDoPart.append(editToDoButton, doneToDoButton);

    middleToDoPart.append(titleContent, descriptionContent, dueDateContent);

    contentBox1.append(
        upperToDoPart,
        middleToDoPart,
        bottomToDoPart
    );

    const contentbox2 = document.createElement("div");
    contentbox2.classList.add("content-box");
    contentbox2.textContent = "title:";

    const contentbox3 = document.createElement("div");
    contentbox3.classList.add("content-box");
    contentbox3.textContent = "title:";

    const contentbox4 = document.createElement("div");
    contentbox4.classList.add("content-box");
    contentbox4.textContent = "title:";

    content.append(contentBox1, contentbox2, contentbox3, contentbox4);

    main.appendChild(content);    

    container.appendChild(main);

    return main;
}

export default createMain;