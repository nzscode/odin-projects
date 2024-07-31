export function createActivityLogPanels(deletedProject, deletedDetails) {
    let activityLogArea = document.getElementById("activityLogContents");
    let activityPanel = document.createElement("div");
    activityPanel.classList.add("activityPanel");
    let activityPanelProject = document.createElement("h3");
    activityPanelProject.textContent = deletedProject;
    let activityPanelDetails = document.createElement("ul");
    activityPanelDetails.textContent = deletedDetails;
    activityPanel.appendChild(activityPanelProject);
    activityPanel.appendChild(activityPanelDetails);
    activityLogArea.appendChild(activityPanel);
    console.log(deletedProject);
}
