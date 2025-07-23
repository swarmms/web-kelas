function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
  console.log("Menu toggled");
}

const toggleBtn = document.getElementById("toggle-btn");
const contentEN = document.getElementById("content-en");
const contentID = document.getElementById("content-id");
const contentEN2 = document.getElementById("content-en2");
const contentID2 = document.getElementById("content-id2");
const contentEN3 = document.getElementById("content-en3");
const contentID3 = document.getElementById("content-id3");

const langSectionsEN = [contentEN, contentEN2, contentEN3];
const langSectionsID = [contentID, contentID2, contentID3];

toggleBtn.addEventListener("click", () => {
  if (contentID.style.display === "block") {
    contentID.style.display = "none";
    contentEN.style.display = "block";

    contentID2.style.display = "none";
    contentEN2.style.display = "block";

    contentID3.style.display = "none";
    contentEN3.style.display = "block";

    toggleBtn.textContent = "EN";
  } else {
    contentEN.style.display = "none";
    contentID.style.display = "block";

    contentEN2.style.display = "none";
    contentID2.style.display = "block";

    contentEN3.style.display = "none";
    contentID3.style.display = "block";

    toggleBtn.textContent = "ID";
  }
});