export function collectProjectNames(arr, arrList) {
    for (let i = 0; i < arrList.length; i++) {
        const project = arrList[i];
        arr.push(project.projectName);
    }
}
