import hardRock from "./assets/hardRock.jpg";
export function initPage() {
    let mainContent = document.querySelector("#mainContent");
    mainContent.replaceChildren();
    let titleBar = document.getElementById("titleBar");
    titleBar.replaceChildren();
    titleBar.classList.add("titleBar");
    let rockImage = document.createElement("img");
    // rockImage.src = "../src/assets/hardRock.jpg";
    rockImage.src = hardRock;
    rockImage.setAttribute("alt", "Hard Rock Restaurant Image from unsplash");
    titleBar.appendChild(rockImage);
    let titleBarDetails = document.createElement("div");
    titleBarDetails.setAttribute("id", "titleBarDetails");
    titleBarDetails.classList.add("titleBarDetails");
    titleBar.appendChild(titleBarDetails);
    let deetsH1 = document.createElement("h1");
    deetsH1.classList.add("restaurantTitle");
    deetsH1.textContent = "Hard Rock Restaurant";
    titleBarDetails.appendChild(deetsH1);
    let deetsP = document.createElement("p");
    deetsP.textContent = "Rock Your Taste!";
    titleBarDetails.appendChild(deetsP);

    let mainContentDescriptionDiv = document.createElement("div");
    mainContentDescriptionDiv.setAttribute("id", "mainContentDescription");
    mainContentDescriptionDiv.classList.add("mainContentDescription");
    mainContent.appendChild(mainContentDescriptionDiv);
    let mainDescriptionPara = document.createElement("p");
    mainDescriptionPara.textContent =
        "Sugar plum dragée sugar plum chocolate cake marshmallow sesame snaps sugar plum chocolate bar jujubes. Jelly beans donut macaroon cake halvah gingerbread lollipop. Pie danish chocolate cake jelly caramels pastry fruitcake jelly beans. Croissant oat cake muffin jujubes jelly-o carrot cake. Sesame snaps jelly beans tootsie roll cookie jelly beans wafer macaroon cookie chocolate cake. Gummi bears soufflé toffee icing chocolate bar icing cookie. Sugar plum cupcake marzipan marzipan cotton candy cotton candy bear claw bear claw lollipop. Tootsie roll carrot cake cupcake gummies bear claw cookie liquorice. Macaroon sugar plum cake chocolate cake toffee liquorice pudding. Bonbon marshmallow soufflé cake brownie marzipan ice cream liquorice cupcake.";
    mainContentDescriptionDiv.appendChild(mainDescriptionPara);
}

// while (main.firstChild) {
//     main.removeChild(main.firstChild);
// }
