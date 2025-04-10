function toggleTheme() {
  const html = document.documentElement;

  if(html.classList.contains('light')) {
    html.classList.remove('light');
  
  }
}