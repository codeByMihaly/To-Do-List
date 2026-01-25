import { loadData, setActiveProjects } from "./data-store.js";
import { renderHeaderProjectName, renderProjectToDos } from "./render";

const createSidebar = () => {

    const container = document.getElementById("container");

    const sidebar = document.createElement("section");
    sidebar.classList.add("sidebar-class");

    const projectSection = document.createElement("div");
    projectSection.classList.add("project-section")
    projectSection.textContent = "Projects";

    const projectList = document.createElement("div");
    projectList.id = "project-list"

    projectSection.appendChild(projectList);

    const footerText = document.createElement("p");
    footerText.id = "footer-text";
    footerText.textContent = "CodeByMihaly";

    sidebar.append(projectSection, footerText);
    container.appendChild(sidebar);

    renderSidebarProjects();

    return sidebar;
}

export default createSidebar;


export const renderSidebarProjects = () => {
    const data = loadData();
    const projectList = document.getElementById("project-list");

    if (!projectList)
        return;

    projectList.innerHTML = "";
    
    const projectNames = Object.keys(data.projects);

    if (projectNames.length === 0) {
        projectList.innerHTML = `
            <p style="opacity: 0.6; margin-top: 1em;"> No projects yet </p>
        `;
        return;
    }

    projectNames.forEach(name => {
        const item = document.createElement("div");
        item.classList.add("project-class");
        item.textContent = name;

        if (data.activeProjects === name) {
            item.style.fontWeight = "800";
            item.style.textDecoration = "underline";
        }

        item.addEventListener("click", () => {
            const updated = setActiveProjects(data, name);

            renderHeaderProjectName(name);
            renderProjectToDos(updated.projects[name]);
            renderSidebarProjects();
        });

        projectList.appendChild(item);
    });
};