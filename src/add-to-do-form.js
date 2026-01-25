const toDoForm = () => {
    const container = document.getElementById("container");

    const formLayout = document.createElement("div");
    formLayout.classList.add("form-layout");
    formLayout.style.display = "none";

    const form = document.createElement("form");
    form.classList.add("form-content");

    const formX = document.createElement("div");
    formX.id = "form-x";
    formX.textContent = "X";

    const fieldset = document.createElement("fieldset");
    fieldset.textContent = "Add new item";

    const projectNameLabel = document.createElement("label");
    projectNameLabel.id = "project-name-label";
    projectNameLabel.textContent = "Project name:";
    projectNameLabel.style.display = "none";

    const projectNameInput = document.createElement("input");
    projectNameInput.id = "project-name-input";
    projectNameInput.name = "projectName";
    projectNameInput.required = true;
    projectNameInput.style.display = "none";

    const selectProjectLabel = document.createElement("label");
    selectProjectLabel.id = "select-project-label";
    selectProjectLabel.textContent = "Select project:";

    const selectProject = document.createElement("select");
    selectProject.id = "select-project";
    selectProject.name = "selectProject";

    const titleLabel = document.createElement("label");
    titleLabel.id = "title-label";
    titleLabel.textContent = "Title:";

    const titleInput = document.createElement("input");
    titleInput.id = "title-input";
    titleInput.name = "title";
    titleInput.required = true;

    const descriptionLabel = document.createElement("label");
    descriptionLabel.id = "description-label";
    descriptionLabel.textContent = "Description:";

    const descriptionInput = document.createElement("textarea");
    descriptionInput.id = "description";
    descriptionInput.name = "description";
    descriptionInput.required = true;

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due date:";

    const dueDateInput = document.createElement("input");
    dueDateInput.id = "due-date";
    dueDateInput.name = "dueDate";
    dueDateInput.type = "date";
    dueDateInput.required = true;

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority:";

    const priorityInput = document.createElement("input");
    priorityInput.id = "priority-form";
    priorityInput.name = "priority";
    priorityInput.type = "text";
    priorityInput.style.backgroundColor = "green";

    const addBtn = document.createElement("button");
    addBtn.id = "to-do-add-btn";
    addBtn.type = "submit";
    addBtn.textContent = "Add";

    form.append(
        formX,
        fieldset,
        projectNameLabel,
        projectNameInput,
        selectProjectLabel,
        selectProject,
        titleLabel,
        titleInput,
        descriptionLabel,
        descriptionInput,
        dueDateLabel,
        dueDateInput,
        priorityLabel,
        priorityInput,
        addBtn
    );

    formLayout.appendChild(form);
    container.appendChild(formLayout);

    return formLayout;
};

export default toDoForm;
