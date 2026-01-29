/* ===============================
   HarDil App Logic
   Clean • Safe • Production Ready
================================ */

/* Handle app tile clicks */
document.querySelectorAll(".app-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const url = btn.getAttribute("data-url");
    if (!url) return;

    // Subtle tap feedback (native feel)
    btn.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(0.92)" },
        { transform: "scale(1)" }
      ],
      { duration: 180, easing: "ease-out" }
    );

    // Open link (safe delay)
    setTimeout(() => {
      window.open(url, "_blank", "noopener");
    }, 120);
  });
});

/* Prevent accidental text/image selection */
document.addEventListener("selectstart", e => e.preventDefault());

/* Disable long-press image drag */
document.querySelectorAll("img").forEach(img => {
  img.setAttribute("draggable", "false");
});

/* (Optional) Future Android WebView hook */
if (window.Android && typeof Android.haptic === "function") {
  document.querySelectorAll(".app-btn").forEach(btn => {
    btn.addEventListener("click", () => Android.haptic());
  });
}
