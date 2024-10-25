const title = document.getElementById("title"); // seleccionamos el elemento con id title
const copyELement = document.getElementById("copy-icon");
copyELement.addEventListener("click", () => {
  navigator.clipboard
    .writeText(title.value)
    .then(() => {
      alert("texto copiado");
    })
    .catch((err) => {
      alert("error");
    });
});
