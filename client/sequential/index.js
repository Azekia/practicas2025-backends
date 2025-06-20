document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn").addEventListener("click", function () {
    const urlAPI = document.getElementById("url").value;
    const numLlamadas = Number.parseInt(document.getElementById("num").value);
    const interval = Number.parseInt(document.getElementById("interval").value);
    const metodo = document.getElementById("metodo").value;
    const bodyJSON = document.getElementById("reqbody").value;

    let i=0;
    let tiempoTotalFetchMS =0;
    let respuestas =0;
    let excepciones =0;
    let minFetchMS = Number.POSITIVE_INFINITY;
    let maxFetchMS = Number.NEGATIVE_INFINITY;
    let histograma = {};
    let statuses = {};
    const inicio = new Date();
    document.getElementById("resultado").innerText="";
    const intervalID  = setInterval(() => {
      i++;
      if (i>numLlamadas)   {
        clearInterval(intervalID );
        return;
      }
      const inicioFetch = new Date();
      if (interval>=50) console.log("Llamada #" + i);
      fetch(urlAPI, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: metodo==='POST' ? bodyJSON : undefined
      })
      .then((data,err) => {
        if (interval>=50) {
          console.log("Respuesta #" + i, data.status);
          data.json().then((json) => {console.log("Respuesta JSON: ", json);});
        }
        const finalFetch = new Date();
        const tiempoEsteFetch = finalFetch-inicioFetch;
        if (tiempoEsteFetch<minFetchMS) minFetchMS=tiempoEsteFetch;
        if (tiempoEsteFetch>maxFetchMS) maxFetchMS=tiempoEsteFetch;
        histograma[tiempoEsteFetch] = (histograma[tiempoEsteFetch]||0 ) +1;
        statuses[data.status] = (statuses[data.status]||0) + 1;
        tiempoTotalFetchMS += tiempoEsteFetch;
        respuestas++;
        console.log("Respuesta "+respuestas+" de "+numLlamadas+", tiempo="+tiempoEsteFetch);
        if (respuestas==numLlamadas) {
          console.log("Reportando resultados");
          const final = new Date();
          // TODO: corregir asincronía, que no termine hasta que todas las peticiones hayan resolve o reject
          document.getElementById("resultado").innerHTML = 
          inicio.toString()+ '<br>'
          + final.toString() + '<br>' 
          + numLlamadas.toString()  + " llamadas<br>"
          + (final-inicio).toString() + "ms proceso<br>"
          + (tiempoTotalFetchMS).toString() + "ms fetchs<br>"
          + '<b>'+(tiempoTotalFetchMS/numLlamadas).toString() + "ms por fetchs</b><br>"
          + (minFetchMS).toString() + "ms fetch mas corto<br>"
          + (maxFetchMS).toString() + "ms fetch mas largo<br>"
          + '<br>tiempos: ' + JSON.stringify(histograma) 
          + '<br>statuses: ' + JSON.stringify(statuses)
          + '<br>respuestas: ' + respuestas.toString()
          + '<br>excepciones: ' + excepciones.toString()
          + '<br>pendientes: ' + (numLlamadas-respuestas-excepciones).toString();
        }
      })
      .catch((error) => {
        console.error("Error : ", error);
        excepciones++;
      });
    }, interval);
  });
});
