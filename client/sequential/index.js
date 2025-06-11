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
        let histograma = {};
        let statuses = {};
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
            + (maxFetchMS).toString() + "ms fetch mas largo<br>"
            + '<br>tiempos: ' + JSON.stringify(histograma) 
            + '<br>statuses: ' + JSON.stringify(statuses);

            clearInterval(intervalID );
            return;
          }
          const inicioFetch = new Date();
          if (interval>=50) console.log("Llamada #" + i);
          fetch(urlAPI, {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body:bodyJSON 
          })
          .then((data,err) => {
            if (interval>=50) console.log("Respuesta #" + i, data.status);
            const finalFetch = new Date();
            const tiempoEsteFetch = finalFetch-inicioFetch;
            if (tiempoEsteFetch<minFetchMS) minFetchMS=tiempoEsteFetch;
            if (tiempoEsteFetch>maxFetchMS) maxFetchMS=tiempoEsteFetch;
            histograma[tiempoEsteFetch] = (histograma[tiempoEsteFetch]||0 ) +1;
            statuses[data.status] = (statuses[data.status]||0) + 1;
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
