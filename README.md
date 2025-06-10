# practicas2025-backends
PHP, Node, Java &amp; Net non serious benchmark

Este repositorio contiene una serie de backends escritos en PHP, Node.js, Java y .NET que sirven para comparar el rendimiento de cada uno de estos lenguajes y plataformas en una serie de pruebas.

Todos los backends comparten una misma API REST que permite realizar las siguientes operaciones:

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
