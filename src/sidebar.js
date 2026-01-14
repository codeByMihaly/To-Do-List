const createSidebar = () => {

    const container = document.getElementById("container");

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

    const footerText = document.createElement("p");
    footerText.id = "footer-text";
    footerText.textContent = "CodeByMihaly";

    divToDo.append(toDo);
    divProject.append(project);

    sidebar.append(divToDo, divProject, footerText);
    container.appendChild(sidebar);

    return sidebar;
}

export default createSidebar;
