import toDoForm from "./add-to-do-form.js";
import { loadData } from "./data-store.js";

export const priorityFormToggle = (color = "green") => {

    const priorityForm = document.getElementById("priority-form");

    if (priorityForm) {
        priorityForm.value = "";
        priorityForm.style.backgroundColor = color;

        priorityForm.addEventListener("click", () => {
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
        });
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

    const titleLabel = document.getElementById("title-input");
    const titleInput = document.getElementById("title-input");

    const data = loadData();

    if (mode === "project") {
        projectNameLabel.style.display = "block";
        projectNameInput.style.display = "block";

        selectLabel.style.display = "none";
        selectProject.style.display = "none";

        titleLabel.style.display = "none";
        titleInput.style.display = "none";

        return;
    }


    projectNameLabel.style.display = "none";
    projectNameInput.style.display = "none";

    selectLabel.style.display = "block";
    selectProject.style.display = "block";

    titleLabel.style.display = "block";
    titleInput.style.display = "block";

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

    selectProject.addEventListener("change", () => {
        if (selectProject.value === "__new__") {
            setFormMode("project");
        }
    });
};
