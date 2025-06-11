# practicas2025-backends
PHP, Node, Java &amp; Net non serious benchmark

Este repositorio contiene una serie de backends escritos en PHP, Node.js, Java y .NET que sirven para comparar el rendimiento de cada uno de estos lenguajes y plataformas en una serie de pruebas.

Todos los backends comparten una misma API HTTP que permite realizar las siguientes operaciones:

- **GET /api/hi**: Devuelve un saludo.

Devuelve un texto simple con un saludo.

```
Hi!
```

- **POST /api/toRoman**: Convierte un número entero a su representación en números romanos.

El req.body debe contener un objeto JSON con la siguiente estructura:

```json
{
  "numero": 1234
}
```

El resultado será un objeto JSON con la siguiente estructura:

```json
{
  "numero": 1234,
  "romano": "MCCXXXIV"
}
```

En caso de que el parámetro no sea un número entero entre 1 y 3999, se devolverá un error 400 con el siguiente mensaje:

```json
{
  "error": "El número debe ser un entero entre 1 y 3999"
}
```

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