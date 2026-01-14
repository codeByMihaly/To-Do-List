import "./template.html";
import "./styles.css";
import  createHeader  from "./header.js";
import  createSidebar  from "./sidebar.js";
import  createMain  from "./main.js";
import toDoForm from "./add-to-do-form.js";
import newTodo from "./create-new-to-do.js";
import {deleteToDo, doneToggle, priorityFormToggle, toDoFormX} from "./to-do-features.js";
import addToDo from "./create-new-to-do.js";


createHeader();
createSidebar();
createMain();
deleteToDo();
doneToggle();
newTodo();
toDoForm();
priorityFormToggle();
toDoFormX();
addToDo();