document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn").addEventListener("click", function () {
    const urlAPI = document.getElementById("url").value;
    const numLlamadas = document.getElementById("num").value;
    const interval = document.getElementById("interval").value;
    const method = document.getElementById("metodo").value;
    const bodyJSON = document.getElementById("reqbody").value;

    switch (method) {
      case 'POST':
        let i=0;
        let tiempoTotalFetchMS =0;
        let minFetchMS = Number.POSITIVE_INFINITY;
        let maxFetchMS = Number.NEGATIVE_INFINITY;
        const inicio = new Date();
        document.getElementById("resultado").innerText="";
        const intervalID  = setInterval(() => {
          i++;
          if (i>numLlamadas)   {
            const final = new Date();
            document.getElementById("resultado").innerHTML = 
            inicio.toString()+ '<br>'
            + final.toString() + '<br>' 
            + numLlamadas.toString()  + " llamadas<br>"
            + (final-inicio).toString() + "ms proceso<br>"
            + (tiempoTotalFetchMS).toString() + "ms fetchs<br>"
            + (tiempoTotalFetchMS/numLlamadas).toString() + "ms por fetchs<br>"
            + (minFetchMS).toString() + "ms fetch mas corto<br>"
            + (maxFetchMS).toString() + "ms fetch mas largo<br>";

            clearInterval(intervalID );
            return;
          }
          const inicioFetch = new Date();
          fetch(urlAPI, {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body:bodyJSON 
          })
          .then((data,err) => {
            const finalFetch = new Date();
            const tiempoEsteFetch = finalFetch-inicioFetch;
            if (tiempoEsteFetch<minFetchMS) minFetchMS=tiempoEsteFetch;
            if (tiempoEsteFetch>maxFetchMS) maxFetchMS=tiempoEsteFetch;
            tiempoTotalFetchMS += tiempoEsteFetch;
          })
          .catch((error) => console.error("Error : ", error));
        }, interval);
        break;
      case 'GET':
        for (let i = 0; i < numLlamadas; i++) {
          setTimeout(() => {
            fetch(urlAPI)
              .catch((error) => console.error("Error : ", error));
          }, i * interval);
        }
        break;
      default:
        console.error('Método no implementado')
        break;
    }
  });
});
