import Gantt from 'frappe-gantt';

let names = [
    ["Redesign website", [0, 7]],
    ["Write new content", [1, 4]],
    ["Apply new styles", [3, 6]],
    ["Review", [7, 7]],
    ["Deploy", [8, 9]],
    ["Go Live!", [10, 10]]
];

let tasks = names.map(function(name, i) {
    let today = new Date();
    let start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let end = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    start.setDate(today.getDate() + parseInt(name[1][0].toString()));
    end.setDate(today.getDate() + parseInt(name[1][1].toString()));
    return {
        start: start.toISOString().substring(0, 10),
        end: end.toISOString().substring(0, 10),
        name: name[0].toString(),
        id: "Task " + i,
        dependencies: "",
        progress: parseInt((Math.random() * 100).toString(), 10)
    }
});
tasks[1].dependencies = "Task 0";
tasks[2].dependencies = "Task 1";
tasks[3].dependencies = "Task 2";
tasks[5].dependencies = "Task 4";
let gantt = new Gantt("#gantt", tasks);