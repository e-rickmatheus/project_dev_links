function toggleTheme() {
  const html = document.documentElement

  if (html.classList.contains("light-theme")) {
    html.classList.remove("light-theme")
    html.classList.add("dark-theme")
  } else {
    html.classList.remove("dark-theme")
    html.classList.add("light-theme")
  }

  const img = document.querySelector("profile img")
  if(html.classList.contains(light-theme)){
    img.setAttribute('src', './assets')


  } else {
    
  }

}
