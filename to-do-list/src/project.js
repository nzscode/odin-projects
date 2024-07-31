export class Project {
    constructor(projectName, projectDescription, projectDueDate) {
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.projectDueDate = projectDueDate;
        this.tasks = [];
    }
}
