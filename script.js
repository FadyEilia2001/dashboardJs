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

// #endregion

//! ---------------- STATE / CONFIG ------------
// #region STATE
let modalOpen = false;

const tasks = [];
let newTask = {
  title: "",
  desc: "",
  dueDate: "",
  status: "",
  recurring: false,
};
// #endregion

//! ---------------- PURE FUNCTIONS ------------
// #region PURE
function toggleModal() {
  if (!modalOpen) {
    dimLayer.classList.add("dim-open");
    newTaskModal.classList.add("modal-wrapper", "open");
    modalOpen = true;
  } else {
    dimLayer.classList.remove("dim-open");
    newTaskModal.classList.remove("modal-wrapper", "close");
    modalOpen = false;
  }
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

// #endregion
