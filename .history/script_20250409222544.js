function toggleTheme() {
  const html = document.documentElement

  if (html.classList.contains("light-theme")) {
    html.classList.remove("light-theme")
    html.classList.add("dark-theme")
  } else {
    html.classList.remove("dark-theme")
    html.classList.add("light-theme")
  }

  const img = document.querySelector("#profile img")

  // Adiciona a classe 'hidden' para iniciar a transição
  img.classList.add("hidden")

  // Aguarda a transição antes de alterar o src
  setTimeout(() => {
    if (html.classList.contains("light-theme")) {
      img.setAttribute("src", "./assets/avatar-pilot-day.png")
    } else {
      img.setAttribute("src", "./assets/avatar-pilot-night.png")
    }

    // Remove a classe 'hidden' após alterar o src
    img.classList.remove("hidden")
  }, 500) // Tempo deve coincidir com a duração da transição no CSS
}
