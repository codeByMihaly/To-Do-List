import { loadData } from "./data-store.js";
import { createToDoCard } from "./create-card.js";

export const renderEmptyToDo = () => {
    const content = document.querySelector(".content");
    if (!content) return;

    content.innerHTML = `
        <div style="
            width: 100%;
            text-align: center;
            margin-top: 5em;
            font-size: 2rem;
            font-weight: 800;
            color: rgba(0, 0, 0, 0.6);
        ">
            Make a new project!
        </div>
    `;
};

export const renderHeaderProjectName = (projectName, description = "") => {
    const headerTitle = document.getElementById("header-h1-id");
    const headerDesc = document.getElementById("header-project-description");

    if (headerTitle) headerTitle.textContent = projectName;
    if (headerDesc) headerDesc.textContent = description;
};

export const renderProjectToDos = (project) => {
    const content = document.querySelector(".content");
    if (!content) return;

    content.innerHTML = "";

    if (!project || !project.todos || project.todos.length === 0) {
        content.innerHTML = `
            <div style="
                width: 100%;
                text-align: center;
                margin-top: 5em;
                font-size: 1.5rem;
                color: rgba(0, 0, 0, 0.5);
            ">
                No tasks yet!
            </div>
        `;
        return;
    }

    project.todos.forEach(todo => {
        const card = createToDoCard(
            todo.title,
            todo.description,
            todo.dueDate,
            todo.priority,
            todo.done
        );

        content.appendChild(card);
    });
};

export const renderStartState = () => {
    const data = loadData();

    if (!data.activeProjects || Object.keys(data.projects).length === 0) {
        renderHeaderProjectName("Your To Do List", "");
        renderEmptyToDo();
        return;
    }

    const project = data.projects[data.activeProjects];

    renderHeaderProjectName(data.activeProjects, project.description);
    renderProjectToDos(project);
};
