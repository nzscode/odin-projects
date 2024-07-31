export function menuTabBtnLoad() {
    let mainContent = document.getElementById("mainContent");
    mainContent.replaceChildren();
    let menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menuDiv");
    menuDiv.classList.add("menuDiv");
    mainContent.append(menuDiv);

    let menuItems = [
        {
            itemID: 0,
            itemName: "Salad",
            itemPrice: 4.99,
            itemDescription:
                "Danish biscuit jelly-o sweet chocolate bar chocolate bar danish cookie gummies. Carrot cake pie soufflé biscuit chupa chups sesame snaps apple pie chupa chups. Shortbread pudding topping cotton candy apple pie toffee chocolate cake jujubes.",
        },
        {
            itemID: 1,
            itemName: "Soup",
            itemPrice: 7.59,
            itemDescription:
                "Macaroon icing jujubes sugar plum icing lollipop topping jujubes. Sweet caramels candy candy wafer jelly-o. Sugar plum cotton candy chocolate cake jelly toffee sesame snaps biscuit lollipop cake. Liquorice pudding dessert bonbon pie macaroon. Shortbread toffee ice cream dessert carrot cake. Topping danish cookie sugar plum liquorice. Cake marzipan cotton candy biscuit muffin cheesecake.",
        },
    ];

    for (let i = 0; i < menuItems.length; i++) {
        let menuItemHeading = document.createElement("div");
        menuItemHeading.setAttribute("id", "menuItemHeading" + i);
        menuItemHeading.classList.add("menuItemHeading");

        let menuItemName = document.createElement("h2");
        let price = document.createElement("h2");
        let menuItemDescription = document.createElement("p");

        menuItemName.textContent = menuItems[i]["itemName"];
        ("Gummies jelly-o icing pudding dessert halvah");
        price.textContent = "$" + menuItems[i]["itemPrice"];
        menuItemDescription.textContent = menuItems[i]["itemDescription"];

        menuDiv.appendChild(menuItemHeading);
        menuItemHeading.appendChild(menuItemName);
        menuItemHeading.appendChild(price);
        menuDiv.appendChild(menuItemDescription);
    }
}
