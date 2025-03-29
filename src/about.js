const contentElement = document.querySelector("#content");

const descriptions = [
    '<span class="emph">JazzHouse Coffee</span> is a <span class="emph">new but old soul\'d</span> coffee house that\'s been serving the <span class="emph">smoothest</span> coffee and Jazz just off Coffee St.',
    'It is owned by <span class="emph">\'Mama Mocha\'</span> herself and she has been fulfilling coffee dreams for over <span class="emph">20 years</span>. Now Mama and her crew have decided to have their own place to please the masses with her barista skills and Mama\'s favorite genre: <span class="emph">Smooth Jazz</span>.',
    '<span class="emph">Every weekend</span> from <span class="emph">3PM to Close</span>, the JazzHouse will have <span class="emph">live local Jazz Bands</span> playing in shop! But don\'t worry if you can\'t make it. Mama\'s <span class="emph">always</span> playing Jazz, and also <span class="emph">sells</span> the bands CDs and merch in store!',
    'So come on in, take a <span class="emph">sip</span> and a <span class="emph">deep breath</span>, and <span class="emph">enjoy</span> Mama\'s JazzHouse.'
];

const titleBuilder = () => {
    const title = document.createElement("div");
    title.setAttribute("class", "title");
    title.textContent = "Who is JazzHouse Coffee?";
    return title;
}

const descriptionsBuilder = (about) => {
    descriptions.forEach(desc => {
        const description = document.createElement("div");
        description.setAttribute("class", "description");
        description.innerHTML = desc;
        about.appendChild(description);
    });
}

const aboutBuilder = () => {
    const about = document.createElement("div");
    about.setAttribute("class", "about");
    about.appendChild(titleBuilder());
    descriptionsBuilder(about);
    contentElement.appendChild(about);
}

export { aboutBuilder };