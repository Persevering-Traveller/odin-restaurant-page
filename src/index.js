import "./styles.css";
import { homeBuilder } from "./home";
import { menuBuilder } from "./menu";
import { aboutBuilder } from "./about";

const contentElement = document.querySelector("#content");

const homeTab = document.querySelector("#home");
const menuTab = document.querySelector("#menu");
const aboutTab = document.querySelector("#about");

homeTab.addEventListener("click", () => {
    clearContent();
    homeBuilder();
});

menuTab.addEventListener("click", () => {
    clearContent();
    menuBuilder();
});

aboutTab.addEventListener("click", () => {
    clearContent();
    aboutBuilder();
})

function clearContent() {
    while(contentElement.hasChildNodes()) {
        contentElement.firstElementChild.remove();
    }
}

homeBuilder();