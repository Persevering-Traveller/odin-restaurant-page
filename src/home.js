import coffeeSVGIcon from "./coffee-break-svgrepo-com.svg";

const contentElement = document.querySelector("#content");

const nameBuilder = () => {
    const businessName = document.createElement("div");
    businessName.textContent = "JazzHouse Coffee Co. Llc.";
    businessName.setAttribute("class", "bus-name");
    contentElement.appendChild(businessName);
}

const quoteBuilder = () => {
    const quote = document.createElement("div");
    quote.textContent = '\"The smoothest brew your tastebuds can enjoy.\"';
    quote.setAttribute("class", "quote");
    contentElement.appendChild(quote);
}

const contactInfoBuilder = () => {
    const contactInfo = document.createElement("div");
    contactInfo.setAttribute("class", "contact-info");
    contactInfo.appendChild(numberBuilder());
    contactInfo.appendChild(addressBuilder());
    contentElement.appendChild(contactInfo);
}

const numberBuilder = () => {
    const number = document.createElement("div");
    number.textContent = "(###)###-####";
    number.setAttribute("class", "number");
    return number;
}

const addressBuilder = () => {
    const address = document.createElement("div");
    address.textContent = "111 Coffee St.";
    address.setAttribute("class", "address");
    return address;
}

const iconBuilder = () => {
    const icon = document.createElement("div");
    icon.setAttribute("class", "icon");
    icon.appendChild(coffeeSVGBuilder());
    contentElement.appendChild(icon);
}

const coffeeSVGBuilder = () => {
    const coffeeSVG = document.createElement("img");
    coffeeSVG.setAttribute("class", "coffee");
    coffeeSVG.setAttribute("src", coffeeSVGIcon)
    coffeeSVG.setAttribute("alt", "Picture of a coffee cup");
    return coffeeSVG;
}

const homeTabBuilder = () => {
    nameBuilder();
    quoteBuilder();
    contactInfoBuilder();
    iconBuilder();
}

export { homeTabBuilder };