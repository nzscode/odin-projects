export function populateHeader(obj) {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.textContent = obj.squadname;
    header.appendChild(myH1);

    const myPara = document.createElement("p");
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}}`;
    header.appendChild(myPara);

    console.log("populateHeader");
}
