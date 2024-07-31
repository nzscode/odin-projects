export function removeProjectFromList(btn, arr) {
    let siblingText = btn.parentElement.children[0].outerText;
    for (let i = 0; i < arr.length; i++) {
        const project = arr[i];
        if (project["projectName"] === siblingText) {
            arr.splice(i, 1);
            // console.log(projectList);
        }
    }
}
