const contentElement = document.querySelector("#content");

const coffeeItems = {
    "Americano": "$2.50/$4.00",
    "Cappucino": "$2.50/$4.00",
    "Latte": "$3.70/4.20",
    "Macchiato": "$4.00/$4.50",
    "Mocha": "$4.70/$5.00",
    "White Mocha": "$4.75/$5.25",
    "+ Expresso Shot": "$2.25"
}

const frappeItems = {
    "Java Chip": "$3.10/5.80",
    "Hazelnut Mocha": "$3.25/$4.75",
    "Macchiato": "$3.20/4.20",
    "Dark Mocha": "$3.50/$5.00",
    "Mint Chocolate": "$4.50/$5.50",
    "+ Whipped Cream": "$0.75"
}

const menuNameBuilder = () => {
    const menuName = document.createElement("div");
    menuName.setAttribute("class", "menu-name");
    menuName.textContent = "MENU";
    return menuName;
}

const coffeeSectionBuilder = () => {
    const coffeeSection = document.createElement("div");
    coffeeSection.setAttribute("class", "menu-coffee-section");
    coffeeSection.textContent = "Coffee";
    return coffeeSection;
}

const coffeePriceBuilder = () => {
    const coffeePrice = document.createElement("div");
    coffeePrice.setAttribute("class", "menu-coffee-price");
    coffeePrice.textContent = "Sm/Bg";
    return coffeePrice;
}

const frappeSectionBuilder = () => {
    const frappeSection = document.createElement("div");
    frappeSection.setAttribute("class", "menu-frappe-section");
    frappeSection.textContent = "Frappe";
    return frappeSection;
}

const frappePriceBuilder = () => {
    const frappePrice = document.createElement("div");
    frappePrice.setAttribute("class", "menu-frappe-price");
    frappePrice.textContent = "Sm/Bg";
    return frappePrice;
}

const menuItemsBuilder = (menu, menuItems) => {
    for(const item in menuItems) {
        const menuItem = document.createElement("div");
        menuItem.setAttribute("class", "menu-item");
        menuItem.textContent = item;
        menu.appendChild(menuItem);

        const menuItemPrice = document.createElement("div");
        menuItemPrice.setAttribute("class", "menu-price");
        menuItemPrice.textContent = menuItems[item];
        menu.appendChild(menuItemPrice);
    }
}

const menuBuilder = () => {
    const menu = document.createElement("div");
    menu.setAttribute("class", "menu");
    menu.appendChild(menuNameBuilder());
    menu.appendChild(coffeeSectionBuilder());
    menu.appendChild(coffeePriceBuilder());
    menuItemsBuilder(menu, coffeeItems);
    menu.appendChild(frappeSectionBuilder());
    menu.appendChild(frappePriceBuilder());
    menuItemsBuilder(menu, frappeItems);
    contentElement.appendChild(menu);
}

export { menuBuilder };