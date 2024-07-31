import "./style.css";
import { Project } from "./project.js";
import { Task } from "./task.js";
import { collectProjectNames } from "./collectProjectNames.js";
import { clearInputs } from "./clearInputs.js";
import { removeTaskFromList } from "./removeTaskFromList.js";
import { removeProjectFromList } from "./removeProjectFromList.js";
import { removeTasksFromTaskArea } from "./removeTaskFromTaskArea.js";
import { createActivityLogPanels } from "./createActivityLogPanels.js";
import { closeTaskCreationArea } from "./closeTaskCreationArea.js";
import { dummyProjects } from "./dummy.js";
import { dummyTask } from "./dummy.js";
import { openActivityLog } from "./openActivityLog.js";
import { closeActivityLog } from "./closeActivityLog.js";

let projectList = [];
let projectNames = [];
let activeProject = "General";

dummyProjects(projectList);
dummyTask(projectList);
collectProjectNames(projectNames, projectList);

function createProject(arr1, arr2) {
    let projectName = document.getElementById("projectName");
    let projectDescription = document.getElementById("projectDescription");
    let projectDueDate = document.getElementById("projectDueDate");
    let saveProjectBtn = document.getElementById("saveProjectBtn");

    saveProjectBtn.addEventListener("click", () => {
        if (arr1.includes(projectName.value)) {
            alert("there is already a project with that name");
        } else {
            let project = new Project(
                projectName.value,
                projectDescription.value,
                projectDueDate.value
            );
            arr2.push(project);
            createProjectTab(project);
            clearInputs(projectName, projectDescription, projectDueDate);
        }
    });
}

createProject(projectNames, projectList);

function addProjectToPanel() {
    for (let i = 0; i < projectList.length; i++) {
        const project = projectList[i];
        createProjectTab(project);
    }
}
addProjectToPanel();

function createProjectTab(project) {
    let projectArea = document.getElementById("projectArea");
    let projectPanel = document.createElement("div");
    projectPanel.setAttribute("id", `projectPanel${project["projectName"]}`);
    projectPanel.classList.add("projectPanel");
    let projectTab = document.createElement("div");
    projectTab.setAttribute("id", project["projectName"]);
    projectTab.classList.add("projectTab");
    projectTab.textContent = project["projectName"];
    projectPanel.appendChild(projectTab);
    if (project["projectName"] !== "General") {
        createTaskBtn(projectPanel);
        createDeleteBtn(
            projectPanel,
            project["projectName"],
            project["projectDueDate"]
        );
    } else {
        projectPanel.style.height = "85px";
        createTaskBtn(projectPanel);
    }

    projectArea.appendChild(projectPanel);
    console.log(`Added ${project}${project["projectName"]} to panel`);
    projectPanelsIntoButtons();
}

function createDeleteBtn(panel, projectName, projectDate) {
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", () => {
        deleteBtn.parentElement.remove();
        removeProjectFromList(deleteBtn, projectList);
        let logHeader = projectName;
        let logDetails = `Project was deleted.Was due on: ${projectDate}`;
        createActivityLogPanels(logHeader, logDetails);
    });
    panel.appendChild(deleteBtn);
}

function createTaskBtn(panel) {
    let taskBtn = document.createElement("button");
    taskBtn.innerHTML = `<i class="fa-solid fa-list-check"></i>`;
    taskBtn.classList.add("taskBtn");
    taskBtn.addEventListener("click", () => {
        addNewTask();
    });
    panel.appendChild(taskBtn);
}

function createTask() {
    let taskName = document.getElementById("taskName");
    let taskDescription = document.getElementById("taskDescription");
    let taskDueDate = document.getElementById("taskDueDate");
    let saveTaskBtn = document.getElementById("saveTaskBtn");

    saveTaskBtn.addEventListener("click", () => {
        if (taskName.value.length < 1) {
            taskName.value = null;
            taskDescription.value = null;
            taskDueDate.value = null;
        } else {
            let task = new Task(
                taskName.value,
                taskDescription.value,
                taskDueDate.value
            );
            for (let i = 0; i < projectList.length; i++) {
                const project = projectList[i];
                if (project["projectName"] === activeProject) {
                    project["tasks"].push(task);
                    createTaskTab(task);
                }
            }
            clearInputs(taskName, taskDescription, taskDueDate);
            console.log(projectList);
        }
    });
}

