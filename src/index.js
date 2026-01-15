import "./template.html";
import "./styles.css";
import createHeader from "./header.js";
import createSidebar from "./sidebar.js";
import createMain from "./main.js";
import toDoForm from "./add-to-do-form.js";
import addToDo from "./create-new-to-do.js";
import { priorityFormToggle, toDoFormX } from "./to-do-features.js";

createHeader();
createSidebar();
createMain();

toDoForm();         
priorityFormToggle(); 
toDoFormX();         
addToDo();        
