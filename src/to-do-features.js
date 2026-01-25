import { loadData } from "./data-store.js";

export const priorityFormToggle = (color = "green") => {

    const priorityForm = document.getElementById("priority-form");

    if (priorityForm) {
        priorityForm.value = "";
        priorityForm.style.backgroundColor = color;

        priorityForm.onclick = () => {
            if(priorityForm.style.backgroundColor === "green") {
                priorityForm.value = "";
                priorityForm.style.backgroundColor = "orange";
            } else if (priorityForm.style.backgroundColor === "orange") {
                priorityForm.value = "";
                priorityForm.style.backgroundColor = "red";
            } else if (priorityForm.style.backgroundColor === "red") {
                priorityForm.value = "";
                priorityForm.style.backgroundColor = "green";
            };
        };
    };

}

export const toDoFormX = () => {

   const formLayout = document.querySelector(".form-layout")
   const formX = document.getElementById("form-x");

   if (formLayout && formX) {
      formX.addEventListener("click", () => {
      formLayout.style.display = "none";
      });
    }
}

export const openAddNewToDo = () => {
    
    const openToDo = document.getElementById("plus-svg-icon-id");

    if (openToDo) {
        openToDo.addEventListener("click", () => {

            const form = document.querySelector("form"); 
            if (form) form.reset(); 
            
            const priority = document.getElementById("priority-form"); 
            if (priority) 
                priority.style.backgroundColor = "green";

            const formLayout = document.querySelector(".form-layout");
            if(!formLayout)
                return;
            
            const data = loadData();

            if(Object.keys(data.projects).length === 0) {
                setFormMode("project");
            } else {
                setFormMode("todo");
            }

            formLayout.style.display = "";
        })
    }
}


export const setFormMode = (mode = "todo") => {
    const projectNameLabel = document.getElementById("project-name-label");
    const projectNameInput = document.getElementById("project-name-input");

    const selectLabel = document.getElementById("select-project-label");
    const selectProject = document.getElementById("select-project");

    const titleLabel = document.getElementById("title-label");
    const titleInput = document.getElementById("title-input");

    const descriptionLabel = document.getElementById("description-label"); 
    const descriptionInput = document.getElementById("description"); 
    
    const dueDateInput = document.getElementById("due-date"); 
    const priorityInput = document.getElementById("priority-form");

    const data = loadData();

    if (mode === "project") {
        projectNameLabel.style.display = "block";
        projectNameInput.style.display = "block";

        selectLabel.style.display = "none";
        selectProject.style.display = "none";

        titleLabel.style.display = "none";
        titleInput.style.display = "none";

        descriptionLabel.style.display = "block"; 
        descriptionInput.style.display = "block"; 

        dueDateInput.disabled = true; 
        dueDateInput.style.opacity = "0.4";
        priorityInput.style.display = "none";
        priorityInput.disabled = true;

        return;
    }


    projectNameLabel.style.display = "none";
    projectNameInput.style.display = "none";

    selectLabel.style.display = "block";
    selectProject.style.display = "block";

    titleLabel.style.display = "block";
    titleInput.style.display = "block";

    descriptionLabel.style.display = "block"; 
    descriptionInput.style.display = "block"; 
    
    dueDateInput.style.display = "block"; 
    dueDateInput.disabled = false;
     dueDateInput.style.opacity = "1";
    priorityInput.style.display = "block";
    priorityInput.disabled = false;

    selectProject.innerHTML = "";

    Object.keys(data.projects).forEach(name => {
        const opt = document.createElement("option");
        opt.value = name;
        opt.textContent = name;
        selectProject.appendChild(opt);
    });

    const newOpt = document.createElement("option");
    newOpt.value = "__new__";
    newOpt.textContent = "New project";
    selectProject.appendChild(newOpt);

    selectProject.onchange = () => { 
        if (selectProject.value === "__new__") { 
            
            const form = document.querySelector("form"); 
            if (form) 
                form.reset(); 
            
            setFormMode("project"); 
        } 
    };
};