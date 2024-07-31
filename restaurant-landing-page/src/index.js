import { initPage } from "./pageLoad.js";
import "./style.css";
import { menuTabBtnLoad } from "./menuTab.js";
import { aboutTabBtnLoad } from "./aboutTab.js";

initPage();

(function tabSwitcher() {
    let homeBtn = document.getElementById("homeBtn");
    homeBtn.addEventListener("click", initPage);
    let menuBtn = document.getElementById("menuBtn");
    menuBtn.addEventListener("click", menuTabBtnLoad);
    let aboutBtn = document.getElementById("aboutBtn");
    aboutBtn.addEventListener("click", aboutTabBtnLoad);
})();
