export function openActivityLog() {
    let activityLogBtn = document.getElementById("activityLogBtn");
    let activityContainer = document.getElementById("activityContainer");
    activityLogBtn.addEventListener("click", () => {
        activityContainer.style.display = "grid";
    });
}
