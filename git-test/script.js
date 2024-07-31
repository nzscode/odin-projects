let body = document.querySelector("body");
let p1 = document.createElement("p");
let h3 = document.createElement("h3");
let div1 = document.createElement("div");
body.appendChild(p1);
body.appendChild(h3);
body.appendChild(div1);
p1.style.color = "red";
p1.innerText = "Hey i'm red!";
h3.style.color = "blue";
h3.innerText = "I'm a blue h3!";
div1.style.border = "2px solid black";
div1.style.backgroundColor = "pink";
let h1 = document.createElement("h1");
let p2 = document.createElement("p");
div1.appendChild(h1);
div1.appendChild(p2);
h1.innerText = "I'm in a div";
p2.innerText = "ME TOO!";

for (let i = 0; i < 4; i++) {
    let br = document.createElement("br");
    body.appendChild(br);
}
let square = document.createElement("div");
square.setAttribute("id", "id-test"); //if id exists sets it to id-test, if not creates and set it
square.style.borderRadius = "20px";
square.style.borderWidth = "30px";
square.textContent = "Hiya";
body.appendChild(square);

let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    alert("Hello World");
});
