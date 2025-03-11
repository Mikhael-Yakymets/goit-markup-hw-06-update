const modalWindow = document.querySelector(".backdrop");
const buttonModalWindow = document.querySelector(".modal-close-btn");
const buttonOpenModalWindow = document.querySelector(".button-section-hero");

buttonModalWindow.addEventListener("click", closeModalWindow);
buttonOpenModalWindow.addEventListener("click", onShowModalWindow);

function onShowModalWindow() {
  modalWindow.classList.add("is-open");
}

function closeModalWindow() {
  modalWindow.classList.remove("is-open");
}
