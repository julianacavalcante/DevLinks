function toggleMode() {
  const html = document.documentElement

  // pegar a tag img
  const img = document.querySelector("#profile    img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adcionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.jpeg")
  }

  html.classList.toggle("light")
}
