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

