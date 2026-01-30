/* ===============================
   HarDil App JS
   =============================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- APP BUTTON REDIRECT ---------- */
  document.querySelectorAll(".app-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank", "noopener");
      }
    });
  });

  /* ---------- DRAWER ELEMENTS ---------- */
  const menuBtn = document.querySelector(".menu-icon");
  const drawer = document.getElementById("drawer");
  const closeBtn = document.getElementById("closeMenu");
  const backdrop = document.getElementById("backdrop");

  if (!menuBtn || !drawer || !backdrop) {
    console.warn("HarDil: Menu elements missing");
    return;
  }

  /* ---------- OPEN DRAWER ---------- */
  menuBtn.addEventListener("click", () => {
    drawer.classList.add("open");
    backdrop.classList.add("show");
  });

  /* ---------- CLOSE DRAWER ---------- */
  function closeDrawer() {
    drawer.classList.remove("open");
    backdrop.classList.remove("show");
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeDrawer);
  }

  backdrop.addEventListener("click", closeDrawer);

  /* ---------- SCROLL TO SECTION ---------- */
  document.querySelectorAll("[data-scroll]").forEach(link => {
    link.addEventListener("click", () => {
      const targetClass = link.getAttribute("data-scroll");
      const section = document.querySelector("." + targetClass);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.warn("HarDil: Section not found ->", targetClass);
      }

      closeDrawer();
    });
  });

});
