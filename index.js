import "./style.css";

let body = document.querySelector("body");
let h1 = document.createElement("h1");
h1.textContent = "Test Test Test";
h1.setAttribute("id", "h1Test");
h1.classList.add("redFont");
body.appendChild(h1);
