// Our first feature: calculate how many coding tasks are finished.
function countCompletedTasks(tasks) {
  let completed = 0;

  for (const task of tasks) {
    if (task.done) {
      completed = completed + 1;
    }
  }

  return completed;
}

const todaysTasks = [
  { name: "Learn a JavaScript function", done: true },
  { name: "Make a Git commit", done: false },
  { name: "Push the project to GitHub", done: false },
];

console.log(`Completed today: ${countCompletedTasks(todaysTasks)}`);
