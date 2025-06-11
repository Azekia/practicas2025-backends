# practicas2025-backends
PHP, Node, Java &amp; Net '*non so serious*' benchmark

Este repositorio contiene una serie de backends escritos en PHP, Node.js, Java y .NET que sirven para comparar el rendimiento de cada uno de estos lenguajes y plataformas en una serie de pruebas.

Todos los backends deberán soportar peticiones (CORS ORIGIN) desde cualquier origen.

Todos los backends comparten una misma API HTTP que permite realizar las operaciones indicadas a continuación.

---

### `GET /api/hi`

Devuelve un texto simple con un saludo.
Por ejemplo, si se invoca desde la barra de un navegador, se mostrará el mensaje en la pestaña del navegador:

```txt
Hi!
```

---

### `POST /api/toRoman`
Convierte un número entero a su representación en números romanos.
Para que tarde un poco, vamos a llamar a la función el número de veces indicado en el cuerpo de la petición.

El req.body debe contener un texto JSON que representa un objeto con la siguiente estructura:

```json
{
  "numero": 1234,
  "veces": 10000
}
```

El resultado será un texto JSON que representa un objeto con la siguiente estructura:

```json
{
  "numero": 1234,
  "veces": 10000,
  "romano": "MCCXXXIV"
}
```

---

### `GET /api/cuentaLetrasQuijote/letra`

Devuelve un texto simple indicando  el número de veces que aparece esa letra en el texto del Quijote.
Por ejemplo, si se invoca desde la barra de un navegador, se mostrará el mensaje en la pestaña del navegador:

```txt
La letra 'e' aparece 1234 veces en el Quijote.
```

**IMPORTANTE**: Dado que no es el objeto de estas pruebas, en esta versión de la  función se dejará de lado la problemática de las mayúsculas, tildes y acentuaciones. Es decir, `u`, `U`, `ú`, `Ú`, `ü`, `Ü` no se cuentan como la misma letra.

---

---

---

#### resultados provisionales de toRoman (no sirven para comparar rendimiento)
NODE
CADA 0MS
Wed Jun 11 2025 13:56:12 GMT+0200 (hora de verano de Europa central)
Wed Jun 11 2025 13:56:14 GMT+0200 (hora de verano de Europa central)
500 llamadas
1983ms proceso
1185ms fetchs
2.37ms por fetchs
1ms fetch mas corto
10ms fetch mas largo
{"1":80,"2":257,"3":100,"4":40,"5":15,"6":5,"7":1,"9":1,"10":1}

CADA 1MS
Wed Jun 11 2025 13:55:37 GMT+0200 (hora de verano de Europa central)
Wed Jun 11 2025 13:55:39 GMT+0200 (hora de verano de Europa central)
500 llamadas
1986ms proceso
1149ms fetchs
2.298ms por fetchs
1ms fetch mas corto
6ms fetch mas largo
{"1":73,"2":278,"3":87,"4":54,"5":5,"6":3}

CADA 2MS
Wed Jun 11 2025 13:53:46 GMT+0200 (hora de verano de Europa central)
Wed Jun 11 2025 13:53:48 GMT+0200 (hora de verano de Europa central)
500 llamadas
1992ms proceso
1137ms fetchs
2.274ms por fetchs
1ms fetch mas corto
7ms fetch mas largo
{"1":100,"2":256,"3":79,"4":43,"5":17,"6":4,"7":1}

CADA 4MS
Wed Jun 11 2025 13:54:53 GMT+0200 (hora de verano de Europa central)
Wed Jun 11 2025 13:54:55 GMT+0200 (hora de verano de Europa central)
500 llamadas
2005ms proceso
1201ms fetchs
2.402ms por fetchs
1ms fetch mas corto
10ms fetch mas largo
{"1":67,"2":261,"3":107,"4":48,"5":11,"6":2,"7":2,"8":1,"10":1}

JAVA
CADA 0MS
Wed Jun 11 2025 14:03:26 GMT+0200 (hora de verano de Europa central)
Wed Jun 11 2025 14:03:28 GMT+0200 (hora de verano de Europa central)
500 llamadas
1985ms proceso
1025ms fetchs
2.05ms por fetchs
0ms fetch mas corto
7ms fetch mas largo
{"0":9,"1":121,"2":225,"3":137,"4":2,"5":2,"6":3,"7":1}

CADA 1MS
Wed Jun 11 2025 14:02:21 GMT+0200 (hora de verano de Europa central)
Wed Jun 11 2025 14:02:23 GMT+0200 (hora de verano de Europa central)
500 llamadas
1987ms proceso
847ms fetchs
1.694ms por fetchs
0ms fetch mas corto
5ms fetch mas largo
{"0":16,"1":203,"2":203,"3":75,"4":2,"5":1}

CADA 2MS
Wed Jun 11 2025 14:01:33 GMT+0200 (hora de verano de Europa central)
Wed Jun 11 2025 14:01:35 GMT+0200 (hora de verano de Europa central)
500 llamadas
1994ms proceso
1227ms fetchs
2.454ms por fetchs
1ms fetch mas corto
9ms fetch mas largo
{"1":72,"2":178,"3":219,"4":23,"5":5,"8":2,"9":1}

CADA 4MS
Wed Jun 11 2025 14:00:57 GMT+0200 (hora de verano de Europa central)
Wed Jun 11 2025 14:00:59 GMT+0200 (hora de verano de Europa central)
500 llamadas
2005ms proceso
1481ms fetchs
2.962ms por fetchs
0ms fetch mas corto
48ms fetch mas largo
{"0":4,"1":97,"2":181,"3":171,"4":30,"5":3,"7":1,"8":1,"10":1,"15":1,"18":1,"23":1,"25":1,"26":1,"33":1,"35":1,"40":1,"41":1,"45":1,"48":1}