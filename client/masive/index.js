document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn").addEventListener("click", function () {
    const urlAPI = document.getElementById("url").value;
    const invoke = document.getElementById("num").value;
    const interval = document.getElementById("interval").value;
    const method = document.getElementById("metodo").value;
    const numeroRomano = document.getElementById("reqbody").value;

    if (method == "POST") {
      for (let i = 0; i < invoke; i++) {
        setTimeout(() => {
          fetch(urlAPI, {
            method: "POST",
        //     headers: {
        // "Content-Type": "application/json; charset=utf-8", //COMENTADO PARA TEST JS
        //     },
            body: JSON.stringify({ numero: numeroRomano }),
          })
            .then((response) => response.text())
            .then((data) => console.log("Resultado de la api : ", data))
            .catch((error) => console.error("Error : ", error));
        }, i * interval);
      }
    } else {
      for (let i = 0; i < invoke; i++) {
        setTimeout(() => {
          fetch(urlAPI)
            .then((response) => response.text())
            .then((data) => console.log("Resultado de la api : ", data))
            .catch((error) => console.error("Error : ", error));
        }, i * interval);
      }
    }
  });
});
