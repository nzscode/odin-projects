import { populateHeader } from "./populateHeader.js";
import { populateHeroes } from "./populaterHeroes.js";

async function populate() {
    const requestURL =
        "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroesText = await response.text();

    const superHeroes = JSON.parse(superHeroesText);
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
}
