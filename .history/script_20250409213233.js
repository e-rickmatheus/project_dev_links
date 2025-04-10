function toggleTheme() {
  const html = document.documentElement;

  if (html.classList.contains("light-theme ")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}