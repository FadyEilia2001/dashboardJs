//! ---------------- UI ELEMENTS ----------------
// #region UI
const sidebarBtn = document.querySelector("#open-sidebar");
const appWrapper = document.querySelector(".wrapper");
const taskContainer = document.querySelector(".main-tasks");
const createTaskBtn = document.querySelector(".btn-new");
const dimLayer = document.querySelector(".dim-layer");
const newTaskModal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalCancelBtn = document.querySelector(".cancel-btn");
const mainContent = document.querySelector(".main-content");
const formContent = document.querySelector("form");
const mainTasks = document.querySelector(".main-tasks");

// #endregion

// ! >>>>>>>>>>Testing<<<<<<<<<<<<<<<<<<<<<<<<

//! ---------------- STATE / CONFIG ------------
// #region STATE
let modalOpen = false;
const tasks = [];

// #endregion

//! ----------------  FUNCTIONS ------------
// #region PURE
function toggleModal() {
  if (!modalOpen) {
    dimLayer.classList.add("dim-open");
    newTaskModal.classList.remove("modal");
    newTaskModal.classList.add("modal-wrapper", "open");
    modalOpen = true;
  } else {
    dimLayer.classList.remove("dim-open");
    newTaskModal.classList.remove("modal-wrapper", "close");
    newTaskModal.classList.add("modal");
    modalOpen = false;
  }
}

//capture user input from form
function captureUserInput() {}

// Create new Task
function createTask(
  taskTitle,
  taskDesc,
  taskDueDate,
  taskStatus,
  taskRecurring
) {
  const allowedStatus = ["low", "medium", "high"];
  taskStatus = allowedStatus.includes(taskStatus) ? taskStatus : "low";
  const newTask = {
    id: Date.now(),
    title: taskTitle || "Untitled Task",
    desc: taskDesc || "No Description",
    status: taskStatus || "Low Priority",
    dueDate: taskDueDate || "No Due Date",
    recurring: Boolean(taskRecurring),
  };
  tasks.push(newTask);
}

function updateTask() {}

function completeTask() {}

function renderTasks() {
  console.log(tasks);
  tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    taskDiv.innerHTML = `
    <p class="task-recurring">Recurring</p>
    <h3 class="task-title">${task.title}</h3>
    <p class="task-desc">${task.desc}</p>
    <p class="task-date">Due Date:  <span class="compele-date">${task.dueDate}</span></p>
    <span class="task-label">${task.status}</span>
  `;
    mainTasks.appendChild(taskDiv);
  });
}
// #endregion

//! ---------------- EVENT HANDLERS ------------
// #region HANDLERS

// open sidebar
sidebarBtn.addEventListener("click", () => {
  appWrapper.classList.toggle("hidden");
});

// New task button
createTaskBtn.addEventListener("click", (e) => {
  toggleModal();
});

// close modal button
modalCloseBtn.addEventListener("click", () => {
  toggleModal();
});

modalCancelBtn.addEventListener("click", () => {
  toggleModal();
});

//update status
formContent.addEventListener("click", (e) => {
  e.preventDefault();
  let taskStatus = "";
  if (
    e.target.value === "low" ||
    e.target.value === "medium" ||
    e.target.value === "high"
  ) {
    taskStatus = updateStatusActive(e);
  }
  if (e.target.id === "submit") {
    console.log("hello");
    const els = e.currentTarget.elements;
    const taskName = els["task-name"].value;
    const taskDesc = els["task-desc"].value;
    const taskDate = els["task-date"].value;
    createTask(taskName, taskDesc, taskDate, taskStatus, true);
    toggleModal();
    els["task-name"].value = "";
    els["task-desc"].value = "";
    els["task-date"].value = "";
    taskStatus = "low";
    renderTasks();
    console.log(mainContent);
  }
});

mainContent.addEventListener("click", (e) => {
  if (!e.target.closest(".task")) return;
  console.log(e.target);
});

// #endregion
