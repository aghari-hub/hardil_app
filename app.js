// SIMPLE CLICK HANDLER (FAIL-SAFE)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".app-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank");
      }
    });
  });
});
const drawer = document.getElementById("drawer");
const backdrop = document.getElementById("backdrop");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

openMenu.onclick = () => {
  drawer.classList.add("open");
  backdrop.classList.add("show");
};

closeMenu.onclick = closeDrawer;
backdrop.onclick = closeDrawer;

function closeDrawer() {
  drawer.classList.remove("open");
  backdrop.classList.remove("show");
}

document.querySelectorAll("[data-scroll]").forEach(item => {
  item.onclick = () => {
    const target = document.querySelector("." + item.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      closeDrawer();
    }
  };
});
