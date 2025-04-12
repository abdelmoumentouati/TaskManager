function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}