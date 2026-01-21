import plusIcon from "./icons/plusIcon.svg";

const createMain = () => {
    const container = document.getElementById("container");

    const main = document.createElement("main");
    main.classList.add("main-class");

    const content = document.createElement("div");
    content.classList.add("content");

    const svgContainer = document.createElement("div");
    svgContainer.classList.add("svg-container");
    const svg = document.createElement("div");
    svg.classList.add("plus-svg-icon");
    svg.innerHTML = plusIcon; 

    svgContainer.appendChild(svg);
    content.appendChild(svgContainer);
    main.appendChild(content);
    container.appendChild(main);
    console.log(plusIcon);

    return main;
};

export default createMain;
