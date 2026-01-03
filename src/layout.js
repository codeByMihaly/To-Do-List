import snail from "./icons/snail.png";
    
const container = document.getElementById("container");

export function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header-class");

    const h1Header = document.createElement("h1");
    h1Header.id = "header-h1-id";
    h1Header.textContent = "Your To Do List";

    const div = document.createElement("div");
    div.classList.add("header-div");

    const headerIcon = document.createElement("img");
    headerIcon.src = snail;
    headerIcon.alt = "Icon";
    headerIcon.id = "header-icon";

    const username = document.createElement("h3");
    username.id = "username-id";
    username.textContent = "Type here your name!";

    div.append(headerIcon, username);

    header.append(h1Header, div);

    container.appendChild(header);

    return header;
};

export function createSidebar() {
    const sidebar = document.createElement("section");
    sidebar.classList.add("sidebar-class");

    const divToDo = document.createElement("div");
    divToDo.classList.add("to-do-section");
    divToDo.textContent = "To-do section";

    const toDo = document.createElement("div");
    toDo.classList.add("to-do-class");
    toDo.textContent = "some todo";

    const divProject = document.createElement("div");
    divProject.classList.add("project-section");
    divProject.textContent = "Project section";

    const project = document.createElement("div");
    project.classList.add("project-class");
    project.textContent = "some project";

    divToDo.append(toDo);
    divProject.append(project);

    sidebar.append(divToDo, divProject);
    container.appendChild(sidebar);

    return sidebar;
}