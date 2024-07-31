let main = document.querySelector("#main");
let projectName = document.getElementById("newProjectName");
let projectDueDate = document.getElementById("addNewDueDate");
let addNewProjectBtn = document.getElementById("addNewProjectBtn");
addNewProjectBtn.addEventListener("click", () => {
    let project_name = projectName.value;
    let project_date = projectDueDate.value;
    new addProject(project_name, project_date);
    projectName.value = "";
    projectDueDate.valueAsDate = null;
});

class addProject {
    constructor(name, date) {
        this.projectName = name;
        this.projectDueDate = date;
        createProject(this.projectName, this.projectDueDate);
    }
}

function deleteSelection(button) {
    button.parentElement.remove();
    // console.log("delete");
}

function createProject(name, dueDate) {
    let projectItem = document.createElement("div");
    projectItem.classList.add("project");
    let projectDetails = document.createElement("div");
    projectDetails.classList.add("projectDetails");
    let projectSection = document.createElement("div");
    projectSection.classList.add("projectSection");
    let projectCompleted = document.createElement("input");
    projectCompleted.setAttribute("type", "checkbox");
    projectCompleted.setAttribute("name", "projectCompleted");
    projectCompleted.classList.add("projectCompleted");
    let projectName = document.createElement("div");
    projectName.textContent = name;
    projectName.classList.add("projectName");
    let editProjectNameBtn = document.createElement("button");
    editProjectNameBtn.innerText = "Edit";
    editProjectNameBtn.classList.add("projectNameEdit");
    let projectDueDate = document.createElement("div");
    projectDueDate.textContent = dueDate;
    projectDueDate.classList.add("dueDate");
    let deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.innerText = "Delete Project";
    deleteProjectBtn.classList.add("deleteProject");
    let addItemBtn = document.createElement("button");
    addItemBtn.classList.add("addItem");
    addItemBtn.innerText = "Add Item";
    main.appendChild(projectItem);
    projectItem.appendChild(projectDetails);
    projectDetails.appendChild(projectSection);
    projectSection.appendChild(projectCompleted);
    projectSection.appendChild(projectName);
    projectSection.appendChild(editProjectNameBtn);
    projectDetails.appendChild(projectDueDate);
    projectDetails.appendChild(deleteProjectBtn);
    projectDetails.appendChild(addItemBtn);

    let deleteProjectBtns = projectDetails.querySelectorAll(".deleteProject");
    for (let i = 0; i < deleteProjectBtns.length; i++) {
        const deleteBtn = deleteProjectBtns[i];

        deleteBtn.addEventListener("click", () => {
            deleteSelection(deleteBtn.parentElement);
        });
    }

    let addItemBtnList = projectDetails.querySelectorAll(".addItem");
    for (let i = 0; i < addItemBtnList.length; i++) {
        const itemBtn = addItemBtnList[i];
        itemBtn.addEventListener("click", () => {
            let itemBtnParent = itemBtn.parentElement.parentElement;
            console.log("item added");
            console.log(itemBtnParent);
            itemInput(itemBtnParent);
        });
    }

    let projectComplete = projectDetails.querySelector("input[type=checkbox]");
    projectComplete.addEventListener("change", () => {
        if (
            projectComplete.checked &&
            !projectName.classList.contains("crossedOut") == true
        ) {
            projectName.classList.add("crossedOut");
            projectItem.classList.add("checkedBGColor");
        } else if (
            projectComplete.checked == false &&
            projectName.classList.contains("crossedOut")
        ) {
            projectName.classList.remove("crossedOut");
            projectItem.classList.remove("checkedBGColor");
        } else if (
            !projectComplete.checked == true &&
            projectName.classList.contains("crossedOut")
        ) {
            projectName.classList.remove("crossedOut");
            projectItem.classList.remove("checkedBGColor");
        }
    });
}

function itemInput(parentElement) {
    let itemSection = document.createElement("div");
    itemSection.classList.add("itemSection");
    let itemItems = document.createElement("div");
    itemItems.classList.add("itemItems");
    let itemCompleted = document.createElement("input");
    itemCompleted.setAttribute("type", "checkbox");
    itemCompleted.setAttribute("name", "itemCompleted");
    itemCompleted.classList.add("itemCompleted");
    let itemDetails = document.createElement("input");
    itemDetails.setAttribute("type", "text");
    itemDetails.setAttribute("name", "itemName");
    itemDetails.setAttribute("placeholder", "Item Name");
    let itemDueDate = document.createElement("input");
    itemDueDate.setAttribute("type", "date");
    itemDueDate.setAttribute("name", "itemDueDate");

    let deleteItem = document.createElement("button");
    deleteItem.classList.add("deleteItem");
    deleteItem.textContent = "deleteItem";
    itemItems.appendChild(itemCompleted);
    itemItems.appendChild(itemDetails);
    itemItems.appendChild(itemDueDate);
    itemItems.appendChild(deleteItem);
    itemSection.appendChild(itemItems);
    parentElement.appendChild(itemSection);

    let deleteItemBtns = document.querySelectorAll(".deleteItem");
    for (let i = 0; i < deleteItemBtns.length; i++) {
        const deleteItem = deleteItemBtns[i];

        deleteItem.addEventListener("click", () => {
            deleteSelection(deleteItem.parentElement);
        });
    }
}

class createItem {
    constructor() {}
}
