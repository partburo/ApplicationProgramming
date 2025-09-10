import fs from "node:fs";

const part = process.argv[2] - 1 || 0;
const data = JSON.parse(fs.readFileSync("./script/tasks.json", "utf8"));
const todo = [];

for(let i = 0; i < part; i++) {  
  const tasks = data[i].tasks;  
  const index = getRandomInt(0, tasks.length - 1);
  todo.push(tasks[index]);
}

const tasks = data[part].tasks;
for (let i = 0; i < 3; i++) {
  const index = getRandomInt(0, tasks.length - 1);
  todo.push(tasks[index]);
  tasks.splice(index, 1);
}

todo.sort();
const tasksmd = "Ваши задачи:\n\n" + todo.join("\n");
fs.writeFileSync("./tasks.md", tasksmd);

let time = 300*(todo.length + 1)
setInterval(() => {
  console.clear()
  const minutes = Math.floor(time / 60)
  const seconds = time - minutes * 60;
  console.log(tasksmd+"\n\n")
  console.log("Осталось " + minutes + " мин. " + seconds + " сек.")
  time--
}, 1000)

// console.log(todo);
// console.log(tasks);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
