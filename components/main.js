// example of a component import
import footer from "./footer.js";

const main = () => {
    const main = document.createElement('main');
    main.appendChild(footer());


    return main;
};

export default main;