import "./styles.css";
import { homeTabBuilder } from "./home";
import { menuBuilder } from "./menu";

const contentElement = document.querySelector("#content");

const homeTab = document.querySelector("#home");
const menuTab = document.querySelector("#menu");

homeTab.addEventListener("click", () => {
    clearContent();
    homeTabBuilder();
});

menuTab.addEventListener("click", () => {
    clearContent();
    menuBuilder();
});

function clearContent() {
    while(contentElement.hasChildNodes()) {
        contentElement.firstElementChild.remove();
    }
}

homeTabBuilder();