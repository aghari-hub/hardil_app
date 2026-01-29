function go(page) {
  document.body.style.opacity = 0;
  setTimeout(() => {
    window.location.href = page;
  }, 200);
}

function open(url) {
  window.open(url, "_self");
}
