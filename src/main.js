const createMain = () => {
    const container = document.getElementById("container");

    const main = document.createElement("main");
    main.classList.add("main-class");

    const content = document.createElement("div");
    content.classList.add("content");

    main.appendChild(content);
    container.appendChild(main);

    return main;
};

export default createMain;
