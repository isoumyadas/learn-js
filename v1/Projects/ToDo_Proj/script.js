// const addTaskBtn = document.querySelector("#add");
// const ulBtn = document.querySelector("#ul-list");
// const mainContainer = document.querySelector("#main-container");

// addTaskBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const tasksList = document.createElement("li");
//   const tasksInput = document.createElement("input");
//   const tasksCheckbox = document.createElement("input");
//   tasksCheckbox.type = "checkbox";
//   tasksCheckbox.name = `${(tasksInput.type = "text")}`;
//   tasksCheckbox.id = "checkbox";
//   tasksCheckbox.value = `${(tasksInput.type = "text")}`;

//   ulBtn.appendChild(tasksCheckbox);
// });

document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");

  addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <button class="deleteBtn">Delete</button>
            `;
      taskList.appendChild(li);
      taskInput.value = "";
    }
  });

  taskList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.tagName === "INPUT" && target.type === "checkbox") {
      const li = target.parentNode;
      li.classList.toggle("completed");
    } else if (target.classList.contains("deleteBtn")) {
      const li = target.parentNode;
      taskList.removeChild(li);
    }
  });
});
