// The header of the main site.

import snail from "./icons/snail.png";
import { loadData, saveData } from "./data-store.js";

const createHeader = () => {

    const container = document.getElementById("container");

    const header = document.createElement("header");
    header.classList.add("header-class");

    const h1Header = document.createElement("h1");
    h1Header.id = "header-h1-id";
    h1Header.textContent = "Your To Do List";

    const projectDesc = document.createElement("p");
    projectDesc.id = "header-project-description";
    projectDesc.textContent = "";

    const div = document.createElement("div");
    div.classList.add("header-div");

    const headerIcon = document.createElement("img");
    headerIcon.src = snail;
    headerIcon.alt = "Icon";
    headerIcon.id = "header-icon";

    const usernameDiv = document.createElement("h3");
    usernameDiv.id = "usernameDiv-id";

    const data = loadData();

    const username = document.createElement("h3");
    username.id = "username-id";
    username.textContent = data.username || "Type your name here!";

    // When page is refreshed this is the value what will be there.

    if (data.username && data.username !== "Type your name here!") {
        usernameDiv.textContent = "Hello ";
    } else {
        usernameDiv.textContent = "";
    }

    // Username input with some css and data store.

    username.addEventListener("click", () => {
        const currentData = loadData();

        if (document.getElementById("username-id-input"))
            return;

        const input = document.createElement("input");
        input.type = "text";
        input.value = username.textContent;
        input.id = "username-id-input";

        username.style.display = "none";
        username.parentNode.insertBefore(input, username);

        let finished = false;

        const finish = () => {
            if (finished) return;
            finished = true;
            
            const newUsername = input.value.trim() || "Type your name here!";
            username.textContent = newUsername;

            if(currentData.username !== newUsername) {
                currentData.username = newUsername;
                saveData(currentData);
            }

            if (newUsername === "Type your name here!") {
                usernameDiv.textContent = "";
            } else {
                usernameDiv.textContent = "Hello ";
            }

            input.remove();
            username.style.display = "block";
        }

        input.addEventListener("blur", finish);
        input.addEventListener("keydown", (e) => {      // Working with Enter key.
            if (e.key === "Enter")
            finish();
        })
    })

    div.append(headerIcon, usernameDiv, username);

    header.append(h1Header, projectDesc, div);

    container.appendChild(header);

    return header;
};

export default createHeader;