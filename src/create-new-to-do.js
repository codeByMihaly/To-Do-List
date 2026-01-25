import { loadData, saveData, setActiveProjects } from "./data-store.js";
import { renderSidebarProjects } from "./sidebar.js";
import { renderHeaderProjectName, renderProjectToDos } from "./render.js";

const addToDo = () => {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const data = loadData();

        const projectNameInput = document.getElementById("project-name-input");
        const selectProject = document.getElementById("select-project");

        const titleInput = document.getElementById("title-input");
        const descriptionInput = document.getElementById("description");
        const dueDateInput = document.getElementById("due-date");
        const priorityInput = document.getElementById("priority-form");

        let activeProject = data.activeProjects;

        if (projectNameInput.style.display === "block") {
            const newProjectName = projectNameInput.value.trim();
            const newProjectDesc = descriptionInput.value.trim();

            if (!newProjectName) return;

            data.projects[newProjectName] = {
                description: newProjectDesc,
                todos: []
            };

            activeProject = newProjectName;
            data.activeProjects = newProjectName;

            saveData(data);

            renderSidebarProjects();
            renderHeaderProjectName(newProjectName);
            renderProjectToDos([]);

            closeForm();
            return;
        }

        const selectedProject = selectProject.value;
        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();
        const dueDate = dueDateInput.value;
        const priority = priorityInput.style.backgroundColor;

        if (!selectedProject || !title) return;

        const targetProject = selectedProject;
        const todoObj = {
            title,
            description,
            dueDate,
            priority,
            done: false
        };

        data.projects[targetProject].todos.push(todoObj);
        data.activeProjects = targetProject;

        saveData(data);

        renderSidebarProjects();
        renderHeaderProjectName(targetProject);
        renderProjectToDos(data.projects[targetProject].todos);

        closeForm();
    });
};

const closeForm = () => {
    const formLayout = document.querySelector(".form-layout");
    if (formLayout) formLayout.style.display = "none";

    const form = document.querySelector("form");
    if (form) form.reset();

    const priority = document.getElementById("priority-form");
    if (priority) priority.style.backgroundColor = "green";
};

export default addToDo;
