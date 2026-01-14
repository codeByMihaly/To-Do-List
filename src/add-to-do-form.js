import { priorityFormToggle } from "./to-do-features.js";

const toDoForm = () => {

    const container = document.getElementById("container");

    const formLayout = document.createElement("div");
    formLayout.classList.add("form-layout");

    const formContent = document.createElement("div");
    formContent.classList.add("form-content");

    const formX = document.createElement("div");
    formX.classList.add("form-to-do");
    formX.id = "form-x";
    formX.textContent = "X";

    const form = document.createElement("form");
    form.classList.add("form-to-do");
    form.innerHTML = `
    <fieldset>Your new To Do:</fieldset>

    <label class="labels" for="title">Title:
    <input id="title" type="text" name="Title" required> </label>

    <label class="labels" for="description">Description:
    <input id="description" type="text" name="Description" required> </label>

    <label class="labels" for="due-date">Due-date: 
    <input id="due-date" type="date" name="Due-date" required> </label>

    <label class="labels" for="priority-form">Priority color:
    <input id="priority-form" type="button" name="Priority" value="${priorityFormToggle()}"> </label>

    <button type="submit" id="to-do-add-btn">Add</button>
    `;

    formContent.append(formX, form);

    formLayout.appendChild(formContent);

    container.appendChild(formLayout);

    return formLayout;
}

export default toDoForm;