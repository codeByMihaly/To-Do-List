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
      formLayout.remove();
      });
    }
}