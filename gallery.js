function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
  console.log("Menu toggled");
}

const toggleBtn = document.getElementById("toggle-btn");
const contentEN = document.getElementById("content-en");
const contentID = document.getElementById("content-id");

const langSectionsEN = [contentEN];
const langSectionsID = [contentID];

function showWithAnimation(elements) {
  elements.forEach(el => {
    el.style.display = "block";
    el.classList.remove("animate"); 
    void el.offsetWidth; 
    el.classList.add("animate"); 
  });
}

function hideElements(elements) {
  elements.forEach(el => {
    el.style.display = "none";
    el.classList.remove("animate");
  });
}

toggleBtn.addEventListener("click", () => {
  const scrollY = window.scrollY; 
  const isEnglish = contentEN.style.display === "none";

  if (isEnglish) {
    showWithAnimation(langSectionsEN);
    hideElements(langSectionsID);
    toggleBtn.textContent = "EN";
  } else {
    showWithAnimation(langSectionsID);
    hideElements(langSectionsEN);
    toggleBtn.textContent = "ID";
  }

  window.scrollTo({ top: scrollY, behavior: "instant" });
});
