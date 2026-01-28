// It's the todo form UI in JS. Made some inline css and "required" rules.

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
    fieldset.style.fontWeight = "800";
    fieldset.style.fontFamily = "system-ui";

    const projectNameLabel = document.createElement("label");
    projectNameLabel.id = "project-name-label";
    projectNameLabel.textContent = "Project name:";
    projectNameLabel.style.display = "none";
    projectNameLabel.style.fontWeight = "800";
    projectNameLabel.style.fontFamily = "system-ui";

    const projectNameInput = document.createElement("input");
    projectNameInput.id = "project-name-input";
    projectNameInput.name = "projectName";
    projectNameInput.style.display = "none";
    projectNameInput.style.fontFamily = "system-ui";

    const selectProjectLabel = document.createElement("label");
    selectProjectLabel.id = "select-project-label";
    selectProjectLabel.textContent = "Select project:";
    selectProjectLabel.style.fontWeight = "800";
    selectProjectLabel.style.fontFamily = "system-ui";

    const selectProject = document.createElement("select");
    selectProject.id = "select-project";
    selectProject.name = "selectProject";
    selectProject.style.fontFamily = "system-ui";

    const titleLabel = document.createElement("label");
    titleLabel.id = "title-label";
    titleLabel.textContent = "Title:";
    titleLabel.style.fontWeight = "800";
    titleLabel.style.fontFamily = "system-ui";

    const titleInput = document.createElement("input");
    titleInput.id = "title-input";
    titleInput.name = "title";
    titleInput.required = true;
    titleInput.style.fontFamily = "system-ui";

    const descriptionLabel = document.createElement("label");
    descriptionLabel.for = "description";
    descriptionLabel.id = "description-label";
    descriptionLabel.textContent = "Description:";
    descriptionLabel.style.fontWeight = "800";
    descriptionLabel.style.fontFamily = "system-ui";

    const descriptionInput = document.createElement("textarea");
    descriptionInput.id = "description";
    descriptionInput.name = "description";
    descriptionInput.required = true;
    descriptionInput.style.fontFamily = "system-ui";

    const dueDateLabel = document.createElement("label");
    dueDateLabel.id = "due-date-label";
    dueDateLabel.textContent = "Due date:";
    dueDateLabel.style.fontWeight = "800";
    dueDateLabel.style.fontFamily = "system-ui";

    const dueDateInput = document.createElement("input");
    dueDateInput.id = "due-date";
    dueDateInput.name = "dueDate";
    dueDateInput.type = "date";
    dueDateInput.required = true;
    dueDateInput.style.fontFamily = "system-ui";

    const priorityLabel = document.createElement("label");
    priorityLabel.id = "priority-label";
    priorityLabel.textContent = "Priority:";

    const priorityInput = document.createElement("div");
    priorityInput.id = "priority-form";
    priorityInput.name = "priority";
    priorityInput.type = "text";
    priorityInput.style.backgroundColor = "green";
    priorityInput.disabled = true;

    const addBtn = document.createElement("button");
    addBtn.id = "to-do-add-btn";
    addBtn.type = "submit";
    addBtn.textContent = "Add";
    addBtn.style.fontWeight = "800";
    addBtn.style.fontFamily = "system-ui";

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