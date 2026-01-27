import { loadData, setActiveProjects, saveData } from "./data-store.js";
import { renderHeaderProjectName, renderProjectToDos, renderEmptyToDo } from "./render.js";

const createSidebar = () => {
    const container = document.getElementById("container");

    const sidebar = document.createElement("section");
    sidebar.classList.add("sidebar-class");

    const projectSection = document.createElement("div");
    projectSection.classList.add("project-section");
    projectSection.id = "project-section";
    projectSection.textContent = "Projects";

    const projectList = document.createElement("div");
    projectList.id = "project-list";

    projectSection.appendChild(projectList);

    const footerText = document.createElement("p");
    footerText.id = "footer-text";
    footerText.textContent = "CodeByMihaly";

    sidebar.append(projectSection, footerText);
    container.appendChild(sidebar);

    renderSidebarProjects();

    return sidebar;
};

export default createSidebar;

export const renderSidebarProjects = () => {
    const data = loadData();
    const projectList = document.getElementById("project-list");

    if (!projectList) return;

    projectList.innerHTML = "";

    const projectNames = Object.keys(data.projects);

    if (projectNames.length === 0) {
        projectList.innerHTML = `
            <p style="opacity: 0.6; margin-top: 1em; text-align: center;"> No projects yet </p>
        `;
        return;
    }

    projectNames.forEach(name => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("project-wrapper");

        const item = document.createElement("div");
        item.classList.add("project-class");
        item.textContent = name;

        if (data.activeProjects === name) {
            item.style.fontWeight = "800";
            item.style.textDecoration = "underline";
            item.style.cursor = "pointer";
        } else {
            item.style.fontStyle = "italic";
            item.style.cursor = "pointer";
        }

        const del = document.createElement("span");
        del.textContent = "✖";
        del.classList.add("delete-project-btn");

        item.addEventListener("click", () => {
            setActiveProjects(loadData(), name);

            const freshData = loadData();
            renderHeaderProjectName(name, freshData.projects[name].description);
            renderProjectToDos(freshData.projects[name]);
            renderSidebarProjects();
        });

        del.addEventListener("click", (e) => {
            e.stopPropagation();

            const data = loadData();
            delete data.projects[name];

            const remaining = Object.keys(data.projects);

            if (remaining.length === 0) {
                data.activeProjects = null;
                saveData(data);

                renderSidebarProjects();
                renderHeaderProjectName("Your To Do List", "");
                renderEmptyToDo();
                return;
            }

            if (data.activeProjects === name) {
                data.activeProjects = remaining[0];
            }

            saveData(data);

            const fresh = loadData();
            renderSidebarProjects();

            const active = fresh.activeProjects;
            renderHeaderProjectName(active, fresh.projects[active].description);
            renderProjectToDos(fresh.projects[active]);
        });

        wrapper.append(item, del);
        projectList.appendChild(wrapper);
    });
};
