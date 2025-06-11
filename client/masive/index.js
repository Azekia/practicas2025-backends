document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn").addEventListener("click", function () {
    const urlAPI = document.getElementById("url").value;
    const numVeces = document.getElementById("num").value;
    const numIntervalo = document.getElementById("interval").value;

    for (let i = 0; i < numVeces; i++) {
      setTimeout(() => {
        fetch(urlAPI)
          .then((response) => response.text())
          .then((data) => console.log("Resultado de la api : ", data))
          .catch((error) => console.error("Error : ", error));
      }, i * numIntervalo);
    }
  });
});
