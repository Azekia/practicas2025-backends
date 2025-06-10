# Notas sobre la implementación en Node.js

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
