import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import * as fs from 'node:fs/promises';
import { Buffer } from 'node:buffer';

 
const api = express();

const corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200, // For legacy browser support
};
api.use(cors(corsOptions));

api.get('/api/hi', (req, res)=>{
    const hiText = "Hi!"
    res.send(hiText);
})

api.use(compression());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json({ limit: '5mb' }));

api.post('/api/toRoman', (req, res)=> {
    let resultado = [];
    const numVeces = parseInt(req.body.veces);
    let num = JSON.stringify(req.body.numero);
    num = num.toString();
    const regex = /[a-z!@#\$%\^\&*\)\(+=._\-\]]+/i;
    
    if (num < 1 || num > 3999 || -1 < num.search(regex)) {
        res.send("El número debe ser un entero entre 1 y 3999");
    }else {
        const valoresRomanos = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];

    console.log("numVeces",numVeces);

    for(let i = 0; i < numVeces; i++){
    num = parseInt(req.body.numero);

    let romano = "";
    
    for (let j = 0; j < valoresRomanos.length; j++) {
        while (num >= valoresRomanos[j][0]) {
            romano += valoresRomanos[j][1];
            num -= valoresRomanos[j][0];
        }
    }
        const JSONaDevolver = {
            "numero": req.body.numero,
            "veces": req.body.veces,
            "romano": romano
        }
        // resultado.push(JSONaDevolver);
        resultado = JSONaDevolver;
    }
        // console.log(resultado) ;
        res.json(resultado);
        return
    }
})

api.get('/api/cuentaLetrasQuijote/:letra', async (req, res)=> {
    const letra = req.params.letra;
    const dir = `./backends/quijote.txt`;
    const content = await fs.readFile(dir, (err, data) => {
      if (err) throw err;
      return data.toString();
    });
    const contentToString = Buffer.from(content).toString();

    const regexp = new RegExp(`${letra}`, 'g');
    const veces = [...contentToString.matchAll(regexp)];

    res.json(`La letra '${letra}' aparece ${veces.length} veces en el Quijote.`)
})

api.listen(3000, () => {
    console.log("Server listening");
});