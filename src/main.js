import plusIcon from "./icons/plusIcon.svg";

const createMain = () => {
    const container = document.getElementById("container");

    const main = document.createElement("main");
    main.classList.add("main-class");

    const content = document.createElement("div");
    content.classList.add("content");

    const svg = document.createElement("div");
    svg.id = "plus-svg-icon-id";
    svg.classList.add("plus-svg-icon");
    svg.innerHTML = plusIcon; 

    main.appendChild(svg);
    main.appendChild(content);

    container.appendChild(main);

    return main;
};

export default createMain;