function addNewTask() {
    let taskContainer = document.getElementById("taskContainer");
    if (taskContainer.style.display == "none") {
        taskContainer.style.display = "flex";
        let activeProjectHeading = document.getElementById(
            "activeProjectHeading"
        );
        activeProjectHeading.textContent = activeProject;
        createTask();
    } else {
        taskContainer.style.display = "none";
    }
}

function projectPanelsIntoButtons() {
    let projectPanels = document.querySelectorAll(".projectPanel");
    for (let i = 0; i < projectPanels.length; i++) {
        const projectPanel = projectPanels[i];
        projectPanel.addEventListener("click", () => {
            activeProject = projectPanel.children[0].id;
            displayTaskList(activeProject);
        });
    }
}

projectPanelsIntoButtons();

function displayTaskList(nameOfProject) {
    removeTasksFromTaskArea();
    for (let i = 0; i < projectList.length; i++) {
        const projectName = projectList[i]["projectName"];
        if (projectName === nameOfProject) {
            console.log(projectList[i]["tasks"]);
            for (let j = 0; j < projectList[i]["tasks"].length; j++) {
                const task = projectList[i]["tasks"][j];
                createTaskTab(task, projectName);
            }
        }
    }
}

function cancelTask() {
    let taskContainer = document.getElementById("taskContainer");
    let taskName = document.getElementById("taskName");
    let taskDescription = document.getElementById("taskDescription");
    let taskDueDate = document.getElementById("taskDueDate");
    let cancelTaskBtn = document.getElementById("cancelTaskBtn");
    cancelTaskBtn.addEventListener("click", () => {
        clearInputs(taskName, taskDescription, taskDueDate);
        closeTaskCreationArea(taskContainer);
    });
}

cancelTask();

function createTaskTab(task, projectName) {
    let taskArea = document.getElementById("taskArea");
    let taskPanel = document.createElement("div");
    taskPanel.setAttribute("id", `taskPanel${task["taskName"]}`);
    taskPanel.classList.add("taskPanel");
    let taskPanelHeaderRow = document.createElement("div");
    taskPanelHeaderRow.classList.add("taskPanelHeaderRow");
    let taskTab = document.createElement("div");
    taskTab.setAttribute("id", task["taskName"]);
    taskTab.classList.add("taskTab");
    taskTab.textContent = task["taskName"];
    let taskDueDate = document.createElement("div");
    taskDueDate.classList.add("taskDDate");
    taskDueDate.textContent = task["taskDueDate"];
    let taskBottomRow = document.createElement("div");
    taskBottomRow.classList.add("taskBottomRow");
    let taskDescription = document.createElement("p");
    taskTab.classList.add("taskTabDescription");
    taskDescription.textContent = task["taskDescription"];

    taskPanelHeaderRow.appendChild(taskTab);
    taskPanelHeaderRow.appendChild(taskDueDate);
    taskBottomRow.appendChild(taskDescription);
    taskPanel.appendChild(taskPanelHeaderRow);
    taskPanel.appendChild(taskBottomRow);
    let projName = projectName;
    createTaskDeleteBtn(taskBottomRow, projName);
    taskArea.appendChild(taskPanel);
    console.log(`Added ${task}${task["taskName"]} to panel`);
}

function createTaskDeleteBtn(panel, projectName) {
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", () => {
        deleteBtn.parentElement.parentElement.remove();
        removeTaskFromList(deleteBtn, projectList);
        let logHeader = ` Project: ${projectName}`;
        let logDetails = `Deleted Task ${deleteBtn.parentElement.parentElement.children[0].children[0].innerText}`;
        createActivityLogPanels(logHeader, logDetails);
    });
    panel.appendChild(deleteBtn);
}
openActivityLog();
closeActivityLog();
