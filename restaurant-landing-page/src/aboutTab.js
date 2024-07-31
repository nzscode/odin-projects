export function aboutTabBtnLoad() {
    let mainContent = document.getElementById("mainContent");
    mainContent.replaceChildren();
    let aboutDiv = document.createElement("div");
    aboutDiv.setAttribute("id", "aboutDiv");
    aboutDiv.classList.add("aboutDiv");
    mainContent.appendChild(aboutDiv);

    let aboutLocation = document.createElement("div");
    aboutLocation.setAttribute("id", "aboutLocation");
    aboutLocation.classList.add("aboutLocation");
    aboutDiv.appendChild(aboutLocation);
    let aboutHeading = document.createElement("h2");
    aboutHeading.textContent = "How to find us: ";
    let aboutAddress = document.createElement("address");
    aboutAddress.innerHTML = `123 Restaurant Street <br> Toronto, Ontario, Canada`;
    let aboutHeadingDirections = document.createElement("p");
    aboutHeadingDirections.innerHTML = `You can find us at the Crossroads of North Road, and East Highway.Take the exit 987 from East Highway, we are on the right of Gassy Gas Station. We have plenty of parking out front, but more on the side as well.`;
    aboutLocation.appendChild(aboutHeading);
    aboutLocation.appendChild(aboutAddress);
    aboutLocation.appendChild(aboutHeadingDirections);
}
