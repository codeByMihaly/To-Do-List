import snail from "./icons/snail.png";
    
const container = document.getElementById("container");

export function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header-class");

    const h1Header = document.createElement("h1");
    h1Header.id = "header-h1-id";
    h1Header.textContent = "Your To Do List";

    const div = document.createElement("div");
    div.classList.add("header-div");

    const headerIcon = document.createElement("img");
    headerIcon.src = snail;
    headerIcon.alt = "Icon";
    headerIcon.id = "header-icon";

    const username = document.createElement("h3");
    username.id = "username-id";
    username.textContent = "Type here your name!";

    div.append(headerIcon, username);

    header.append(h1Header, div);

    container.append(header);

    return header;
};

export function sidebar() {
    
}