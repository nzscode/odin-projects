export function closeActivityLog() {
    let closeActivityLogBtn = document.getElementById("closeLog");
    let activityContainer = document.getElementById("activityContainer");
    closeActivityLogBtn.addEventListener("click", () => {
        activityContainer.style.display = "none";
    });
}
