const storageKey = "toDo";

const defaultData = () => ({
    projects: {},
    activeProjects: null,
});

export const loadData = () => {
    const data = localStorage.getItem(storageKey);
    if(!data) {
        return defaultData();
    }

    try {
        const parsed = JSON.parse(data);

        if(!parsed.projects || typeof parsed.projects !== "object") {
            return defaultData();
        }

        return parsed;
    } catch (e) {
        console.error("Failed to parse localStorage data:", e);
        return defaultData();
    }
};

export const saveData = (data) => {
    localStorage.setItem(storageKey, JSON.stringify(data));
};

export const addProject = (data, name, description = "") => {
    if (!name || name.trim() === "")
        return data;

    const trimmedName = name.trim();

    if(data.projects[trimmedName]) {
        return data;
    }

    data.projects[trimmedName] = {
        description,
        todos: [],
    };

    if (!data.activeProjects) {
        data.activeProjects = trimmedName;
    }

    saveData(data);
    return data;
};

export const  addToDoProject = (data, projectName, toDo) => {
    if (!projectName || !data.projects[projectName])
        return data;

    data.projects[projectName].todos.push(toDo);

    saveData(data);
    return data;
};

export const setActiveProjects = (data, projectName) => {
    if (!data.projects[projectName])
        return data;

    data.activeProjects = projectName;
    saveData(data);
    return data;
};

export const deleteProject = (data, projectName) => {
    if (!data.projects[projectName]) return data;

    delete data.projects[projectName];

    if (data.activeProjects === projectName) {
        data.activeProjects = null;
    }

    saveData(data);
    return data;
};
