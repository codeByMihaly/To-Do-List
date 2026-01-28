// Index JS.

import "./template.html";
import "./styles.css";
import createHeader from "./header.js";
import createSidebar from "./sidebar.js";
import createMain from "./main.js";
import toDoForm from "./add-to-do-form.js";
import addToDo from "./create-new-to-do.js";
import { priorityFormToggle, toDoFormX, openAddNewToDo } from "./to-do-features.js";
import { renderStartState } from "./render.js";

createHeader();
createSidebar();
createMain();

toDoForm();     
addToDo();         
priorityFormToggle(); 
toDoFormX();    
openAddNewToDo();        

renderStartState();