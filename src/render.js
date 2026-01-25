import { loadData } from "./data-store.js";

export const renderEmptyToDo = () => {
    const content = document.querySelector(".content");
    if(!content) return;

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

export const renderHeaderProjectName = (projectName) => {
    const headerTitle = document.getElementById("header-h1-id");
    if(headerTitle) {
        headerTitle.textContent = projectName;
    }
};

export const renderProjectToDos = (project) => {
    const content = document.querySelector(".content");
    if (!content)
        return;

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
        const div = document.createElement("div");
        div.classList.add("content-box");
        div.textContent = todo.title;
        content.appendChild(div);
    });
};

export const renderStartState = () => {
    const data = loadData();

    if (!data.activeProjects || Object.keys(data.projects).length === 0) {
        renderEmptyToDo();
        return;
    }

    const project = data.projects[data.activeProjects];

    renderHeaderProjectName(data.activeProjects);
    renderProjectToDos(project);
};