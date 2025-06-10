# Notas sobre la implementación en Node.js

Solo necesita tener descargado node en el equipo, conocimientos de js y tener descargada la extension de express.js para facilitar el uso de node.js
xxx

```
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';



    this.#expressApp = express();
    this.#expressApp.use(compression());
    this.#expressApp.use(bodyParser.urlencoded({ extended: true }));
    this.#expressApp.use(bodyParser.json({ limit: '5mb' }));



```
