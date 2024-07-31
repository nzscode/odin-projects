import { Project } from "./project";
import { Task } from "./task";

export function dummyProjects(arr) {
    let general = new Project("General", "likes flowers", "2020-12-29");
    arr.push(general);
}

export function dummyTask(arr) {
    let task1 = new Task("climbing", "10 foot wall", "2020-12-15");
    let task2 = new Task("jumping", "jumping on trampoline", "2092-06-18");
    arr[0]["tasks"].push(task1);
    arr[0]["tasks"].push(task2);
}
