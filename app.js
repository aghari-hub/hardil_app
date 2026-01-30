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
// DRAWER LOGIC
const drawer = document.getElementById("drawer");
const backdrop = document.getElementById("backdrop");

document.getElementById("openMenu").onclick = () => {
  drawer.classList.add("open");
  backdrop.classList.add("show");
};

document.getElementById("closeMenu").onclick = closeDrawer;
backdrop.onclick = closeDrawer;

function closeDrawer() {
  drawer.classList.remove("open");
  backdrop.classList.remove("show");
}

// SCROLL NAVIGATION
document.querySelectorAll("[data-scroll]").forEach(item => {
  item.addEventListener("click", () => {
    const target = document.querySelector("." + item.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      closeDrawer();
    }
  });
});
// DRAWER LOGIC
const drawer = document.getElementById("drawer");
const backdrop = document.getElementById("backdrop");

document.getElementById("openMenu").onclick = () => {
  drawer.classList.add("open");
  backdrop.classList.add("show");
};

document.getElementById("closeMenu").onclick = closeDrawer;
backdrop.onclick = closeDrawer;

function closeDrawer() {
  drawer.classList.remove("open");
  backdrop.classList.remove("show");
}

// SCROLL NAVIGATION
document.querySelectorAll("[data-scroll]").forEach(item => {
  item.addEventListener("click", () => {
    const target = document.querySelector("." + item.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      closeDrawer();
    }
  });
});

// THREE DOT MENU LOGIC
const dotsBtn = document.getElementById("dotsBtn");
const dotsMenu = document.getElementById("dotsMenu");

if (dotsBtn && dotsMenu) {
  dotsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dotsMenu.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    dotsMenu.classList.remove("show");
  });
}

