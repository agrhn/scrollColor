/*jshint esversion: 6 */
/*jshint strict: false */

const rowIncrease = 5;
let currentPage = 1;

const getRandomColor = () => {
    const h = Math.floor(Math.random() * 360);
    return `hsl(${h}deg, 90%, 85%)`;
};
let lastColor = getRandomColor();

const createRow = () => {
    const row = document.createElement("div");
    row.className = "row";
    const topColor = lastColor;
    const bottomColor = getRandomColor();
    row.style.background = "linear-gradient(" + topColor + ", " + bottomColor + ")";
    window.colorContainer.appendChild(row);
    lastColor = bottomColor;
};

const addRows = (pageIndex) => {
    currentPage = pageIndex;
    const startRange = (pageIndex - 1) * rowIncrease;
    const endRange = pageIndex * rowIncrease;
    for (let i = startRange + 1; i <= endRange; i++) {
        createRow(i);
    }
};

const handleInfiniteScroll = () => {
    const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if (endOfPage) {
        addRows(currentPage + 1);
    }
};

window.onload = function () {
    window.colorContainer = document.getElementById("color-container");
    window.loader = document.getElementById("loader");
    addRows(currentPage);
};

window.addEventListener("scroll", handleInfiniteScroll);

