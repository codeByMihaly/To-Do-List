import { loadData, saveData } from "./data-store.js";
import { renderSidebarProjects } from "./sidebar.js";
import { renderHeaderProjectName, renderProjectToDos } from "./render.js";

let editMode = false;
let editInfo = null;

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

        if (editMode && editInfo) {
            const { projectName: oldProject, index } = editInfo;
            let newProject = selectProject.value;

            if (newProject === "__new__") {
                const newProjectName = projectNameInput.value.trim();
                if (!newProjectName) return;

                data.projects[newProjectName] = {
                    description: "",
                    todos: []
                };

                newProject = newProjectName;
                data.activeProjects = newProjectName;
            }

            const updatedTodo = {
                title: titleInput.value.trim(),
                description: descriptionInput.value.trim(),
                dueDate: dueDateInput.value,
                priority: priorityInput.style.backgroundColor,
                done: data.projects[oldProject].todos[index].done
            };

            if (oldProject === newProject) {
                data.projects[oldProject].todos[index] = updatedTodo;
            } else {
                data.projects[oldProject].todos.splice(index, 1);
                data.projects[newProject].todos.push(updatedTodo);
                data.activeProjects = newProject;
            }

            saveData(data);

            renderSidebarProjects();
            renderHeaderProjectName(
                data.activeProjects,
                data.projects[data.activeProjects].description
            );
            renderProjectToDos(data.projects[data.activeProjects]);

            editMode = false;
            editInfo = null;

            closeForm();
            return;
        }


        if (projectNameInput.style.display === "block" && selectProject.style.display === "none") {
            const newProjectName = projectNameInput.value.trim();
            const newProjectDesc = descriptionInput.value.trim();

            if (!newProjectName) return;

            data.projects[newProjectName] = {
                description: newProjectDesc,
                todos: []
            };

            data.activeProjects = newProjectName;

            saveData(data);

            renderSidebarProjects();
            renderHeaderProjectName(newProjectName, newProjectDesc);
            renderProjectToDos(data.projects[newProjectName]);

            closeForm();
            return;
        }

        let selectedProject = selectProject.value;

        if (selectedProject === "__new__") {
            const newProjectName = projectNameInput.value.trim();
            const newProjectDesc = descriptionInput.value.trim();

            if (!newProjectName) return;

            data.projects[newProjectName] = {
                description: newProjectDesc,
                todos: []
            };

            selectedProject = newProjectName;
            data.activeProjects = newProjectName;
        }

        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();
        const dueDate = dueDateInput.value;
        const priority = priorityInput.style.backgroundColor;

        if (!selectedProject || !title) return;

        const todoObj = {
            title,
            description,
            dueDate,
            priority,
            done: false
        };

        data.projects[selectedProject].todos.push(todoObj);
        data.activeProjects = selectedProject;

        saveData(data);

        renderSidebarProjects();
        renderHeaderProjectName(
            selectedProject,
            data.projects[selectedProject].description
        );
        renderProjectToDos(data.projects[selectedProject]);

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

    document.getElementById("to-do-add-btn").textContent = "Add";
};

export default addToDo;

export const startEditMode = (projectName, index, todo) => {
    editMode = true;
    editInfo = { projectName, index };

    const formLayout = document.querySelector(".form-layout");
    formLayout.style.display = "";

    const form = document.querySelector("form");
    form.reset();

    import("./to-do-features.js").then(module => {
        module.setFormMode("todo");

        document.getElementById("select-project").value = projectName;
        document.getElementById("title-input").value = todo.title;
        document.getElementById("description").value = todo.description;
        document.getElementById("due-date").value = todo.dueDate;
        document.getElementById("priority-form").style.backgroundColor = todo.priority;

        document.getElementById("to-do-add-btn").textContent = "Save";
    });
};
