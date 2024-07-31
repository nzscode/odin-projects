export function removeTaskFromList(btn, projectList) {
    let parentText =
        btn.parentElement.parentElement.children[0].firstChild.innerText;
    for (let i = 0; i < projectList.length; i++) {
        const taskList = projectList[i]["tasks"];
        for (let j = 0; j < taskList.length; j++) {
            const task = taskList[j];
            if (task["taskName"] === parentText) {
                taskList.splice(j, 1);
            }
        }
    }
    // console.log(projectList);
}
