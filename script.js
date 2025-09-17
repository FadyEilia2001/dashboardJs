// UI elements
const sidebarBtn = document.querySelector("#open-sidebar");
const appWrapper = document.querySelector(".wrapper");

// Toggle sidebar
sidebarBtn.addEventListener("click", () => {
  appWrapper.classList.toggle("hidden");
  console.log(appWrapper.classList);
});
