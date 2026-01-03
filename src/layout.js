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

export function createMain() {
    const main = document.createElement("main");
    main.classList.add("main-class");

    const content = document.createElement("div");
    content.classList.add("content");

    const contentbox1 = document.createElement("div");
    contentbox1.classList.add("content-box");
    contentbox1.textContent = "title:";

    const contentbox2 = document.createElement("div");
    contentbox2.classList.add("content-box");
    contentbox2.textContent = "title:";

    const contentbox3 = document.createElement("div");
    contentbox3.classList.add("content-box");
    contentbox3.textContent = "title:";

    const contentbox4 = document.createElement("div");
    contentbox4.classList.add("content-box");
    contentbox4.textContent = "title:";

    content.append(contentbox1, contentbox2, contentbox3, contentbox4);

    main.appendChild(content);    

    container.appendChild(main);

    return main;
}

export function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer-class");

    const footerPara = document.createElement("p");
    footerPara.id = "footer-para-id";
    footerPara.textContent = "CodeByMihaly";

    footer.appendChild(footerPara);

    container.appendChild(footer);

    return footer;
}