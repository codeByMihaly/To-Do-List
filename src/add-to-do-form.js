import { loadData } from "./data-store.js";

const toDoForm = () => {
    const container = document.getElementById("container");

    const formLayout = document.createElement("div");
    formLayout.classList.add("form-layout");
    formLayout.style.display = "none";

    const formContent = document.createElement("div");
    formContent.classList.add("form-content");

    const formX = document.createElement("div");
    formX.id = "form-x";
    formX.textContent = "X";

    const fieldset = document.createElement("fieldset");
    fieldset.textContent = "Add new";

    const projectNameLabel = document.createElement("label");
    projectNameLabel.textContent = "Project name:";
    projectNameLabel.id = "project-name-label";

    const projectNameInput = document.createElement("input");
    projectNameInput.type = "text";
    projectNameInput.id = "project-name-input";

    const selectLabel = document.createElement("label");
    selectLabel.textContent = "Select project:";
    selectLabel.id = "select-project-label";

    const selectProject = document.createElement("select");
    selectProject.id = "select-project";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title:";
    titleLabel.id = "title-label";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title-input";

    const descLabel = document.createElement("label");
    descLabel.textContent = "Description:";
    const descInput = document.createElement("textarea");
    descInput.id = "desc-input";

    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Due date:";
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "date-input";

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority:";
    const priorityInput = document.createElement("input");
    priorityInput.type = "color";
    priorityInput.id = "priority-input";

    const addBtn = document.createElement("button");
    addBtn.id = "to-do-add-btn";
    addBtn.textContent = "Add";

    formContent.append(
        formX,
        fieldset,
        projectNameLabel,
        projectNameInput,
        selectLabel,
        selectProject,
        titleLabel,
        titleInput,
        descLabel,
        descInput,
        dateLabel,
        dateInput,
        priorityLabel,
        priorityInput,
        addBtn
    );

    formLayout.appendChild(formContent);
    container.appendChild(formLayout);

    return formLayout;
};

export default toDoForm;
