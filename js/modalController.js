function openModal() {
  document.getElementById("login-modal").style.display = "flex";
}
function closeModal() {
  document.getElementById("login-modal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("login-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};