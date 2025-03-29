import "./styles.css";
import { homeBuilder } from "./home";
import { menuBuilder } from "./menu";
import { aboutBuilder } from "./about";

const contentElement = document.querySelector("#content");

const homeTab = document.querySelector("#home");
const menuTab = document.querySelector("#menu");
const aboutTab = document.querySelector("#about");

homeTab.addEventListener("click", () => {
    changeSelectedTab(homeTab);
    clearContent();
    homeBuilder();
});

menuTab.addEventListener("click", () => {
    changeSelectedTab(menuTab);
    clearContent();
    menuBuilder();
});

aboutTab.addEventListener("click", () => {
    changeSelectedTab(aboutTab);
    clearContent();
    aboutBuilder();
})

function clearContent() {
    while(contentElement.hasChildNodes()) {
        contentElement.firstElementChild.remove();
    }
}

function changeSelectedTab(tab) {
    document.querySelector(".selected").removeAttribute("class");
    tab.setAttribute("class", "selected");
}

homeTab.setAttribute("class", "selected");
homeBuilder();